import React, { useState, useEffect } from "react";
import bedDummy from "../../../img/roomView.png";

function PaymentForm() {

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long' };
        return new Intl.DateTimeFormat('id-ID', options).format(date);
    };

    // State untuk menyimpan data booking
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        // Ambil data dari localStorage
        const data = localStorage.getItem("bookingData");

        if (data) {
            setBookingData(JSON.parse(data));
        }
    }, []);

    // Jika bookingData belum ada (masih loading), tampilkan pesan loading atau spinner
    if (!bookingData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img
                src={bedDummy}
                className="h-[160px] w-[414px] object-cover rounded-lg mb-3 shadow-md"
            />
            <div className="h-[550px] w-[414px] bg-white shadow-lg rounded-xl p-7">
                <div>
                    <div className="flex flex-row gap-x-5">
                        <h3 className="text-xl font-bold text-black">
                            Bintaro Guest House near RS Pondok Indah Bintaro
                            RedPartner
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
                                    <p className="font-medium"><span className="text-blue-900 font-semibold">{getDayName(bookingData.checkInDate)}, </span> {bookingData.checkInDate} </p>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <h4 className="text-sm font-medium">
                                        Check Out
                                    </h4>
                                    <p className="font-semibold"><span className="text-blue-900 font-semibold">{getDayName(bookingData.checkInDate)}, </span> {bookingData.checkOutDate}</p>
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
                                <span>-</span>
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

                        <button className="mt-5 w-full py-3 bg-[#435585] text-white font-semibold rounded-lg">
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;
