"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-2 sticky top-0 z-50 shadow-sm">
      {/* Bagian Kiri */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <i className="fa-brands fa-instagram text-2xl mr-2"></i>
          Nextgram
        </a>
      </div>

      {/* Bagian Kanan */}
      <div className="flex-none">
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/messages">Messages</Link></li>
            <li><a>Notifications</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/messages">Messages</Link></li>
          <li><a>Notifications</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
