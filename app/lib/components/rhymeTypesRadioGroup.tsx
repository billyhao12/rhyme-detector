/**
 * A radio list group component for rhyme types
 * Based on code from https://flowbite.com/docs/forms/radio/#radio-list-group
 */

import React, { Fragment } from "react";

const RhymeTypesRadioGroup = () => {
    return (
        <Fragment>
            <h3 className="text-white">Select a rhyme type</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            id="monosyllable"
                            type="radio"
                            value=""
                            name="rhymeTypes"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                            htmlFor="monosyllable"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                        >
                            Monosyllable
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center ps-3">
                        <input
                            id="multisyllable"
                            type="radio"
                            value=""
                            name="rhymeTypes"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                            htmlFor="multisyllable"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                        >
                            Multisyllable
                        </label>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
};

export default RhymeTypesRadioGroup;
