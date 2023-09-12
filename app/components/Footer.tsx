import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        Developed by{" "}
        <a
          href="https://linktr.ee/tochi.ba"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Tochi,{" "}
        </a>
        with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          NextJs.
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://twitter.com/tochi_ba"
          className="group"
          aria-label="Tochi's Twitter"
        >
          <Image
            className="h-6 w-6"
            src="/twitter.svg"
            alt="discord icon"
            width={6}
            height={6}
          />
        </Link>
        <Link
          href="https://instagram.com/tochi_b.a"
          className="group"
          aria-label="Optimizr Discord"
        >
          <Image
            className="h-6 w-6"
            src="/youtube.svg"
            alt="discord icon"
            width={6}
            height={6}
          />
        </Link>
      </div>
    </footer>
  );
}
