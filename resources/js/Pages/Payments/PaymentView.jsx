// PaymentView.jsx
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PaymentForm from "@/Components/PaymentComponent/PaymentForm";
import DetailForm from "@/Components/PaymentComponent/DetailForm";

function PaymentView({ user, bookingData }) {
    function handleClick() {
        window.history.back();
    }

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Payment Detail" />
            <div className="px-32 py-12">
                <div className="flex flex-row justify-between">
                    <Link
                        href="#"
                        onClick={handleClick}
                        className="flex flex-row font-bold gap-x-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="m15 6l-6 6l6 6"
                            />
                        </svg>
                        <p className="mt-1">Kembali</p>
                    </Link>
                    <h1 className="text-3xl font-bold text-center text-[#435585] ">
                        Ringkasan Pembayaran
                    </h1>
                </div>
                <div className="flex flex-row justify-between mt-10 items-center">
                    <div>
                        <PaymentForm user={user} bookingData={bookingData} />
                    </div>
                    <div>
                        <DetailForm user={user} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PaymentView;
