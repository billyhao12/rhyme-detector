/**
 * A radio list group component for rhyme types
 * Based on code from https://flowbite.com/docs/forms/radio/#radio-list-group
 */

import React, { Fragment } from "react";
import { RHYME_TYPE_OPTIONS } from "../constants";

interface IRhymeTypesRadioGroup {
    rhymeType: RHYME_TYPE_OPTIONS;
    setRhymeType: React.Dispatch<React.SetStateAction<RHYME_TYPE_OPTIONS>>;
}

const RhymeTypesRadioGroup = ({
    rhymeType,
    setRhymeType
}: IRhymeTypesRadioGroup) => {
    return (
        <Fragment>
            <h3 className="text-white">Select a rhyme type</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-slate-50 rounded-lg overflow-hidden">
                <li className="w-full border-b border-gray-300 rounded-t-lg">
                    <div className="flex items-center ps-3">
                        <input
                            id={RHYME_TYPE_OPTIONS.MONOSYLLABLE}
                            type="radio"
                            value={RHYME_TYPE_OPTIONS.MONOSYLLABLE}
                            name="rhymeTypes"
                            className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-400 focus:ring-blue-500 focus:ring-2"
                            checked={
                                rhymeType === RHYME_TYPE_OPTIONS.MONOSYLLABLE
                            }
                            onChange={(e) =>
                                setRhymeType(
                                    e.currentTarget.value as RHYME_TYPE_OPTIONS
                                )
                            }
                        />
                        <label
                            htmlFor={RHYME_TYPE_OPTIONS.MONOSYLLABLE}
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                        >
                            Monosyllable
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-300 rounded-t-lg">
                    <div className="flex items-center ps-3">
                        <input
                            id={RHYME_TYPE_OPTIONS.MULTISYLLABLE}
                            type="radio"
                            value={RHYME_TYPE_OPTIONS.MULTISYLLABLE}
                            name="rhymeTypes"
                            className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-400 focus:ring-blue-500 focus:ring-2"
                            checked={
                                rhymeType === RHYME_TYPE_OPTIONS.MULTISYLLABLE
                            }
                            onChange={(e) =>
                                setRhymeType(
                                    e.currentTarget.value as RHYME_TYPE_OPTIONS
                                )
                            }
                        />
                        <label
                            htmlFor={RHYME_TYPE_OPTIONS.MULTISYLLABLE}
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
