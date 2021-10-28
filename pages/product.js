import React from "react";
import Image from "next/image";
import Link from "next/link";
import ListboxComponent from "../components/listboxComponent";
import Sizestab from "../components/sizesTab";
import Navbar from "../components/navBar";
import Enquiremodal from "../components/enquireModal";

function Product() {
  return (
    // <div className="relative  bg-logoBg">
    <div className=" relative h-bigger overflow-y-hidden bg-backGround">
      {/* <div className=" absolute flex flex-col overflow-y-hidden top-1/10 left-2/4 -translate-x-2/4 w-ninety h-big  border-2 border-dark"> */}
      <div
        className=" absolute h-big top-2/4 -translate-y-2/4 z-10 w-11/12
       flex flex-col border-2 border-dark bg-backGround left-2/4 -translate-x-2/4"
      >
        <Navbar />
        <div className=" flex h-full w-full">
          {/* <div className=" border-r-2 w-1/3 h-full border-dark flex justify-center"> */}
          <div className="relative h-full border-r-2 border-dark w-2/6 ">
            <Image
              className=" object-cover"
              src="/onokosuki.jpg"
              alt="Ono Kosuki chilling"
              // width={750}
              // height={400}
              layout="fill"
            />
          </div>
          <div className=" flex flex-row w-4/6">
            <div className=" w-2/3 border-dark px-9 pt-6">
              <div className=" font-heading space-y-4">
                <h1 className=" text-4xl font-semibold tracking-wider text-olive">
                  Green Sweatshirt <br />
                  <span>Spring Drop '21</span>
                </h1>
                <h2 className=" text-base font-semibold">
                  $ 64.99 &#40;inclusive of all taxes&#41;
                </h2>
                <p className=" font-poppins text-xs leading-5">
                  Soft jersey for sweatshirts. Organic cotton. Grown with less
                  water and no pesticides. There are no losers here: preserving
                  wildlife and improving conditions for cotton growers.
                  Composition: 95% organic cotton; 5% elastane. Care: Machine
                  wash and dry the sweatshirt according to the instrucions on
                  the label.
                </p>
              </div>
              <div className=" space-y-4">
                <br/>
                <span className=" text-gray-400 ">Colour:</span>
                <br />
                <ListboxComponent/>
                <br />
                <span className=" text-gray-400 ">Size:</span>
                <br />
                <Sizestab />
                <br />
                <Enquiremodal />
              </div>
              <Link href="/contact">Contact US</Link>
            </div>
            <div className=" flex flex-row h-full w-1/3">
              <div className=" bg-red-400 w-1/5">Some</div>
              <div className="flex flex-col h-full w-4/5">
                <div className=" h-1/3 w-full pt-3 px- flex justify-center items-center flex-col">
                  <div className=" w-32 border-2 flex justify-center border-dark">
                    <Image
                      className=" object-cover object-bottom"
                      src="/orangesack.jpg"
                      alt="Ono Kosuki chilling"
                      width={128}
                      height={100}
                    />
                  </div>
                  <div className=" text-center font-heading text-xl">Caps</div>
                </div>
                <div className=" h-1/3 w-full flex justify-center items-center flex-col">
                  <div className=" w-32 border-2 flex justify-center border-dark">
                    <Image
                      className=" object-cover object-bottom"
                      src="/orangesack.jpg"
                      alt="Ono Kosuki chilling"
                      width={128}
                      height={100}
                    />
                  </div>
                  <div className=" text-center font-heading text-xl">Caps</div>
                </div>
                <div className=" h-1/3 w-full flex justify-center items-center flex-col">
                  <div className=" w-32 border-2 flex justify-center border-dark">
                    <Image
                      className=" object-cover object-bottom"
                      src="/orangesack.jpg"
                      alt="Ono Kosuki chilling"
                      width={128}
                      height={100}
                    />
                  </div>
                  <div className=" text-center font-heading text-xl">Caps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
