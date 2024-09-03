import React, { useState, useEffect } from "react";
import TextInput from "../TextInput";
import { Inertia } from "@inertiajs/inertia";
import Cookies from "js-cookie";

function OrderForm({ rooms }) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const formatDate = (date) => {
        return date.toISOString().split("T")[0];
    };

    const [totalPeople, setTotalPeople] = useState("");
    const [checkInDate, setCheckInDate] = useState(formatDate(today));
    const [checkOutDate, setCheckOutDate] = useState(formatDate(tomorrow));
    const [error, setError] = useState("");
    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        // Status Kamar
        const booked = rooms.some(
            (room) => room.detail_room?.status === "booked"
        );
        setIsBooked(booked);
    }, [rooms]);

    useEffect(() => {
        const todayFormatted = formatDate(today);

        if (checkInDate < todayFormatted) {
            setCheckInDate(todayFormatted);
        }

        if (checkOutDate < checkInDate) {
            setCheckOutDate(checkInDate);
        }
    }, [checkInDate, checkOutDate]);

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

        if (isBooked) {
            alert("Sorry, the room is booked.");
            return;
        }

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

        // localStorage
        Cookies.set(
            "bookingData",
            JSON.stringify({
                checkInDate,
                checkOutDate,
                totalPeople,
                room: {
                    name: room.name,
                    id_room: room.id_room,
                    id_detail: room.detail_room?.id_detail,
                    amount: room.amount,
                    price: room.price,
                    status: room.detail_room?.status,
                    bed_type: room.detail_room?.bed_type,
                    images: room.detail_room?.images || [],
                },
                nights,
                totalPrice: calculateTotalPrice(room, nights),
                totalSavings: calculateSavings(room, nights),
            }),
            { expires: 1 }
        );

        Inertia.post(
            "/api/save-booking-data",
            {
                checkInDate,
                checkOutDate,
                totalPeople,
                room: {
                    name: room.name,
                    id_room: room.id_room,
                    id_detail: room.detail_room?.id_detail,
                    amount: room.amount,
                    price: room.price,
                    status: room.detail_room?.status,
                    bed_type: room.detail_room?.bed_type,
                    images: room.detail_room?.images || [],
                },
                nights,
                totalPrice: calculateTotalPrice(room, nights),
                totalSavings: calculateSavings(room, nights),
            },
            {
                onSuccess: () => {},
                onError: (errors) => {
                    console.log("Error redirecting to payment page:", errors);
                },
            }
        );
    };

    return (
        <div
            className={`h-[575px] w-[414px] bg-white shadow-lg rounded-xl p-7 ${
                isBooked ? "opacity-50" : ""
            }`}
        >
            {rooms.map((room) => {
                const nights = calculateNights();
                const totalPrice = calculateTotalPrice(room, nights);
                const totalSavings = calculateSavings(room, nights);

                return (
                    <div key={room.id_room}>
                        {room.detail_room?.images && (
                            <img
                                className="w-0 h-0 overflow-hidden"
                                src={room.detail_room.images[0]}
                                alt="Room image"
                            />
                        )}
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
                                <div className="flex justify-between">
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
                                            disabled={isBooked}
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
                                            disabled={isBooked}
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
                                        disabled={isBooked}
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

                            <button
                                className="mt-5 w-full py-3 bg-[#435585] text-white font-semibold rounded-lg"
                                disabled={isBooked}
                            >
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
