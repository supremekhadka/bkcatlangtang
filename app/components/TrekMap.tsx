import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngTuple } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  iconSize: [25, 41],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const stops: { name: string; position: LatLngTuple }[] = [
  { name: "Kathmandu", position: [27.7172, 85.324] },
  { name: "Syabrubesi", position: [28.1634, 85.335] },
  { name: "Lama Hotel", position: [28.218, 85.3763] },
  { name: "Langtang Village", position: [28.2174, 85.545] },
  { name: "Kyanjin Gompa", position: [28.2149, 85.5678] },
  { name: "Tserko Ri", position: [28.2154, 85.6157] },
];

const TrekMap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const polylinePositions: LatLngTuple[] = stops.map((stop) => stop.position);

  return (
    <MapContainer
      className=" hidden xl:block drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]"
      center={[28.1634, 85.335]}
      zoom={8.5}
      style={{
        height: "30rem",
        width: "25rem",
        borderRadius: "35px",
        zIndex: -0,
        marginLeft: "0px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stops.map((stop, index) => (
        <Marker key={index} position={stop.position}>
          <Popup>{stop.name}</Popup>
        </Marker>
      ))}
      <Polyline positions={polylinePositions} color="blue" />
    </MapContainer>
  );
};

export default TrekMap;
