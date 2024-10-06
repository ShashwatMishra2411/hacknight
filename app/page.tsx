import React from "react";
import Image from "next/image";
import About from "./components/About";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
export default function page() {
  return (
    <div className="p-20 min-h-screen w-full overflow-hidden flex justify-center flex-col bg-[#17171d] bg-stars items-center">
      <div className="bg-black bg-transparent bg-top bg-repeat animate-diag min-h-screen w-screen flex justify-center items-center flex-col">
        <div className="flex flex-col gap-10 justify-center items-center alata-regular">
          <h1 className="uppercase md:text-8xl whitespace-nowrap text-4xl font-extrabold text-transparent bg-coming bg-clip-text">
            Coming Soon
          </h1>
          <h1 className="uppercase md:text-6xl text-3xl whitespace-nowrap font-extrabold text-transparent bg-coming bg-clip-text">
            Hacknight&apos;25
          </h1>
          <div className="text-white md:text-4xl text-xl font-bold flex flex-col whitespace-pre-wrap">
            <div className="flex gap-10">
              <div>
                Tech <br />
                Meets
              </div>
              <div>
                <Image
                  src="/flag.png"
                  className="relative z-10 w-32 h-12 md:w-60 md:h-20"
                  width={200}
                  height={100}
                  alt="flag"
                ></Image>
              </div>
            </div>
            <div>Campus Innovation</div>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-96 h-96">
          <Image
            src="/mascot.png"
            className="relative z-10 animate-move"
            width={300}
            height={300}
            alt="mascot"
          ></Image>
          <Image
            src="/cloud.png"
            className="absolute top-0 left-0"
            width={800}
            height={800}
            alt="cloud"
          ></Image>
        </div>
        <About />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
