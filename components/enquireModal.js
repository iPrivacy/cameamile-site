// import React, { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";

// function Enquiremodal() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [value, setValue] = useState();

//   function closeModal() {
//     setIsOpen(false);
//   }

//   function openModal() {
//     setIsOpen(true);
//   }

//   return (
//     <div className="flex">
//       <button
//         type="button"
//         className=" w-40 py-2 border-dark text-white bg-dark border-2"
//         onClick={openModal}
//       >
//         Enquire
//       </button>
//         <Dialog
//           as="div"
//           open={isOpen}
//           onClose={closeModal}
//           className=" w-3/5 p-6 pt-0 h-auto  flex flex-col border-dark border-2 bg-backGround space-y-6 fixed z-10 inset-0"
//         >
//           <Dialog.Overlay />

//           <div className=" w-full flex justify-end">
//             <button onClick={closeModal}>
//               <XIcon className=" h-9 w-9 flex justify-end z-10" />
//             </button>
//           </div>
//           <Dialog.Title>
//             <h1 className=" text-olive font-heading font-semibold text-4xl text-center">
//               Online Enquiry
//             </h1>
//           </Dialog.Title>
//           <Dialog.Description className=" flex justify-evenly">
//             <div className=" space-y-2">
//               <Image
//                 className=" object-cover"
//                 src="/lightLeaves.jpg"
//                 width={250}
//                 height={200}
//               />
//               <h2 className=" font-heading text-2xl font-semibold">
//                 Green XS Sweatshirt <br />
//                 Spring Drop '21
//               </h2>
//               <h4 className=" font-medium font-heading">$ 64.99</h4>
//             </div>
//             <div className=" mt-2 w-64">
//               <form action="#" method="POST">
//                 <div className="w-full space-y-6">
//                   <input
//                     className=" w-full focus:ring-black focus:border-black border-2 opacity-60 border-black"
//                     type="text"
//                     name="Name"
//                     id="enquirerName"
//                     placeholder="Anastatia feskuk"
//                   />
//                   <input
//                     className=" w-full focus:ring-dark focus:border-dark border-2 opacity-60 border-dark"
//                     type="email"
//                     name="Email"
//                     id="clientEmail"
//                     placeholder="myemailaddress@some.com"
//                   />
//                   <input
//                     className=" w-full focus:ring-dark focus:border-dark border-2 opacity-60 border-dark"
//                     type="text"
//                     name="Number"
//                     id="clientNumber"
//                     placeholder="+27"
//                   />
//                   <br />
//                   <div className=" flex space-x-4 items-center">
//                     <input
//                       className="focus:ring-olive h-4 w-4 text-olive border-dark rounded"
//                       type="checkbox"
//                       name="privacyPolicy"
//                       id="privacyPolicyAgreement"
//                       value="agree"
//                     />
//                     <label htmlFor="privacyPolicy">
//                       <span className=" text-xs font-poppins">
//                         I accept the Privacy Policy of Cameamile
//                       </span>
//                     </label>
//                   </div>
//                   <button
//                     type="button"
//                     className=" w-full py-2 border-olive text-white bg-gray-800 border-2"
//                   >
//                     Enquire
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </Dialog.Description>
//         </Dialog>
//       {/* <Transition appear show={isOpen} as={Fragment}>
//           <Dialog
//             as="div">
//                 <div>
//                 <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >

//             </Transition.Child>
//                 </div>
//             </Dialog>
//       </Transition> */}
//     </div>
//   );
// }

// export default Enquiremodal;

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          className=" w-40 py-2 border-dark text-white bg-dark border-2"
          onClick={openModal}
        >
          Enquire
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-25" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-4/6 space-y-4 pb-9 pt-3 px-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-backGround shadow-xl border-dark border-2">
                <div className=" w-full flex justify-end">
                  <button onClick={closeModal}>
                    <XIcon className=" h-9 w-9 flex justify-end z-10" />
                  </button>
                </div>
                <Dialog.Title>
                  <h1 className=" text-olive font-heading font-semibold text-4xl mb-8 text-center">
                    Online Enquiry
                  </h1>
                </Dialog.Title>
                
                  <Dialog.Description className=" flex justify-evenly">
                    <div className=" space-y-4">
                      <div className="relative border-2 border-dark w-64 h-52">
                      <Image
                        className=" object-cover"
                        src="/lightLeaves.jpg"
                        layout="fill"
                      />
                      </div>
                      <h2 className=" font-heading text-2xl font-semibold">
                        Green XS Sweatshirt <br />
                        Spring Drop '21
                      </h2>
                      <h4 className=" font-medium font-heading">$ 64.99</h4>
                    </div>
                    <div className=" mt-2 w-64">
                      <form action="#" method="POST">
                        <div className="w-full space-y-6">
                          <input
                            className=" w-full focus:ring-black focus:border-black border-2 opacity-60 border-black"
                            type="text"
                            name="Name"
                            id="enquirerName"
                            placeholder="Anastatia feskuk"
                          />
                          <input
                            className=" w-full focus:ring-dark focus:border-dark border-2 opacity-60 border-dark"
                            type="email"
                            name="Email"
                            id="clientEmail"
                            placeholder="myemailaddress@some.com"
                          />
                          <input
                            className=" w-full focus:ring-dark focus:border-dark border-2 opacity-60 border-dark"
                            type="text"
                            name="Number"
                            id="clientNumber"
                            placeholder="+27"
                          />
                          <br />
                          <div className=" flex space-x-4 items-center">
                            <input
                              className="focus:ring-olive h-4 w-4 text-olive border-dark rounded"
                              type="checkbox"
                              name="privacyPolicy"
                              id="privacyPolicyAgreement"
                              value="agree"
                            />
                            <label htmlFor="privacyPolicy">
                              <span className=" text-xs font-poppins">
                                I accept the Privacy Policy of Cameamile
                              </span>
                            </label>
                          </div>
                          <button
                            type="button"
                            className=" w-full py-2 border-dark text-white bg-gray-800 border-2"
                          >
                            Enquire
                          </button>
                        </div>
                      </form>
                    </div>
                  </Dialog.Description>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
