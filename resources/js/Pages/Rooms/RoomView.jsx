import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CardRoom from "@/Components/roomComponent/CardRoom";
import Filter from "@/Components/roomComponent/Filter";
import Footer from "@/Components/Footer";

function RoomView({ user, rooms }) {
    const [priceRange, setPriceRange] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);

    const handlePriceFilterChange = (range) => {
        setPriceRange((prev) =>
            prev.includes(range)
                ? prev.filter((r) => r !== range)
                : [...prev, range]
        );
    };

    const handleFacilityFilterChange = (facility) => {
        setSelectedFacilities((prev) =>
            prev.includes(facility)
                ? prev.filter((f) => f !== facility)
                : [...prev, facility]
        );
    };

    const filteredRooms = rooms.filter((room) => {
        const isInPriceRange = priceRange.length
            ? priceRange.some((range) => {
                  const [min, max] = range.split("-");
                  const price = room.amount;
                  return price >= parseInt(min) && price <= parseInt(max);
              })
            : true;

        const hasSelectedFacilities = selectedFacilities.length
            ? selectedFacilities.every((facility) =>
                  room.detail_room.facility.includes(facility)
              )
            : true;

        return isInPriceRange && hasSelectedFacilities;
    });

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Rooms" />
            <div className="px-32 py-16 flex">
                <div className="flex-grow">
                    <h1 className="text-3xl font-bold mb-8 leading-normal w-3/6">
                        100+ Ruangan Murah di{" "}
                        <span className="text-[#435585]">Digoda</span> Hotel
                        Bintaro, Tangerang Selatan
                    </h1>
                    <div className="flex">
                        <div className="flex-grow">
                            <CardRoom rooms={filteredRooms} />
                        </div>
                        <div className="-mt-2">
                            <Filter
                                onPriceChange={handlePriceFilterChange}
                                onFacilityChange={handleFacilityFilterChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}

export default RoomView;
