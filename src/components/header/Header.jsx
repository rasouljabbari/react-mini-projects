import { useState, memo } from "react";
import {Link} from "react-router-dom";
import SwitchTheme from "../buttons/SwitchTheme";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="dark:bg-slate-800 dark:border-b-gray-700 flex items-center justify-between border-b border-gray-400 py-8 px-4">
            <a href="/">
                <img src="https://designbygio.it/images/logo.png" alt="logo" />
            </a>
            <SwitchTheme/>
            <nav>

                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        data-testid={'hamburger-icon'}
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div data-testid={'mobile-menu'} className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            data-testid={'close-icon'}
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/articles">Articles</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/users">Users</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/products">Products</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/todo">Todo</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/mobx-todo">Mobx Todo</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/mobx-animal">Mobx Animal</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    <li>
                        <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/articles">Articles</Link>
                    </li>
                    <li>
                        <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/users">Users</Link>
                    </li>
                    <li>
                        <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/products">Products</Link>
                    </li>
                    <li>
                        <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/mobx-todo">Mobx Todo</Link>
                    </li>
                    <li>
                        <Link className=' dark:text-slate-400 font-normal dark:hover:text-slate-300' to="/mobx-animal">Mobx Animal</Link>
                    </li>
                </ul>
            </nav>
            <style>
                {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
            </style>
        </div>
    );
}
export default memo(Header)