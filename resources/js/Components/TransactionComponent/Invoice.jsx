import React from "react";
import invoice from "../../../img/invoice.svg";
import bedDummy from "../../../img/roomView.png";
function Invoice() {
    return (
        <div className="bg-white rounded-md shadow-md w-[520px] p-6">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center text-[#435585]">
                    <div className="flex items-center">
                        <img src={invoice} className="w-10" />
                        <p className="ml-4 font-semibold text-md">Invoice</p>
                    </div>
                    <p className="font-semibold text-md">ORDER-231023</p>
                </div>
                <div className="flex flex-row mt-8">
                    <img
                        src={bedDummy}
                        className="w-48 rounded-lg h-32 object-cover"
                    />
                    <div className="flex flex-col justify-center gap-y-1  ml-5">
                        <div className="flex flex-row justify-between gap-28">
                            <p className="text-gray-400">Check in</p>
                            <p>22-10-2022</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-gray-400">Check out</p>
                            <p>22-10-2022</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-gray-400">Bed Type</p>
                            <p>Double</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-gray-400">People</p>
                            <p>2</p>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl font-medium mt-4">
                    Bintaro Guest House near RS Pondok Indah Bintaro RedPartner
                </h1>
                <h1 className="text-xl font-medium mt-8 mb-2">
                    Room in General
                </h1>
                <h1 className="text-sm font-medium mt-4 text-justify indent-8">
                    {" "}
                    Bintaro Guest House near RS Pondok Indah Bintaro RedPartner
                    adalah hotel bintang 1 yang terletak di South Tangerang,
                    Indonesia. Hotel ini berjarak 12 km dari Pondok Indah Mall
                    dan 18 km dari Plaza Senayan. Hotel ini memiliki 20 kamar
                    yang dilengkapi dengan AC, kamar mandi pribadi, dan Wi-Fi
                    gratis. Hotel ini juga memiliki restoran, kedai kopi, dan
                    kolam renang. Lokasi hotel sangat strategis, dekat dengan
                    berbagai tempat wisata dan pusat perbelanjaan. Hotel ini
                    juga cocok untuk wisatawan yang ingin berbisnis di kawasan
                    Bintaro.
                </h1>
                <div className="bg-white rounded-xl flex flex-col mt-6 border border-gray-200">
                    <div className="flex flex-row justify-between p-4">
                        <p className="text-black font-medium">Total Price</p>
                        <p className="text-green-800 font-medium">Rp 200.000</p>
                    </div>
                    <hr></hr>
                    <div className="flex flex-row justify-between p-4">
                        <p className="text-black font-medium">Status Payment</p>
                        <p className="text-green-800 font-medium">Success</p>
                    </div>
                    <hr></hr>
                    <div className="flex flex-row justify-between p-4">
                        <p className="text-black font-medium">Payment Time</p>
                        <p className="text-green-800 font-medium">23-09-2034</p>
                    </div>
                </div>
                <button className="mt-6 w-full bg-[#435585] rounded-xl h-12">
                        <a
                            href="#"
                            className="text-white text-lg"
                        >
                            Print
                        </a>
                    </button>
            </div>
        </div>
    );
}

export default Invoice;
