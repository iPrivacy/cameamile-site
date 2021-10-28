import { Fragment, React, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, } from "@heroicons/react/solid";

const colors = [
  { id: 1, color: "Brown" },
  { id: 2, color: "Green" },
  { id: 3, color: "Olive" },
];

function ListboxComponent() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="relative">
      <Listbox value={selectedColor} onChange={setSelectedColor}>
        <Listbox.Button className=" w-72 text-left py-2 px-4 text-xs font-semibold font-poppins border-2 border-dark ">
          <div>
          {selectedColor.color}
          <ChevronDownIcon className=" w-4 h-4 float-right" />
          </div>
        </Listbox.Button>
        <Transition
          enter=" transition duration-500 ease-out"
          enterFrom=" transition translate-y-0 opacity-0"
          enterTo=" transition translate-y-0 opacity-100 duration-200 ease-out"
          leave=" transition duration-200 ease-out"
          leaveFrom=" transition translate-y-0 opacity-100 duration-200 ease-out"
          leaveTo=" "
        >
          <Listbox.Options
            className=" absolute py-1 z-50 bg-backGround w-72 border-2 border-t-0 list-none cursor-pointer border-dark"
            as="div"
          >
            {colors.map((itemColor) => (
              <Listbox.Option
                className=" w-72 text-left py-2 px-4 text-xs font-semibold font-poppins hover:opacity-80 hover:text-olive"
                key={itemColor.id}
                value={itemColor}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li
                  >
                    {/* {selected && <CheckIcon className=" w-9 h-9 text-left"/>} */}
                    {itemColor.color}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

export default ListboxComponent;
