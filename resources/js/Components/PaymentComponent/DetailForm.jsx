import React, { useState } from "react";
import TextInput from "../TextInput";
import { Textarea } from "@headlessui/react";

const DetailForm = () => {
     const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        promo: "",
        country: "",
        note: "",
    });

     const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        promo: "",
        country: "",
        note: "",
    });

    // Handle form TextInput changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and submit logic
        // Clear errors and handle submission
    };

    return (
        <div className="bg-white shadow-md rounded-md px-24 py-10 mt-4 mb-4 flex flex-col max-w-full">
            <form onSubmit={handleSubmit}>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="firstName"
                        >
                            First Name
                        </label>
                        <TextInput
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                            id="firstName"
                            type="text"
                            placeholder="Jane"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && (
                            <p className="text-red text-xs italic">
                                {errors.firstName}
                            </p>
                        )}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="lastName"
                        >
                            Last Name
                        </label>
                        <TextInput
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <TextInput
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                            id="email"
                            type="email"
                            placeholder="udin@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red text-xs italic">
                                {errors.email}
                            </p>
                        )}
                    </div>
                </div>

                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <TextInput
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                            id="phone"
                            type="number"
                            placeholder="123-456-7890"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="promo"
                        >
                            Promo Code
                        </label>
                        <TextInput
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="promo"
                            type="text"
                            placeholder="Optional"
                            value={formData.promo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="Country"
                        >
                            Country
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500  text-grey-darker py-3 px-4 pr-8 rounded"
                            id="Country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="">Select Country</option>
                            <option value="NM">Indonesia</option>
                            <option value="MO">Singapore</option>
                            <option value="TX">Malaysia</option>
                        </select>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="city"
                        >
                            City
                        </label>
                        <TextInput
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            id="city"
                            type="text"
                            placeholder="Tangerang Selatan"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="note"
                    >
                        Note (optional)
                    </label>
                    <Textarea
                        id="note"
                        label="Note"
                        value={formData.note}
                        onChange={handleChange}
                        className={
                            "appearance-none block w-full bg-grey-lighter text-grey-darker border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md py-16 px-4 mb-3 shadow-sm"
                        }
                    />
                </div>
            </form>
        </div>
    );
};

export default DetailForm;
