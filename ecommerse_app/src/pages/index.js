import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //   const MyImage = (props) => {
  //     return (
  //       <Image
  //         src={LandingPage}
  //         alt="Picture of the author"
  //         width="350px"
  //         height="300px"
  //         layout="responsive"
  //     />
  //     )}
  return (
    <React.Fragment>
      <div className="w-full flex items-center h-screen ">
        <div className=" w-full flex items-center justify-center mb-[2.5rem] ">
          <div className="w-full flex flex-col pl-[9rem] pb-5 ">
            <h3 className="text-[70px] ">DokanDar</h3>
            <p className="text-[20px] mb-4 mt-4 ml-1">
              All the necessities at your doorstep
            </p>
            <Link href="/SelectCategories">
              <button class="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 h-[50px] w-[150px] mt-[3rem] ml-1">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <Image src="/Landing_Page.gif" width="500" height="500" />
        </div>
      </div>
    </React.Fragment>
  );
}
