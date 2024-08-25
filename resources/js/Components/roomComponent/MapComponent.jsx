import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};

 const center = {
    lat: -6.2814924,
    lng: 106.7218921,
};

const zoomLevel = 17;

const MapComponent = ({ markers = [] }) => {
    return (
        <MapContainer
            style={mapContainerStyle}
            center={center}
            zoom={zoomLevel}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={[marker.lat, marker.lng]}>
                    <Popup>{marker.info}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
