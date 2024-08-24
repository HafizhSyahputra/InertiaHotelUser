import React from "react";

function Divider() {
    return (
        <div className="flex justify-center mb-10 gap-x-32 items-center bg-[#435585] h-[155px] w-full space-x-8">
            <div className="flex flex-row text-white">
                <div className="flex flex-col">
                    <div className="w-6 h-0.5 bg-white mb-0.5"></div>
                    <span className="text-white text-4xl font-bold">121</span>
                </div>
                <h3 className="ml-3 font-thin">
                    New<br></br> Friendships
                </h3>
            </div>
            <div className="flex flex-row text-white">
                <div className="flex flex-col">
                    <div className="w-6 h-0.5 bg-white mb-0.5"></div>
                    <span className="text-white text-4xl font-bold">254</span>
                </div>
                <h3 className="ml-3 font-thin">
                    New<br></br> Friendships
                </h3>
            </div>
            <div className="flex flex-row text-white">
                <div className="flex flex-col">
                    <div className="w-6 h-0.5 bg-white mb-0.5"></div>
                    <span className="text-white text-4xl font-bold">430</span>
                </div>
                <h3 className="ml-3 font-thin">
                    New<br></br> Friendships
                </h3>
            </div>
            <div className="flex flex-row text-white">
                <div className="flex flex-col">
                    <div className="w-6 h-0.5 bg-white mb-0.5"></div>
                    <span className="text-white text-4xl font-bold">782</span>
                </div>
                <h3 className="ml-3 font-thin">
                    New<br></br> Friendships
                </h3>
            </div>
        </div>
    );
}

export default Divider;
