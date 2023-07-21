import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SquigglyLines from "./components/SquigglyLines";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Generated total ARR of over{" "}
          <span className="text-[#4900E5]">$15,000,000</span>
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Guaranteed sales calls for{" "}
          <span className="relative whitespace-nowrap text-[#671EFF]">
            <SquigglyLines />
            <span className="relative">enterprise</span>
          </span>{" "}
          software.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Dominate the competition with 10 booked sales calls monthly - No
          payment until success!
        </h2>
        <Link
          className="bg-[#4900E5] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-[#671EFF] transition"
          href="/dream"
        >
          Get Started
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/Black_Before.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">To This </h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/Black_After.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-10">
          <h1 className="text-3xl mb-5 font-semibold">
            in less than 30 Days or it's FREE!
          </h1>
          <Link
            className="bg-[#4900E5] rounded text-white font-medium px-6 py-3 sm:mt-10 mt-8 hover:bg-[#671EFF] transition"
            href="/dream"
          >
            Get Started
          </Link>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
