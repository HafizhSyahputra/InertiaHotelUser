import React from "react";
import TextInput from "../TextInput";

const Filter = () => {
    return (
        <div style={{ padding: "20px", maxWidth: "300px" }}>
            <h2 className="text-3xl font-bold mb-3">Filter</h2>

            <div style={{ marginBottom: "20px" }}>
                <h3 className="text-xl font-bold mb-2">
                    Price per Night (In Rp)
                </h3>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Rp 0 - Rp 120.000
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Rp 0 - Rp 120.000
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Rp 0 - Rp 120.000
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Rp 0 - Rp 120.000
                    </label>
                </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <h3 className="text-xl font-bold mb-2">Facility</h3>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Keamanan 24 Jam
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Parkir roda empat
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Kolam renang 1 Km
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Gratis Sarapan
                    </label>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-2">Facility</h3>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Keamanan 24 Jam
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Parkir roda empat
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Kolam renang 1 Km
                    </label>
                </div>
                <div>
                    <label>
                        <TextInput type="checkbox" />
                        Gratis Sarapan
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filter;
