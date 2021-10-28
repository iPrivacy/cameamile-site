/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Slidenav() {
  let [open, setOpen] = useState(false);

  function openNav() {
    setOpen(true);
  }

  return (
    <>
      <button className=" float-right h-9 w-9 cursor-pointer" onClick={openNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative inset-0 overflow-hidden z-50"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  {/* <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  
                </Transition.Child> */}
                  <div className="h-full flex flex-col py-6 bg-backGround shadow-xl overflow-y-scroll">
                    <div className=" relative m-0 p-0 place-content-end flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-black hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-16 relative flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="px-4 flex flex-col justify-between h-40 sm:px-6 text-lg tracking-wide font-heading font-semibold">
                        <Dialog.Title className=" hover:text-olive">
                          Spring '21 Collection
                        </Dialog.Title>
                        <Link href="/"> <a className=" hover:text-olive">Caps</a></Link>
                        <Link href="/"> Shoppers</Link>
                        <Link href="/"> Sweatshirt</Link>
                        <Link href="/"> Shirts</Link>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
