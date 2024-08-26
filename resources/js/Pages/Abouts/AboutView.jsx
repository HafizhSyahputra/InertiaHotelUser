import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AboutImage from "../../../img/About-Image.png";
import CompanyOwner from "@/Components/AboutComponent/CompanyOwner";
import WhyWithUs from "@/Components/AboutComponent/WhyWithUs";
import OurTeam from "@/Components/AboutComponent/OurTeam";
import Footer from "@/Components/Footer";

function AboutView({ user }) {
    return (
        <AuthenticatedLayout user={user}>
            <Head title="About Us" />
            <div>
                <div className="relative flex flex-col items-center">
                    <img
                        src={AboutImage}
                        alt="About Us"
                        className="w-full h-[540px] object-cover"
                    />
                    <h1 className="absolute text-5xl top-40 font-extrabold text-white text-center z-10">
                        About Us
                    </h1>
                    <CompanyOwner />
                </div>
                <div className="mt-80 mb-20">
                    <WhyWithUs />
                </div>
                <div className="mb-20">
                    <OurTeam />
                </div>
                <Footer/>
            </div>
        </AuthenticatedLayout>
    );
}

export default AboutView;
