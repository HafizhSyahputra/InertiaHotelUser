import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ImageDetail from "@/Components/roomComponent/ImageDetail";
import OrderForm from "@/Components/roomComponent/OrderForm";
import AboutRoom from "@/Components/roomComponent/AboutRoom";
import Footer from "@/Components/Footer";

function DetailRoom({ user, rooms }) {
    return (
        <AuthenticatedLayout user={user}>
            <Head title="Detail Room" />
            <div className="px-32 py-16">
                <ImageDetail rooms={rooms} />
                <div className="flex flex-row mt-16 gap-x-16">
                    <OrderForm rooms={rooms} />
                    <div className="flex flex-col">
                        <AboutRoom rooms={rooms} />
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}

export default DetailRoom;
