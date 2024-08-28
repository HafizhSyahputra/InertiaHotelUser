import React, { useState } from "react";
import { Button } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

function PaymentForm({ user, bookingData }) {
    const [paymentMethod, setPaymentMethod] = useState("bca"); 

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: "long" };
        return new Intl.DateTimeFormat("id-ID", options).format(date);
    };

    const generateOrderId = () => {
        const date = new Date();
        const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
        const timeStr = date.toTimeString().slice(0, 8).replace(/:/g, "");
        const uniqueSuffix = Date.now() % 1000;

        return `ORDER-${dateStr}-${timeStr}${uniqueSuffix}`;
    };

    const handlePayClick = () => {
        Swal.fire({
            title: "Konfirmasi Pembayaran",
            text: "Apakah Anda yakin ingin melanjutkan pembayaran?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, bayar!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.post(
                    "/save-transaction",
                    {
                        order_id: generateOrderId(),
                        check_in_date: bookingData.checkInDate,
                        check_out_date: bookingData.checkOutDate,
                        user_id: user.id,
                        room_id: bookingData.room.id_room,
                        detail_room_id: bookingData.room.id_detail,
                        total_people: bookingData.totalPeople,
                        total_nights: bookingData.nights,
                        tax: bookingData.totalPrice * 0.01,
                        total_price: bookingData.totalPrice,
                        status: "active",
                        payment_type: paymentMethod,
                    },
                    {
                        onSuccess: (response) => {
                            Swal.fire({
                                title: "Pembayaran Berhasil!",
                                text:
                                    flash.success || "Pesanan berhasil dibuat",
                                icon: "success",
                                confirmButtonColor: "#3085d6",
                            }).then(() => {
                                Inertia.visit("/Transactions/TransactionView");
                            });
                        },
                        onError: () => {
                            Swal.fire(
                                "Error!",
                                "Terjadi kesalahan. Silakan coba lagi.",
                                "error"
                            );
                        },
                    }
                );
            }
        });
    };

    if (!bookingData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {bookingData.room.images[0] ? (
                <img
                    src={bookingData.room.images[0]}
                    className="h-[160px] w-[414px] object-cover rounded-lg mb-3 shadow-md"
                    alt="Room Image"
                />
            ) : (
                <div className="h-[160px] w-[414px] bg-gray-200 rounded-lg mb-3 shadow-md flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                </div>
            )}
            <div className="h-auto w-[414px] bg-white shadow-lg rounded-xl p-7">
                <div>
                    <div className="flex flex-row gap-x-5">
                        <h3 className="text-xl font-bold text-black">
                            {bookingData.room.name}
                        </h3>
                    </div>
                    <h1 className="text-2xl font-semibold text-black mt-3"></h1>

                    <div>
                        <div className="mt-5 border rounded-lg p-4">
                            <div className="flex flex-col ">
                                <div className="flex justify-between">
                                    <h4 className="text-sm font-medium">
                                        Check In
                                    </h4>
                                    <p className="font-medium">
                                        <span className="text-blue-900 font-semibold">
                                            {getDayName(
                                                bookingData.checkInDate
                                            )}
                                            ,{" "}
                                        </span>{" "}
                                        {bookingData.checkInDate}{" "}
                                    </p>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <h4 className="text-sm font-medium">
                                        Check Out
                                    </h4>
                                    <p className="font-semibold">
                                        <span className="text-blue-900 font-semibold">
                                            {getDayName(
                                                bookingData.checkOutDate
                                            )}
                                            ,{" "}
                                        </span>{" "}
                                        {bookingData.checkOutDate}
                                    </p>
                                </div>
                            </div>
                            <div className=" flex justify-between mt-1">
                                <h4 className="text-sm font-medium">
                                    Total People
                                </h4>
                                <p>{bookingData.totalPeople}</p>
                            </div>
                        </div>

                        <div className="mt-4 border rounded-lg p-4 flex justify-between">
                            <h4 className="text-sm font-medium">Bed Type</h4>
                            <p>{bookingData.room.bed_type}</p>
                        </div>

                        <div className="mt-4 border rounded-lg p-4 flex justify-between">
                            <h4 className="text-sm font-medium">Refund</h4>
                            <p className="text-red-500">No Refund</p>
                        </div>

                        <div className="mt-5">
                            <div className="flex justify-between">
                                <span>Pajak Website</span>
                                <span>
                                    Rp
                                    {Number(
                                        bookingData.totalPrice * 0.01
                                    ).toLocaleString("id-ID", {
                                        minimumFractionDigits: 0,
                                    })}{" "}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Promo</span>
                                <Button className={"text-blue-900"}>
                                    click me
                                </Button>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>Total Price</span>
                                <span>
                                    Rp
                                    {Number(
                                        bookingData.totalPrice
                                    ).toLocaleString("id-ID", {
                                        minimumFractionDigits: 0,
                                    })}
                                </span>
                            </div>
                        </div>

                        <div className="mt-5 border rounded-lg p-4">
                            <h4 className="text-sm font-medium mb-2">
                                Payment Method
                            </h4>
                            <select
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500  rounded-lg p-2 w-full"
                                value={paymentMethod}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            >
                                <option value="bca">BCA</option>
                                <option value="paypal">
                                    PayPal
                                </option>
                                <option value="mandiri">Mandiri</option>
                                <option value="bri">BRI</option>
                            </select>
                        </div>

                        <button
                            className="mt-5 w-full py-3 bg-[#435585] text-white font-semibold rounded-lg"
                            onClick={handlePayClick}
                        >
                            Pay{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;
