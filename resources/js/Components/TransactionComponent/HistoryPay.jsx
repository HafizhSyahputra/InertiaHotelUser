import React from "react";

function HistoryPay({
    transactions,
    selectedStatus,
    toggleExpand,
    expandedTransactionId,
}) {
    const filteredTransactions =
        selectedStatus === "all"
            ? transactions
            : transactions.filter(
                  (transaction) => transaction.status === selectedStatus
              );

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTransactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="bg-white shadow-sm rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => toggleExpand(transaction.id)}
                    >
                        <img
                            src={transaction.detail_room.images[0]}
                            alt={`Room ${transaction.detail_room_id}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {transaction.order_id}
                            </h2>
                            <h3 className="text-xl font-bold text-gray-700 truncate">
                                {transaction.room.name}
                            </h3>
                            <p className="text-sm font-medium text-green-800">
                                {transaction.status}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-sm font-bold">Purchase date</p>
                                <p className="text-sm font-bold">
                                    {new Intl.DateTimeFormat("id-ID", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }).format(new Date(transaction.created_at))}
                                </p>
                            </div>

                            {expandedTransactionId === transaction.id && (
                                <div className="mt-4 text-gray-700">
                                    <div className="text-gray-800 space-y-2 mb-6">
                                        <p>
                                            <strong className="font-semibold">
                                                Status:
                                            </strong>{" "}
                                            {transaction.status}
                                        </p>
                                        <p>
                                            <strong className="font-semibold">
                                                Check-in:
                                            </strong>{" "}
                                            {transaction.check_in_date}
                                        </p>
                                        <p>
                                            <strong className="font-semibold">
                                                Check-out:
                                            </strong>{" "}
                                            {transaction.check_out_date}
                                        </p>
                                        <p>
                                            <strong className="font-semibold">
                                                Total People:
                                            </strong>{" "}
                                            {transaction.total_people}
                                        </p>
                                        <p>
                                            <strong className="font-semibold">
                                                Total Nights:
                                            </strong>{" "}
                                            {transaction.total_nights}
                                        </p>
                                        <p>
                                            <strong className="font-semibold">
                                                Tax:
                                            </strong>{" "}
                                            Rp
                                            {Number(
                                                transaction.tax
                                            ).toLocaleString("id-ID", {
                                                minimumFractionDigits: 0,
                                            })}
                                        </p>
                                        <p>
                                            <strong className="font-semibold">
                                                Total Price:
                                            </strong>{" "}
                                            Rp
                                            {Number(
                                                transaction.total_price
                                            ).toLocaleString("id-ID", {
                                                minimumFractionDigits: 0,
                                            })}
                                        </p>
                                        <p>
                                            <strong className="font-semibold">
                                                Payment Type:
                                            </strong>{" "}
                                            {transaction.payment_type}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoryPay;
