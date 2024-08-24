import React, { useState } from "react";
import profile from "../../../img/profile.svg";
import date from "../../../img/date.svg";
import search from "../../../img/search.svg";
import locations from "../../../img/location.svg";
import TextInput from "../TextInput";

const SearchBar = () => {
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [roomInfo, setRoomInfo] = useState("");

    return (
        <div className="flex items-center justify-center bg-white shadow-md rounded-full mx-auto my-6 w-[900px]">
            <div className="flex items-center space-x-7 px-12 py-2">
                <div className="flex flex-col items-start">
                    <div className="flex items-center text-blue-900 font-semibold mb-1">
                        <img src={locations} />{" "}
                        <span className="ml-2">Location</span>
                    </div>
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="text-gray-600 text-sm bg-transparent outline-none w-full font-medium"
                        style={{ border: "none" }}
                    >
                        <option value="">Select Location</option>
                        <option value="Bintaro">Bintaro</option>
                        <option value="Tangsel">Tangsel</option>
                    </select>
                </div>

                <div className="flex flex-col items-start">
                    <div className="flex items-center text-blue-900 font-semibold mb-1">
                        <img src={date} />{" "}
                        <span className="ml-2">Check in</span>
                    </div>
                    <TextInput
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="text-gray-600 text-sm bg-transparent outline-none w-full placeholder-black font-medium"
                        style={{ border: "none" }}
                    />
                </div>

                <div className="flex flex-col items-start">
                    <div className="flex items-center text-blue-900 font-semibold mb-1">
                        <img src={date} />{" "}
                        <span className="ml-2">Check out</span>
                    </div>
                    <TextInput
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="text-gray-600 text-sm bg-transparent outline-none w-full placeholder-black font-medium"
                        style={{ border: "none" }}
                    />
                </div>

                <div className="flex flex-col items-start">
                    <div className="flex items-center text-blue-900 font-semibold mb-1">
                        <img src={profile} /> <span className="ml-2">Room</span>
                    </div>
                    <select
                        value={roomInfo}
                        onChange={(e) => setRoomInfo(e.target.value)}
                        className="text-gray-600 text-sm bg-transparent outline-none w-full font-medium"
                        style={{ border: "none" }}
                    >
                        <option value="">Select Room</option>
                        <option value="1 Kamar, 2 Tamu">1 Kamar, 2 Tamu</option>
                        <option value="2 Kamar, 4 Tamu">2 Kamar, 4 Tamu</option>
                    </select>
                </div>
            </div>

            <button className="bg-[#435585] text-white rounded-[50px] px-12 py-[37px] h-full flex items-center">
                <img src={search} /> <span className="ml-2">Search</span>
            </button>
        </div>
    );
};

export default SearchBar;
