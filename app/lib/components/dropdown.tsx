import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { RHYME_STYLE_OPTIONS } from "../constants";

interface IDropdown {
    rhymeStyle: RHYME_STYLE_OPTIONS;
    setRhymeStyle: React.Dispatch<React.SetStateAction<RHYME_STYLE_OPTIONS>>;
}

export default function Dropdown({ rhymeStyle, setRhymeStyle }: IDropdown) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {rhymeStyle}
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                    />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <div
                            onClick={() =>
                                setRhymeStyle(
                                    RHYME_STYLE_OPTIONS.SELECT_A_RHYME_STYLE
                                )
                            }
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            {RHYME_STYLE_OPTIONS.SELECT_A_RHYME_STYLE}
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div
                            onClick={() =>
                                setRhymeStyle(RHYME_STYLE_OPTIONS.MONOSYLLABLE)
                            }
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            {RHYME_STYLE_OPTIONS.MONOSYLLABLE}
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div
                            onClick={() =>
                                setRhymeStyle(RHYME_STYLE_OPTIONS.MULTISYLLABLE)
                            }
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            {RHYME_STYLE_OPTIONS.MULTISYLLABLE}
                        </div>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}
