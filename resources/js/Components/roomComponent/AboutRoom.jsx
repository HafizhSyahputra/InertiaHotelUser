import React from "react";
import MapComponent from "./MapComponent";

const AboutRoom = ({ rooms }) => {
    if (!Array.isArray(rooms)) {
        console.error("Data rooms harus berupa array");
        return null;
    }

    // Jika tidak ada data marker, buat marker dengan koordinat default
    const markers = rooms.map((room) => ({
        lat: room.location?.lat || -6.2814924, // Default latitude jika tidak ada
        lng: room.location?.lng || 106.7218921, // Default longitude jika tidak ada
        info: `${room.name}<br/>${room.address}`,
    }));

    return (
        <div>
            {rooms.map((room) => (
                <div key={room.id_room}>
                    {room.detail_room?.status === "booked" && (
                        <p className="text-red-600 font-bold mb-2">
                            Sorry the room is {room.detail_room?.status} by other
                            person
                        </p>
                    )}
                    <h1 className="text-3xl font-bold text-black text-wrap text-justify">
                        {room.name}
                    </h1>
                    <h3 className="font-thin text-black text-wrap mt-4 mb-9 text-justify">
                        {room.address}
                    </h3>
                    <h1 className="text-3xl font-bold text-black text-wrap mb-3">
                        Lihat Peta
                    </h1>
                    <MapComponent markers={markers} />
                    <h1 className="text-3xl font-bold text-black text-wrap mt-4 mb-6">
                        Tentang hotel
                    </h1>
                    {room.detail_room?.description && (
                        <h3 className="font-thin text-black text-wrap indent-12 text-justify">
                            {room.detail_room.description}
                        </h3>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AboutRoom;
