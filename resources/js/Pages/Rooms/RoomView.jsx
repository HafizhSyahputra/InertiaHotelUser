import React from "react";
import CardRoom from "@/Components/roomComponent/CardRoom";
import Filter from "@/Components/roomComponent/Filter";

function RoomView() {
    return (
        <div className="p-32">
            <div className="grid grid-cols-2">
                <div className="card">
                    <CardRoom/>
                </div>
                <div>
                    <Filter/>
                </div>
            </div>
        </div>
    );
}

export default RoomView;
