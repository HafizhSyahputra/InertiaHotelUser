import { Link } from "@inertiajs/react";
import React from "react";

function Footer() {
    return (
        <div className="h-[418px] bg-[#435585] flex flex-col justify-center text-center text-white">
            <h1 className="text-5xl font-bold text-whtite mt-10">
                Digoda Hotel. We’re here
            </h1>
            <h3 className="mt-7 font-extralight">
                Hello, We are Digoda Hotel. trying to make an effort to put the
                right people for you to get the best <br></br>results. Just
                insight
            </h3>
            <div className="flex flex-row gap-x-6 justify-center mt-10">
                <Link
                    href={route("dashboard")}
                    className="flex bg-white text-black px-8 h-10 rounded-full items-center"
                >
                    Home
                </Link>
                <Link
                    href={route("aboutIndex")}
                    className="flex items-center bg-white text-black px-8 h-10 rounded-full"
                >
                    About Us
                </Link>
            </div>
            <h3 className="text-white mt-32">
                © 2022 Digoda. All Rights Reserved
            </h3>
        </div>
    );
}

export default Footer;
