import React from "react";
import { Link } from "@inertiajs/react";
import stars from "../../../img/stars.svg";

function CardRoom({ rooms }) {
    const shortenAddress = (address) => {
        return address.split(" ").slice(0, 5).join(" ");
    };

    return (
        <div className="flex flex-wrap gap-8">
            {/* Pengecekan jika data rooms ada */}
            {rooms.length > 0 ? (
                rooms.map((room) => (
                    <div key={room.id_room}>
                        <div className="bg-white shadow-md rounded-2xl w-[300px] h-[460px] flex-shrink-0">
                            {room.detail_room?.images && (
                                <img
                                    className="w-[313px] h-[175px] rounded-t-2xl"
                                    src={room.detail_room.images[0]}
                                    alt="Room image"
                                />
                            )}
                            <div className="px-3">
                                <h1 className="text-xl font-bold text-black mt-3 mb-1">
                                    {room.name}
                                </h1>
                                <p className="font-light text-black text-sm">
                                    {shortenAddress(room.address)}
                                </p>
                                <div className="flex flex-row mt-3 mb-3">
                                    <img src={stars} alt="Stars" />
                                    <h1 className="text-md font-black text-black mt-[6px] ml-3">
                                        {room.rate}{" "}
                                        <span className="font-light">
                                            (13828)
                                        </span>
                                    </h1>
                                </div>
                                <div className="flex flex-row text-[12px] gap-x-6 text-gray-500 justify-center font-light">
                                    {room.detail_room?.facility?.map(
                                        (fac, index) => (
                                            <p key={index}>{fac}</p>
                                        )
                                    )}
                                </div>
                                <div className="flex flex-row justify-between mt-3">
                                    <h1 className="text-xl font-medium text-black">
                                        <span>
                                            Rp{" "}
                                            {Number(room.amount).toLocaleString(
                                                "id-ID",
                                                { minimumFractionDigits: 0 }
                                            )}
                                        </span>
                                    </h1>
                                    <h1 className="text-md mt-[1px] font-medium line-through text-black">
                                        Rp{" "}
                                        {Number(room.price).toLocaleString(
                                            "id-ID",
                                            { minimumFractionDigits: 0 }
                                        )}
                                    </h1>
                                </div>
                                <h1 className="flex justify-end text-md mt-[1px] font-medium text-red-600 mb-2">
                                    {room.discount}% Off
                                </h1>
                                <Link
                                    href={`/detail/room/${room.id_room}`}
                                    className="text-white bg-[#435585] px-8 py-2 rounded-2xl hover:bg-blue-900"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center w-full">
                    <div
                        className="bg-red-100 border border-red-400 text-red-700 px-[360px] py-4 w-full rounded relative mb-4"
                        role="alert"
                    >
                        <strong className="font-bold">Perhatian: </strong>
                        <span className="block sm:inline w-full">
                            Kamar Tidak ditemukan
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CardRoom;
