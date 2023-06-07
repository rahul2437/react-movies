import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const defaultIcon = {
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
};

L.Marker.prototype.options.icon = defaultIcon;

const Map = (props: mapProps) => {
  return (
    <div>
      <MapContainer
        center={[15.852987867206979, 74.50939379135569]}
        zoom={16}
        style={{ height: props.height }}
      >
        <TileLayer
          attribution="React Movies"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
      </MapContainer>
    </div>
  );
};

interface mapProps {
  height: string;
}
Map.defaultProps = {
  height: "500px",
};

export default Map;
