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
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Rp 0 - Rp 120.000</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Rp 0 - Rp 120.000</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Rp 0 - Rp 120.000</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Rp 0 - Rp 120.000</span>
          </label>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3 className="text-xl font-bold mb-2">Facility</h3>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Keamanan 24 Jam</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Parkir roda empat</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Kolam renang 1 Km</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Gratis Sarapan</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Facility</h3>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Keamanan 24 Jam</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Parkir roda empat</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Kolam renang 1 Km</span>
          </label>
        </div>
        <div className="mb-2">
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextInput type="checkbox" />
            <span style={{ marginLeft: "10px" }}>Gratis Sarapan</span>
            </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;