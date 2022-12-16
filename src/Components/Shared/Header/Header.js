import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gray-700 divide-x divide-blue-200 ">
        <div className="navbar-start text-center ml-14">
          <div className="text-white text-xl font-bold">
            <Link to="/login">Signup | Join</Link>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-5xl text-red-700"
          >
            MARVEL
          </Link>
        </div>
        <div className="navbar-end text-white mr-14 ">
          <button className="btn btn-ghost  mr-5">
            <div className="indicator">
              <h1 className="">
                Marvel Unlimited <br />
                <span className=" text-sm"> subscribe</span>
              </h1>
            </div>
          </button>

          <button className="btn btn-ghost border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="py-3 bg-gray-700 text-white ">
        <div className="justify-center hidden lg:flex hover:text-gray-400">
          <ul className="menu menu-horizontal px-1 ">
            <li className="hover:text-white">
              <Link>News</Link>
            </li>
            <li className="hover:text-white">
              <Link>Comics</Link>
            </li>
            <li className="hover:text-white">
              <Link>Characters</Link>
            </li>
            <li className="hover:text-white">
              <Link>Movies</Link>
            </li>
            <li className="hover:text-white">
              <Link>Tv Shows</Link>
            </li>
            <li className="hover:text-white">
              <Link>Games</Link>
            </li>
            <li className="hover:text-white">
              <Link>Videos</Link>
            </li>
            <li className="hover:text-white">
              <Link>More</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-3 text-white">
        <Link>Steam the Gotg: Holiday special exclusively on </Link>
      </div>
    </div>
  );
};

export default Header;
