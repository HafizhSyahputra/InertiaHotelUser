import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import HistoryPay from "@/Components/TransactionComponent/HistoryPay";
import Footer from "@/Components/Footer";

function TransactionView({ user, transactions }) {
    const [expandedTransactionId, setExpandedTransactionId] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const toggleExpand = (transactionId) => {
        setExpandedTransactionId(
            expandedTransactionId === transactionId ? null : transactionId
        );
    };

    const handleFilterChange = (filter) => {
        console.log("Changing filter to:", filter); // Debugging line
        setActiveFilter(filter);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const filteredTransactions = transactions.filter((transaction) => {
        if (activeFilter !== "all" && transaction.status !== activeFilter) {
            return false;
        }
        if (
            startDate &&
            new Date(transaction.created_at) < new Date(startDate)
        ) {
            return false;
        }
        if (endDate && new Date(transaction.created_at) > new Date(endDate)) {
            return false;
        }
        return true;
    });

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Transaction History" />
            <div className="px-36 py-12">
                <div className="flex flex-col md:flex-row gap-x-6 mb-6 w-fit ">
                    <div className="flex flex-col md:flex-row gap-4 mb-6 font-bold w-fit text-[#435585] bg-white shadow-md items-center p-4 rounded-2xl">
                        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                            <div
                                className={`relative cursor-pointer hover:text-blue-800 ${
                                    activeFilter === "all"
                                        ? "text-blue-800"
                                        : ""
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
                                    activeFilter === "active"
                                        ? "text-blue-800"
                                        : ""
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
                                    activeFilter === "waiting"
                                        ? "text-blue-800"
                                        : ""
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
                                    activeFilter === "expired"
                                        ? "text-blue-800"
                                        : ""
                                }`}
                                onClick={() => handleFilterChange("expired")}
                            >
                                Expired
                                {activeFilter === "expired" && (
                                    <span className="absolute block w-full border-b-2 rounded-full border-blue-800 left-0"></span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex flex-row gap-4">
                            <label
                                className="block text-gray-700 font-bold -mt-3"
                                htmlFor="start-date"
                            >
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="start-date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className="border border-gray-300 rounded-lg p-2 -mt-5  w-full md:w-auto"
                            />
                        </div>

                        <div className="flex flex-row gap-4">
                            <label
                                className="block text-gray-700 font-bold -mt-3"
                                htmlFor="end-date"
                            >
                                End Date
                            </label>
                            <input
                                type="date"
                                id="end-date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                className="border border-gray-300 rounded-lg p-2 -mt-5 w-full md:w-auto"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <HistoryPay
                        transactions={filteredTransactions}
                        selectedStatus={activeFilter}
                        toggleExpand={toggleExpand}
                        expandedTransactionId={expandedTransactionId}
                    />
                </div>
            </div>
            <div className="mt-32">
            <Footer /></div>
        </AuthenticatedLayout>
    );
}

export default TransactionView;
