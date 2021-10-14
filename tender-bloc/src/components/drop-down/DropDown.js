import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const accountTypes = [
  { id: 1, accountType: "Procuring Entity" },
  { id: 2, accountType: "Supplier" },
];

const DropDown = () => {
  const [selected, setSelected] = useState(accountTypes[0]);

  return (
    <div className="flex flex-col mb-4 px-6">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Label className="text-body text-lg">
          Account Type
        </Listbox.Label>
        <Listbox.Button className="flex flex-row space-x-48 text-sm font-body relative rounded-md pl-3 pr-10 py-3 text-left cursor-default border-2 border-red-300 focus:outline-none">
          <div>{selected.accountType}</div>
          <div>
            <ChevronDownIcon className="h-5"/>
          </div>
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-in-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="bg-red-300 border rounded-md mt-1 pl-3 pr-10 py-3">
            {accountTypes.map((accountType) => (
              <Listbox.Options key={accountType.id}>
                {accountType.accountType}
              </Listbox.Options>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default DropDown;
