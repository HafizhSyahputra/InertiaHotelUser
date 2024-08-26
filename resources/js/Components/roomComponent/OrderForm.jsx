import React, { useState } from "react";
import TextInput from "../TextInput";

function OrderForm({ rooms }) {
    const [totalPeople, setTotalPeople] = useState();
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const room = rooms[0];

        if (!totalPeople || totalPeople < 1) {
            setError("Total people must be at least 1.");
            return;
        }

        if (totalPeople > room.detail_room?.capacity) {
            setError(
                `Cannot exceed the capacity of ${room.detail_room?.capacity} People.`
            );
            return;
        }

        // Proceed with form submission logic here
    };

    return (
        <div className="h-[575px] w-[414px] bg-white shadow-lg rounded-xl p-7">
            {rooms.map((room) => {
                const savings = room.price - room.amount;

                return (
                    <div key={room.id_room}>
                        <div className="flex flex-row gap-x-5">
                            <h3 className="text-xl font-semibold line-through text-gray-400">
                                Rp{" "}
                                {Number(room.price).toLocaleString("id-ID", {
                                    minimumFractionDigits: 0,
                                })}{" "}
                            </h3>
                            <span className="text-lg font-bold text-red-600">
                                Rp {savings.toLocaleString("id-ID", {
                                    minimumFractionDigits: 0,
                                })} OFF
                            </span>
                        </div>
                        <h1 className="text-2xl font-semibold text-black mt-3">
                            Rp{" "}
                            {Number(room.amount).toLocaleString("id-ID", {
                                minimumFractionDigits: 0,
                            })}{" "}
                        </h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mt-5 border rounded-lg p-4">
                                <div className="flex justify-between ">
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Check In
                                        </h4>
                                        <TextInput
                                            type="date"
                                            defaultValue="2024-12-09"
                                            className="border border-none outline-none focus:outline-none bg-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium">
                                            Check Out
                                        </h4>
                                        <TextInput
                                            type="date"
                                            defaultValue="2024-12-10"
                                            className="border border-none outline-none focus:outline-none bg-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-sm font-medium">
                                        Total People
                                    </h4>
                                    <TextInput
                                        type="number"
                                        value={totalPeople}
                                        placeholder="Insert Total People"
                                        onChange={(e) =>
                                            setTotalPeople(e.target.value)
                                        }
                                        className="border border-none outline-none focus:outline-none bg-transparent w-full"
                                        required
                                    />
                                    {error && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {error}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4 border rounded-lg p-4">
                                <h4 className="text-sm font-medium">Bed Type</h4>
                                {room.detail_room?.bed_type && (
                                    <TextInput
                                        type="text"
                                        defaultValue={room.detail_room.bed_type}
                                        className="border border-none outline-none focus:outline-none bg-transparent w-full"
                                        readOnly
                                    />
                                )}
                            </div>

                            <div className="mt-5">
                                <div className="flex justify-between">
                                    <span>Menghemat Sebesar</span>
                                    <span>
                                        Rp{" "}
                                        {savings.toLocaleString("id-ID", {
                                            minimumFractionDigits: 0,
                                        })}
                                    </span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span>Total Harga</span>
                                    <span>
                                        {" "}
                                        Rp{" "}
                                        {Number(room.amount).toLocaleString(
                                            "id-ID",
                                            {
                                                minimumFractionDigits: 0,
                                            }
                                        )}{" "}
                                    </span>
                                </div>
                            </div>

                            <button className="mt-5 w-full py-3 bg-[#435585] text-white font-semibold rounded-lg">
                                Pesan Sekarang
                            </button>
                        </form>
                    </div>
                );
            })}
        </div>
    );
}

export default OrderForm;
