import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SquigglyLines from "./components/SquigglyLines";
import Testimonials from "./components/Testimonials";
import Platforms from "./components/Platforms";
import CountDown from "./components/CountDown";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-14 background-gradient">
        <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          {/* Over <span className="text-[#4900E5]">15,000,000 </span>
          installs and 5 ⭐️'s */}
          <CountDown />
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Optimize all your{" "}
          <span className="relative whitespace-nowrap text-[#671EFF]">
            <SquigglyLines />
            <span className="relative">social media</span>
          </span>{" "}
          profiles in one click!
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          #1 chrome extension that helps to transform all your social media
          profiles in just one click with the power of AI
        </h2>
        <Link
          className="bg-[#4900E5] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-[#671EFF] transition"
          href="https://www.discord.gg"
        >
          Coming Soon
        </Link>
        {/* <CountDown /> */}
        <Platforms />

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
