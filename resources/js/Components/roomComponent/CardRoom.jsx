import React from "react";
import stars from "../../../img/stars.svg";
import roomView from "../../../img/roomView.png";

function CardRoom() {
    return (
        <div className="flex flex-wrap gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl w-[280px] h-[465px] flex-shrink-0">
                <img src={roomView} />
                <div className="px-3">
                    <h1 className="text-xl font-bold text-black mt-3 mb-1">
                        Bintaro Guest House near RS Pondok Indah Bintaro
                    </h1>
                    <p className="font-light text-black text-sm">
                        Pondok Aren, Tangerang selatan
                    </p>
                    <div className="flex flex-row mt-3 mb-3">
                        <img src={stars} />
                        <h1 className="text-md font-black text-black mt-[6px] ml-3">
                            4.3 <span className="font-light">(13828)</span>
                        </h1>
                    </div>
                    <div className="flex flex-row text-[12px] gap-x-6 text-gray-500 justify-center font-light">
                        <p>AC</p>
                        <p>Smart TV</p>
                        <p>Free Wifi</p>
                        <p>Pemanas Air</p>
                    </div>
                    <div className="flex flex-row justify-between mt-3">
                        <h1 className="text-xl font-medium text-black">Rp548.625</h1>
                        <h1 className="text-md mt-[1px] font-medium line-through text-black">
                            Rp780.320
                        </h1>
                    </div>
                    <h1 className="flex justify-end text-md mt-[1px] font-medium text-red-600 mb-2">
                        25% off
                    </h1>
                    <a href="#" className="text-white bg-[#435585] px-8 py-2 rounded-2xl">
                        Details
                    </a>
                </div>
            </div>
           
        </div>
    );
}

export default CardRoom;
