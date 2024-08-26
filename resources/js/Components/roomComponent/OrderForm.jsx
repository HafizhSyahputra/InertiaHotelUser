import React, { useState } from "react";
import TextInput from "../TextInput";
import { Inertia } from "@inertiajs/inertia";

function OrderForm({ rooms }) {
    const [totalPeople, setTotalPeople] = useState("");
    const [checkInDate, setCheckInDate] = useState("2024-08-26");
    const [checkOutDate, setCheckOutDate] = useState("2024-08-27");
    const [error, setError] = useState("");

    const calculateTotalPrice = (room, nights) => {
        return room.amount * nights;
    };

    const calculateSavings = (room, nights) => {
        const perNightSavings = room.price - room.amount;
        return perNightSavings * nights;
    };

    const calculateNights = () => {
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const differenceInTime = checkOut - checkIn;
        const differenceInDays = Math.ceil(
            differenceInTime / (1000 * 3600 * 24)
        ); // Selisih hari
        return differenceInDays;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const room = rooms[0];
        const nights = calculateNights();

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

        if (nights < 1) {
            setError("Check-out date must be after check-in date.");
            return;
        }

        // Membuat objek untuk menyimpan data ke localStorage
        const bookingData = {
            checkInDate,
            checkOutDate,
            totalPeople,
            room: {
                id_room: room.id_room,
                amount: room.amount,
                price: room.price,
                bed_type: room.detail_room?.bed_type,
            },
            nights,
            totalPrice: calculateTotalPrice(room, nights),
            totalSavings: calculateSavings(room, nights),
        };

        // Simpan data ke localStorage
        localStorage.setItem("bookingData", JSON.stringify(bookingData));

        console.log("Booking data saved to localStorage:", bookingData);

        // Mengarahkan ke halaman pembayaran menggunakan Inertia
        Inertia.visit("/payment-detail", {
             onSuccess: () => {
                // Optional: Tangani setelah berhasil mengunjungi halaman pembayaran
                console.log("Redirected to payment page successfully");
            },
            onError: (errors) => {
                // Optional: Tangani jika ada kesalahan
                console.log("Error redirecting to payment page:", errors);
            },
        });
    };

    return (
        <div className="h-[575px] w-[414px] bg-white shadow-lg rounded-xl p-7">
            {rooms.map((room) => {
                const nights = calculateNights();
                const totalPrice = calculateTotalPrice(room, nights);
                const totalSavings = calculateSavings(room, nights);

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
                                Rp{" "}
                                {Number(totalSavings).toLocaleString("id-ID", {
                                    minimumFractionDigits: 0,
                                })}{" "}
                                OFF
                            </span>
                        </div>
                        <h1 className="text-2xl font-semibold text-black mt-3">
                            Rp{" "}
                            {Number(room.amount).toLocaleString("id-ID", {
                                minimumFractionDigits: 0,
                            })}{" "}
                            / night
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
                                            value={checkInDate}
                                            onChange={(e) =>
                                                setCheckInDate(e.target.value)
                                            }
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
                                            value={checkOutDate}
                                            onChange={(e) =>
                                                setCheckOutDate(e.target.value)
                                            }
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
                                        value={totalPeople || ""}
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
                                <h4 className="text-sm font-medium">
                                    Bed Type
                                </h4>
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
                                        {Number(totalSavings).toLocaleString(
                                            "id-ID",
                                            {
                                                minimumFractionDigits: 0,
                                            }
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span>Total Harga ({nights} malam)</span>
                                    <span>
                                        Rp{" "}
                                        {Number(totalPrice).toLocaleString(
                                            "id-ID",
                                            {
                                                minimumFractionDigits: 0,
                                            }
                                        )}{" "}
                                    </span>
                                </div>
                            </div>

                            <button className="mt-5 w-full py-3 bg-[#435585] text-white font-semibold rounded-lg">
                                Process to Payment
                            </button>
                        </form>
                    </div>
                );
            })}
        </div>
    );
}

export default OrderForm;
