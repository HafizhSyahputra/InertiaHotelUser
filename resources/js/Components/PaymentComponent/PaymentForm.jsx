import React from "react";
import { Button } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";

function PaymentForm({ user, bookingData }) {
    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: "long" };
        return new Intl.DateTimeFormat("id-ID", options).format(date);
    };

    const generateOrderId = () => {
        const date = new Date();
        const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');  
        const timeStr = date.toTimeString().slice(0, 8).replace(/:/g, '');  
        const uniqueSuffix = Date.now() % 1000;  
    
        return `ORDER-${dateStr}-${timeStr}${uniqueSuffix}`;
    };
    
    const handlePayClick = () => {
        Inertia.post("/save-transaction", {
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
            payment_type: "credit_card",
        }, {
            onSuccess: (response) => {
                if (response.props.success) {
                    alert("Pesanan berhasil dibuat");
                }
            },
            onError: () => {
                alert("Terjadi kesalahan. Silakan coba lagi.");
            }
        });
    };

    if (!bookingData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <pre>{JSON.stringify(bookingData, null, 2)}</pre> */}

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
            <div className="h-[550px] w-[414px] bg-white shadow-lg rounded-xl p-7">
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
