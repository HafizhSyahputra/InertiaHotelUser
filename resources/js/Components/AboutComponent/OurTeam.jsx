import React from "react";
import andrew from "../../../img/andrew.png";
import girl from "../../../img/girl.png";
import man from "../../../img/man.jpg";

function OurTeam() {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-bold">Meet Our Team</h1>
            <p className="mt-4">kami adalah tim terbaik</p>
            <div className="flex flex-row gap-x-14">
                <div className="card shadow-xl rounded-md bg-white w-72 h-[472px] mt-10">
                    <img
                        src={andrew}
                        className="w-full rounded-t-md h-[360px]"
                    />
                    <div className=" flex flex-col card-body justify-center items-center">
                        <h2 className="text-2xl font-bold mt-5 mb-1">Andrew</h2>
                        <p>CEO</p>
                    </div>
                </div>
                {/*  */}
                <div className="card shadow-xl rounded-md bg-white w-72 h-[472px] mt-10">
                    <img
                        src={man}
                        className="w-full rounded-t-md h-[360px]"
                    />
                    <div className=" flex flex-col card-body justify-center items-center">
                        <h2 className="text-2xl font-bold mt-5 mb-1">Jhon Doe</h2>
                        <p>Co Founder</p>
                    </div>
                </div>
                {/*  */}
                <div className="card shadow-xl rounded-md bg-white w-72 h-[472px] mt-10">
                    <img
                        src={girl}
                        className="w-full rounded-t-md h-[360px]"
                    />
                    <div className=" flex flex-col card-body justify-center items-center">
                        <h2 className="text-2xl font-bold mt-5 mb-1">Andrew</h2>
                        <p>HRD</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
