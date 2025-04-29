import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import customIcon from '../assets/svg/ic--twotone-location-on.svg';


const icon = new Icon({
    iconUrl: customIcon,
    iconSize: [40, 40],
    iconAnchor: [40, 20],
    popupAnchor: [0, -40]
})

interface Props {
  center: LatLngExpression;
  points: { lat: number; lng: number; label: string }[];
}

const MapDisplay: React.FC<Props> = ({ center, points }) => {
  return (
    <MapContainer
      center={center}
      zoom={15}
      scrollWheelZoom={true}
      className="w-full h-screen bg-primary rounded z-0"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {points.map((point, index) => (
        <Marker position={[point.lat, point.lng]} key={index} icon={icon}>
          <Popup>{point.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapDisplay;
