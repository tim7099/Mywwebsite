import * as React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Link to={"/"}>
          <h1 className="text-text lg:text-8xl font-bold tracking-tighter sm:text-5xl">
            Tim Mock
          </h1>
        </Link>
        <h2 className="mt-3 lg:text-2xl font-bold tracking-tighter text-test1 sm:text-xl ">
          Aspiring Frontend Engineer
        </h2>
        <p className="mt-2 max-w-xs leading-normal text-test3 lg:text-xl">
          I love to code
        </p>
        <nav className="mt-8 hidden lg:block" aria-label="In-page jump links">
          <ul>
            <li>
              <Link
                className="group flex items-center py-3 active"
                to={"#about"}
              >
                <span className="nav-text text-cd font-bold uppercase tracking-widest text-test3 hover:text-test4 group-focus-visible:text-test4">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center py-3 active"
                to={"#Erfahrung"}
              >
                <span className="nav-text text-cd font-bold uppercase tracking-widest text-test3 hover:text-test4 group-focus-visible:text-test4">
                  Erfahrung
                </span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3 active" to={"0"}>
                <span className="nav-text text-cd font-bold uppercase tracking-widest text-test3 hover:text-test4 group-focus-visible:text-test4">
                  Projekte
                </span>
              </Link>
            </li>
            <li>
              <Link className="group flex items-center py-3 active" to={"0"}>
                <span className="nav-text text-cd font-bold uppercase tracking-widest text-test3 hover:text-test4 group-focus-visible:text-test4">
                  Kontaktier mich
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5  shrink-0 text-xs">
          <a
            className="block hover:text-test4 text-test3 text-cd font-bold nf-md-github"
            href="https://github.com/tim7099"
            target="_blank"
            aria-label="Github (Open in new Tab) "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              fill="currentcolor"
              className="h-6 w-6"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </li>
        <li className="mr-5  shrink-0">
          <a
            className="block hover:text-test4 text-test3 text-cd font-bold nf-md-github"
            href="https://www.linkedin.com/in/tim-mock-a8b778255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            aria-label="Linkedin (Open in new Tab) "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentcolor"
              className="h-6 w-6"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </li>
        <li className="mr-5  shrink-0">
          <a
            className="block hover:text-test4 text-test3 text-cd font-bold nf-md-github"
            href="https://www.xing.com/profile/Tim_Mock6"
            target="_blank"
            aria-label="Linkedin (Open in new Tab) "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentcolor"
              className="h-6 w-6 text-test3"
            >
              <path d="M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8 .3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1 .2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
