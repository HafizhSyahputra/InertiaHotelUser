import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CardRoom from "@/Components/roomComponent/CardRoom";
import Filter from "@/Components/roomComponent/Filter";
import Footer from "@/Components/Footer";

function RoomView({ user, rooms }) {
    return (
        <AuthenticatedLayout user={user}>
            <Head title="Rooms" />
            <div className="px-32 py-16">
                <h1 className="text-3xl font-bold mb-8 leading-normal w-3/6">
                    100+ Ruangan Murah di{" "}
                    <span className="text-[#435585]">Digoda</span> Hotel
                    Bintaro, Tangerang Selatan
                </h1>
                <div className="flex flex-row">
                    <div className="card">
                        <CardRoom rooms={rooms} />
                    </div>
                    <div className="w-[250px] -mt-3 ml-8">
                        <Filter />
                    </div>
                </div>
            </div>
            <Footer/>
        </AuthenticatedLayout>
    );
}

export default RoomView;
