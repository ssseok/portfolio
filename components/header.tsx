import Image from "next/image";
import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <header className="text-gray-600 body-font sticky top-0 z-50 ">
      <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>

          <span className="ml-3 text-xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            박현석 포트폴리오
          </span>
        </Link>
        <nav className=" md:ml-auto flex flex-wrap items-center text-xl justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about-me"
            className="mr-5  hover:text-gray-900 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="mr-5  hover:text-gray-900 dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/stack"
            className="mr-5  hover:text-gray-900 dark:hover:text-white"
          >
            Stack
          </Link>
          <Link
            href="/contack-me"
            className="mr-5  hover:text-gray-900 dark:hover:text-white"
          >
            Contact Me
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
