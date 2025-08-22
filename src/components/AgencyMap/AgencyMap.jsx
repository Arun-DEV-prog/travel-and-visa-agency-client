import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AgencyMap = () => {
  const position = [23.12886, 89.8482]; // Ghonapara, Gopalganj

  return (
    <MapContainer center={position} zoom={8} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Monowar-Group - Ghonapara, Gopalganj</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AgencyMap;
