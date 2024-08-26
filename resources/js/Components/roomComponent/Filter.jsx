import React from "react";
import TextInput from "../TextInput";

const Filter = ({ onPriceChange, onFacilityChange }) => {
    const priceRanges = [
        { label: "Rp 0 - Rp 300.000", range: "0-300000" },
        { label: "Rp 300.000 - Rp 500.000", range: "300000-500000" },
        { label: "Rp 500.000 - Rp 800.000", range: "500000-800000" },
        { label: "Rp 800.000 - Rp 2.000.000", range: "800000-2000000" },
    ];

    const facilities = [
        "Free Headset",
        "Free Wifi",
        "Kolam renang 1 Km",
        "Gratis Lunch",
        "AC",
        "Smart TV",
        "Mini Bar",
        "Coffee Maker",
    ];

    return (
        <div style={{ padding: "20px", maxWidth: "300px",  }}>
            <h2 className="text-3xl font-bold mb-3">Filter</h2>

            <div style={{ marginBottom: "20px" }}>
                <h3 className="text-xl font-bold mb-2">
                    Price per Night (In Rp)
                </h3>
                {priceRanges.map(({ label, range }) => (
                    <div className="mb-2" key={range}>
                        <label
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <TextInput
                                type="checkbox"
                                onChange={() => onPriceChange(range)}
                            />
                            <span style={{ marginLeft: "10px" }}>{label}</span>
                        </label>
                    </div>
                ))}
            </div>

            <div style={{ marginBottom: "20px" }}>
                <h3 className="text-xl font-bold mb-2">Facility</h3>
                {facilities.map((facility) => (
                    <div className="mb-2" key={facility}>
                        <label
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <TextInput
                                type="checkbox"
                                onChange={() => onFacilityChange(facility)}
                            />
                            <span style={{ marginLeft: "10px" }}>
                                {facility}
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
