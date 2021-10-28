import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navBar'


export default function Home() {
  return (
    <div className=" bg-backGround text-dark overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="flex flex-col">
        <div className=" h-screen">
          <div className=" grid grid-cols-4 w-full">
            <div className=" border-2 border-t-0 border-l-0 border-dark text-center text-sm py-4 uppercase font-medium">
              Anastasia Fesiuk
            </div>
            <div className=" border-2 border-t-0 border-l-0 border-dark text-center text-sm py-4 uppercase font-medium col-span-2"> Sustainability Apparel Shop Redesign Concept </div>
            <div className=" border-2 border-t-0 border-l-0 border-r-0 border-dark text-center text-sm py-4 uppercase font-medium">September 2021</div>
          </div>
          <div className=" flex justify-center items-center h-screen font-heading text-7xl font-bold tracking-wider">
            <h1 className=" m-auto text-center bg-text-bg-one bg-clip-text text-transparent h-3/6"><span>Charming</span><br/><span>Spring '21 Drop</span></h1>
          </div>
        </div>
        <div>
          <div className=" border-t-2 border-b-2 border-dark">
            <h1 className=" py-4 text-center font-medium uppercase">Project Details ~ Project Details ~ Project Details ~ Project Details ~ Project Details ~ Project Details ~ Project Details </h1>
          </div>
          <div className=" relative w-screen text-center">
            <Image
              className=" block filter brightness-20 object-cover m-auto z-0"
              src="/treetop.jpg"
              alt="Forest tree top"
              width={1300}
              height={450}
              layout="responsive"
            />
            <div className="absolute font-extralight w-5/12 top-1/4 left-2/4 -translate-x-2/4 text-sm text-gray-100 z-10 font-poppins">
              <h1 className=" font-heading text-5xl font-medium tracking-wide">About the Project</h1>
              <br/>
              <p className=" leading-6">
                This project is an e-commerce concept for Cameamile. Cameamile is a store eco-friendly clothing brand created to popularize sustainable fashion for young people,
                Associations with the new collection retro, sustainable, eco-friendly.
              </p>
              <br/>
              <p className=" leading-6">
                The Project goal was to create a retro convenient showcase website, where the customer can get acquainted with the spring collection and reserve their favorite thing.
              </p>
            </div>
          </div>
          <div className=" w-screen grid grid-cols-5 h-72 "> 
            <div className=" col-span-2 border-r-2 border-dark space-y-2 text-center font-semibold tracking-wide font-heading flex justify-center items-center flex-col">
              <h2 className=" text-2xl">Aa</h2>
              <h2 className=" text-2xl">Duke Charming</h2>
              <h4 className=" uppercase text-l">abcdefghijklmnopqrstuvwxyz</h4>
              <h5 className=" text-l">abcdefghijklmnopqrstuvwxyz</h5>
              <h4 className=" text-l">1234567890</h4>
            </div>
            <div className=" col-span-2 border-r-2 border-dark space-y-2 text-center font-poppins flex justify-center items-center flex-col">
            <h2 className=" text-2xl">Aa</h2>
              <h2 className=" text-2xl">Poppins</h2>
              <h4 className=" uppercase text-l">abcdefghijklmnopqrstuvwxyz</h4>
              <h5 className=" text-l">abcdefghijklmnopqrstuvwxyz</h5>
              <h4 className=" text-l">1234567890</h4>
            </div>
          </div>
        </div>
        <div>
          <div className=" border-t-2 border-b-2 border-dark">
            <h1 className=" py-4 text-center font-medium uppercase ">Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages ~ Pages </h1>
          </div>
          <div className="relative w-screen h-big">
            <Image
              className=" object-cover filter grayscale z-0"
              src="/legsandbag.jpg"
              alt="Legs and Bag"
              width={1300}
              height={550}
            />
            <div className=" absolute top-2/4 -translate-y-2/4 z-10 w-11/12 border-2 border-dark bg-backGround left-2/4 -translate-x-2/4">
              <Navbar />
              <div className=" grid grid-cols-2 w-full ">
                <div className=" relative border-r-2 border-dark">
                  <Image
                    className=" object-cover"
                    src="/legsandbag.jpg"
                    alt="Legs and bag"
                    // width={750}
                    // height={657}
                    layout="fill"
                  />
                </div>
                <div className=" grid grid-rows-3">
                  <div className=" row-span-2 py-6 px-14">
                    <h1 className=" text-6xl font-heading text-olive">Spring '21 <br/><span>Collection</span></h1>
                    <br/>
                    <p className=" font-poppins text-sm leading-6">The entire collection was created from recycled material. It contains no synthetics, which makes things wearable
                       in all weathers. The fine design of the spring collection is definitely a part of your wardrobe.
                    </p>
                    <br/>
                    <Link href="/product">
                      <a><span className=" font-poppins font-semibold text-sm cursor-pointer">See more &#8594;</span></a>
                    </Link>
                    
                  </div>
                  <div className=" grid grid-cols-3 border-t-2 border-dark">
                    <div className=" grid grid-rows-4 border-r-2 border-dark">
                      <div className=" relative row-span-3">
                        <Image
                          className=" object-cover object-bottom"
                          src="/bgm.jpg"
                          alt="Black girl magic"
                          // width={200}
                          // height={125}
                          layout="fill"
                        />
                      </div>
                      <div className=" border-t-2 border-dark font-heading text-xl text-center">
                        <span>Tops &#38; Sweatshirts</span>
                      </div>
                    </div>
                    <div className=" grid grid-rows-4 border-r-2 border-dark">
                      <div className=" relative row-span-3">
                      <Image
                          className=" object-cover"
                          src="/orangesack.jpg"
                          alt="Orange sack guy"
                          // width={200}
                          // height={126}
                          layout="fill"
                        />
                      </div>
                      <div className=" border-t-2 border-dark font-heading text-xl text-center" >
                        Shoppers
                      </div>
                    </div>
                    <div className=" grid grid-rows-4 ">
                      <div className=" relative row-span-3">
                        <Image
                          className=" object-cover"
                          src="/justbag.jpg"
                          alt="Hacky sack"
                          // width={200}
                          // height={125}
                          layout="fill"
                        />
                      </div>
                      <div className=" border-t-2 border-dark font-heading text-xl text-center">
                        Bags
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      {/* <Image
            src="/public/lightLeaves.jpg"
            alt="dark leaves"
            width={1000}
            height={1000}
          /> */}
    </div>
  )
}
