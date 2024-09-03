import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MapComponent from "./MapComponent";

const AboutRoom = ({ rooms }) => {
    if (!Array.isArray(rooms)) {
        console.error("Data rooms harus berupa array");
        return null;
    }

    const markers = rooms.map((room) => ({
        lat: room.location?.lat || -6.2814924,
        lng: room.location?.lng || 106.7218921,
        info: `${room.name}<br/>${room.address}`,
    }));

    rooms.forEach(room => {
        if (room.detail_room?.status === "booked") {
            toast.error(`"${room.name}" is already booked by someone else!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    });

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
                    <h1 className="text-3xl font-bold text-black text-wrap mt-8 mb-6">
                        Tentang hotel
                    </h1>
                    {room.detail_room?.description && (
                        <h3 className="font-thin text-black text-wrap indent-12 text-justify">
                            {room.detail_room.description}
                        </h3>
                    )}
                </div>
            ))}
            <ToastContainer />
        </div>
    );
};

export default AboutRoom;

