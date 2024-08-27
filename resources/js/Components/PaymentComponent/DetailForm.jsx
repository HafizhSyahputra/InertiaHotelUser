import React from "react";
import TextInput from "../TextInput";
import { Textarea } from "@headlessui/react";

const DetailForm = ({ user }) => {
    return (
        <div>
            <h3 className="text-md text-gray-400 mb-5 font-thin">
                Change the following content in your profile page
            </h3>

            <div className="bg-white shadow-md rounded-md px-16 py-10  flex flex-col max-w-full">
                <form key={user.id}>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3  ">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="firstName"
                            >
                                Name
                            </label>
                            <TextInput
                                className="appearance-none block w-[650px] bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                id="firstName"
                                type="text"
                                placeholder="Jane"
                                value={user.name}
                                readOnly
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
                                value={user.email}
                                readOnly
                            />
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
                                value={user.phone}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="Country"
                            >
                                Country
                            </label>
                            <TextInput
                                className="block appearance-none w-full bg-grey-lighter border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500  text-grey-darker py-3 px-4 pr-8 rounded"
                                id="Country"
                                type="text"
                                readOnly
                                value={user.country}
                            />
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
                                value={user.city}
                                readOnly
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
                            className={
                                "appearance-none block w-full bg-grey-lighter text-grey-darker border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md h-36 px-4 mb-1  shadow-sm"
                            }
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetailForm;
