// TransactionView.jsx
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import HistoryPay from "@/Components/TransactionComponent/HistoryPay";

function TransactionView({ user, transactions }) {
    const [expandedTransactionId, setExpandedTransactionId] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");

    const toggleExpand = (transactionId) => {
        setExpandedTransactionId(
            expandedTransactionId === transactionId ? null : transactionId
        );
    };

    const handleFilterChange = (filter) => {
        console.log("Changing filter to:", filter); // Debugging line
        setActiveFilter(filter);
    };

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Transaction History" />
            <div className="px-36 py-12">
                <div className="flex flex-row gap-10 mb-6 font-bold text-[#435585] bg-white shadow-md items-center h-14 w-fit p-7 rounded-2xl ">
                    <div
                        className={`relative cursor-pointer hover:text-blue-800 ${
                            activeFilter === "all" ? "text-blue-800" : ""
                        }`}
                        onClick={() => handleFilterChange("all")}
                    >
                        ALL
                        {activeFilter === "all" && (
                            <span className="absolute block w-full border-b-2 rounded-full border-blue-800 left-0"></span>
                        )}
                    </div>
                    <div
                        className={`relative cursor-pointer hover:text-blue-800 ${
                            activeFilter === "active" ? "text-blue-800" : ""
                        }`}
                        onClick={() => handleFilterChange("active")}
                    >
                        Active
                        {activeFilter === "active" && (
                            <span className="absolute block w-full border-b-2 rounded-full border-blue-800 left-0"></span>
                        )}
                    </div>
                    <div
                        className={`relative cursor-pointer hover:text-blue-800 ${
                            activeFilter === "waiting" ? "text-blue-800" : ""
                        }`}
                        onClick={() => handleFilterChange("waiting")}
                    >
                        Waiting for Payment
                        {activeFilter === "waiting" && (
                            <span className="absolute block w-full border-b-2 rounded-full border-blue-800 left-0"></span>
                        )}
                    </div>
                    <div
                        className={`relative cursor-pointer hover:text-blue-800 ${
                            activeFilter === "expired" ? "text-blue-800" : ""
                        }`}
                        onClick={() => handleFilterChange("expired")}
                    >
                        Expired
                        {activeFilter === "expired" && (
                            <span className="absolute block w-full border-b-2 rounded-full border-blue-800 left-0"></span>
                        )}
                    </div>
                </div>

                <div>
                    <HistoryPay
                        transactions={transactions}
                        selectedStatus={activeFilter}
                        toggleExpand={toggleExpand}
                        expandedTransactionId={expandedTransactionId}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default TransactionView;
