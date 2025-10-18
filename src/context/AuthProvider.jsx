import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { saveJwtToken } from "../hooks/saveJwtToken";
import { app } from "../../firebase.config";
import { AuthContext } from "./AuthContext";
import axiousPublic from "../hooks/axiousPublic";

// ✅ fixed typo

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // ✅ properly declared

  const updateUserCoins = (newCoins) => {
    setUser((prevUser) => ({ ...prevUser, coins: newCoins }));
  };

  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setAuthLoading(true);
    return signOut(auth)
      .then(() => {
        localStorage.removeItem("access-token");
        setUser(null);
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  // 🔐 Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setAuthLoading(true);

      if (firebaseUser?.email) {
        try {
          // 1. Save JWT token
          await saveJwtToken(firebaseUser);

          // 2. Get user data from backend
          const res = await axiousPublic.get(`/users/${firebaseUser.email}`);
          setUser(res.data); // includes email, name, role, coin, etc.
        } catch (error) {
          console.error("User not found or error in JWT/user fetch:", error);
          setUser(null);
          localStorage.removeItem("access-token");
        }
      } else {
        // User logged out
        setUser(null);
        localStorage.removeItem("access-token");
      }

      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    authLoading, // ✅
    createUser,
    signIn,
    logOut,

    updateUserCoins,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
