// San Bar cc/frontend/src/MapComponent.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [35.106766, -106.6504]
const customIcon = new L.Icon({
    iconUrl: '/RedPin.png',  // Path to your SVG file
    iconSize: [52, 64],  // Size of the icon
    iconAnchor: [22, 94],  // Point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76],  // Point from which the popup should open relative to the iconAnchor
});

const MapComponent: React.FC = () => {
    return (
        <MapContainer center={[35.0844, -106.6504]} zoom={10} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position ={position} icon={customIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
