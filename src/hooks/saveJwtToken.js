import axiousPublic from "./axiousPublic";

export const saveJwtToken = async (user) => {
  const res = await axiousPublic.post("/jwt", {
    email: user.email,
  });
  localStorage.setItem("access-token", res.data.token);
};
