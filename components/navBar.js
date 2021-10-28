import { React, useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import Slidenav from "./slideNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    <Slidenav/>
  }
//   const handleOnClose = () => setIsOpen(false);

  return (
    <div className=" w-full py-4 px-8 border-b-2 border-dark">
      <Link href="/">
        <Image
          className=" object-cover cursor-pointer"
          src="/unnamed.png"
          alt="Came a mile logo"
          width={255}
          height={50}
        />
      </Link>
      {/* <button
          className=" float-right h-9 w-9 cursor-pointer"
          onClick={openModal}
        >
            
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
        </button> */}
        <Slidenav/>
    </div>
  );
}

export default Navbar;
