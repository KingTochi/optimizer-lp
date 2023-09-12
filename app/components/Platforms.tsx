"use client";

import Image from "next/image";
import { useState } from "react";

function Platforms() {
  const [selectedLogo, setSelectedLogo] = useState("twitter");
  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center">
      <div className="mx-auto my-10 space-y-3">
        <h1 className="text-2xl font-medium">Supported Platforms</h1>
        <div className="grid grid-cols-2 xs:grid-cols-4 lg:grid-cols-none lg:flex gap-10">
          <Image
            alt="logo"
            src="/twitter.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "twitter"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("twitter")}
          />
          <Image
            alt="logo"
            src="/insta.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "insta"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("insta")}
          />
          <Image
            alt="logo"
            src="/linkedin.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "linkedin"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("linkedin")}
          />
          <Image
            alt="logo"
            src="/fb.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "fb"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("fb")}
          />
          <Image
            alt="logo"
            src="/youtube.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "youtube"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("youtube")}
          />
          <Image
            alt="logo"
            src="/tiktok.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "tiktok"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("tiktok")}
          />
          <Image
            alt="logo"
            src="/gmap.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "gmap"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("gmap")}
          />
          <Image
            alt="logo"
            src="/tinder.svg"
            width={35}
            height={35}
            className={`hover:w-[40px] duration-300 ease-in-out ${
              selectedLogo === "tinder"
                ? "border-b-2 p-1 rounded-b-sm"
                : ""
            }`}
            onClick={() => setSelectedLogo("tinder")}
          />
          {/* Add other logos with onClick event handlers */}
        </div>
      </div>

      <div
        className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6"
        id="sample"
      >
        <div className="flex flex-col space-y-10 mt-4 mb-16">
          <div className="flex sm:space-x-8 sm:flex-row flex-col">
            {selectedLogo === "twitter" && (
              <>
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
              </>
            )}
            {selectedLogo === "insta" && (
              <>
                <div>
                  <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                  <Image
                    alt="Original photo of a room with roomGPT.io"
                    src="/White_Before.jpg"
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
                    src="/White_After.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </>
            )}
            {selectedLogo === "linkedin" && (
              <>
                <div>
                  <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                  <Image
                    alt="Original photo of a room with roomGPT.io"
                    src="/White_Before.jpg"
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
                    src="/White_After.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </>
            )}
            {selectedLogo === "fb" && (
              <>
                <div>
                  <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                  <Image
                    alt="Original photo of a room with roomGPT.io"
                    src="/White_Before.jpg"
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
                    src="/White_After.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </>
            )}
            {selectedLogo === "youtube" && (
              <>
                <div>
                  <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                  <Image
                    alt="Original photo of a room with roomGPT.io"
                    src="/White_Before.jpg"
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
                    src="/White_After.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </>
            )}
            {selectedLogo === "tiktok" && (
              <>
                <div>
                  <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                  <Image
                    alt="Original photo of a room with roomGPT.io"
                    src="/White_Before.jpg"
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
                    src="/White_After.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </>
            )}
            {selectedLogo === "gmap" && (
              <>
                <div>
                  <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                  <Image
                    alt="Original photo of a room with roomGPT.io"
                    src="/White_Before.jpg"
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
                    src="/White_After.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </>
            )}
            {selectedLogo === "tinder" && (
              <>
                <div>
                  <h3 className="mb-1 font-medium text-lg">Go From This...</h3>
                  <Image
                    alt="Original photo of a room with roomGPT.io"
                    src="/White_Before.jpg"
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
                    src="/White_After.jpg"
                    className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                  />
                </div>
              </>
            )}
            {/* Add similar blocks for other selected logos */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platforms;
