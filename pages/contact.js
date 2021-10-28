import Image from "next/image";
import Link from "next/link";

import React from "react";
import Navbar from "../components/navBar";

function Contact() {
  return (
    <div className=" relative h-screen overflow-y-hidden bg-backGround">
      <div className=" absolute -bottom-2">
      <Image
        className=" object-cover object-bottom filter grayscale"
        src="/jcsiller.jpg"
        alt="Legs and Bag"
        width={1300}
        height={550}
      />
      </div>
      <div className=" absolute h-ninety top-2/4 -translate-y-2/4 z-10 w-11/12
       flex flex-col border-2 border-dark bg-backGround left-2/4 -translate-x-2/4">
        <Navbar/>
        <div className="flex w-full h-full">
            <div className=" flex flex-col  w-3/5 h-full">
                <div className=" flex flex-col justify-center p-7 h-4/6 w-4/6 space-y-3">
                <h1 className=" font-heading font-semibold text-olive text-2xl">Discover the Clean <br/>
                World with Cameamile
                </h1>
                <p className=" text-xs font-poppins leading-5">
                    We will be happy to answer any questions you may have.
                    To consider your offer of cooperation you can write us an email.
                    Fill your life with conscious consumption of the planet's resources.
                </p>
                </div>
                <div className=" grid grid-cols-3 border-t-2 border-dark h-2/6 w-full">
                    <div className=" flex flex-col font-poppins p-6 text-xs border-r-2 border-dark">
                        <h2 className=" font-heading font-semibold text-lg">Phone</h2>
                        <span>+27 82 468 3834</span>
                        <span>+27 79 439 5334</span>
                    </div>
                    <div className=" flex flex-col font-poppins p-6 text-xs border-r-2 border-dark">
                        <h2 className=" font-heading font-semibold text-lg">E-mail</h2>
                        <span>cameamile@gmail.com</span>
                    </div>
                    <div className=" flex flex-col font-poppins p-6 text-xs border-dark">
                        <h2 className=" font-heading font-semibold text-lg">Address</h2>
                        <span>Kamanina Street, 59,<br/>Moscow, Moscow region,<br/>22042</span>
                    </div>
                </div>
            </div>
            <div className="relative h-full border-l-2 border-dark w-2/5 ">
            <Image
                src="/jcsiller.jpg"
                alt="Man sitting n the front of his vintage car"
                layout="fill"
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
