import React from "react";
import roomDummy from "../../../img/roomDummy.svg";
import profilepicture from "../../../img/profile-picture.svg";

function PromoRating() {
    return (
        <div>
            <h1 className="text-3xl px-[180px] font-bold text-black mt-24 mb-12">
                Promotion this month
            </h1>
            <div className="promo gap-x-12 flex flex-row justify-center mb-10">
                <div className="flex flex-row justify-between">
                    <div className="card flex shadow-md p-5 rounded-xl text-center">
                        <img src={roomDummy} />
                        <div className="flex flex-col gap-y-4 justify-center items-center">
                            <h1 className="text-4xl font-bold text-black">
                                50% Off
                            </h1>
                            <h3 className="text-md text-gray-500 w-80">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa, illum aspernatur{" "}
                            </h3>
                            <a
                                href="#"
                                className="text-white bg-[#435585] p-2 rounded-full w-32"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="card flex shadow-md p-5 rounded-xl text-center">
                        <img src={roomDummy} />
                        <div className="flex flex-col gap-y-4 justify-center items-center">
                            <h1 className="text-4xl font-bold text-black">
                                50% Off
                            </h1>
                            <h3 className="text-md text-gray-500 w-80">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa, illum aspernatur{" "}
                            </h3>
                            <a
                                href="#"
                                className="text-white bg-[#435585] p-2 rounded-full w-32"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center ">
                <h3 className="font-thin text-black text-center mt-16">
                    digoda hotel
                </h3>
                <h1 className="text-3xl font-bold text-black mt-5 text-center">
                    what our customers say
                </h1>
                <div className="flex flex-row justify-center gap-x-10 mt-5">
                    <div className=" flex flex-col w-auto h-96 shadow-lg rounded-3xl p-10">
                        <h1 className="text-6xl font-bold text-black">‘’</h1>
                        <p className="w-[483px] font-medium text-black ">
                            Exceptional service! The staff was incredibly
                            friendly, responsive, and dedicated. They willingly
                            assisted with all our needs. The modern facilities
                            and cleanliness of the rooms were commendable as
                            well. Our stay was truly enjoyable. Thank you for
                            the satisfying service; we will definitely recommend
                            this place to friends and family!"
                        </p>
                        <div className="flex flex-row mt-5">
                            <img src={profilepicture} />
                            <div className="flex flex-col ml-4">
                                <h1 className="text-xl font-bold text-black">
                                    Jhon Doe
                                </h1>
                                <h3 className="text-gray-400 font-thin">
                                    -customer
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className=" flex flex-col w-auto h-96 shadow-lg rounded-3xl p-10">
                        <h1 className="text-6xl font-bold text-black">‘’</h1>
                        <p className="w-[483px] font-medium text-black ">
                            Exceptional service! The staff was incredibly
                            friendly, responsive, and dedicated. They willingly
                            assisted with all our needs. The modern facilities
                            and cleanliness of the rooms were commendable as
                            well. Our stay was truly enjoyable. Thank you for
                            the satisfying service; we will definitely recommend
                            this place to friends and family!"
                        </p>
                        <div className="flex flex-row mt-5">
                            <img src={profilepicture} />
                            <div className="flex flex-col ml-4">
                                <h1 className="text-xl font-bold text-black">
                                    Jhon Doe
                                </h1>
                                <h3 className="text-gray-400 font-thin">
                                    -customer
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromoRating;
