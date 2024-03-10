import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const karnatakaDistricts = [
  { id: 0, name: 'District' },
  { id: 1, name: 'Bagalkot / ಬಾಗಲಕೋಟೆ' },
  { id: 2, name: 'Ballari / ಬಳ್ಳಾರಿ' },
  { id: 3, name: 'Belagavi / ಬೆಳಗಾವಿ' },
  { id: 4, name: 'Bengaluru / ಬೆಂಗಳೂರು' },
  { id: 5, name: 'Bidar / ಬೀದರ್' },
  { id: 6, name: 'Chamarajanagar / ಚಾಮರಾಜನಗರ' },
  { id: 7, name: 'Chikkaballapur / ಚಿಕ್ಕಬಳ್ಳಾಪುರ' },
  { id: 8, name: 'Chikkamagaluru / ಚಿಕ್ಕಮಗಳೂರು' },
  { id: 9, name: 'Chitradurga / ಚಿತ್ರದುರ್ಗ' },
  { id: 10, name: 'Dakshina Kannada / ದಕ್ಷಿಣ ಕನ್ನಡ' },
  { id: 11, name: 'Davanagere / ದಾವಣಗೆರೆ' },
  { id: 12, name: 'Dharwad / ಧಾರವಾಡ' },
  { id: 13, name: 'Gadag / ಗದಗ' },
  { id: 14, name: 'Hassan / ಹಾಸನ' },
  { id: 15, name: 'Haveri / ಹಾವೇರಿ' },
  { id: 16, name: 'Kalaburagi / ಕಲಬುರಗಿ' },
  { id: 17, name: 'Kodagu / ಕೊಡಗು' },
  { id: 18, name: 'Kolar / ಕೋಲಾರ' },
  { id: 19, name: 'Koppal / ಕೊಪ್ಪಳ' },
  { id: 20, name: 'Mandya / ಮಂಡ್ಯ' },
  { id: 21, name: 'Mysuru / ಮೈಸೂರು' },
  { id: 22, name: 'Raichur / ರಾಯಚೂರು' },
  { id: 23, name: 'Ramanagara / ರಾಮನಗರ' },
  { id: 24, name: 'Shivamogga / ಶಿವಮೊಗ್ಗ' },
  { id: 25, name: 'Tumakuru / ತುಮಕೂರು' },
  { id: 26, name: 'Udupi / ಉಡುಪಿ' },
  { id: 27, name: 'Uttara Kannada / ಉತ್ತರ ಕನ್ನಡ' },
  { id: 28, name: 'Vijayapura / ವಿಜಯಪುರ' },
  { id: 29, name: 'Yadgir / ಯಾದಗಿರಿ' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Districts = () => {
  const [selected, setSelected] = useState(karnatakaDistricts[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDistricts = karnatakaDistricts.filter(district =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-100">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-2xl text-center font-medium leading-6 text-gray-900">Select District</Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredDistricts.map((district) => (
                    <Listbox.Option
                      key={district.id}
                      className={({ active }) => classNames(active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9')}
                      value={district}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                              {district.name}
                            </span>
                          </div>
                          {selected ? (
                            <span className={classNames(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Districts;
