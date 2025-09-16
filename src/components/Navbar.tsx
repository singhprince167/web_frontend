import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Cashback from "./Cashback";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCashback, setShowCashback] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(lastScrollY > currentScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (showNavbar === false) {
      setMenuOpen(false);
    }
  }, [showNavbar]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/work" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {showCashback && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Cashback onClose={() => setShowCashback(false)} />
        </div>
      )}
      <nav
        className={`fixed top-9 md:top-10 left-0 w-full z-40 px-6 md:px-16 py-4 flex justify-between items-center transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          lastScrollY > 10
            ? "bg-white/80 backdrop-blur border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <Link to="/">
          <img
            src="/logo/you-pi_logo.jpg"
            alt="You PI Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 font-medium border border-gray-300 rounded-full px-6 py-2 bg-white shadow">
          {navItems.map(({ name, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={`text-lg font-semibold transition-colors ${
                  location.pathname === href
                    ? "text-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10 rounded-full focus:outline-none relative z-50 transition-colors duration-300"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-3xl text-teal-600 transition-transform duration-300">
            {menuOpen ? <FiX /> : <FiMenu />}
          </span>
        </button>

        <button className="hidden md:inline px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors cursor-pointer">
          Get Started
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } md:hidden`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`fixed top-[4.5rem] right-0 h-screen w-full bg-white z-50 shadow-lg transform transition-transform duration-300 md:hidden flex flex-col ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6 mt-24 px-8">
            {navItems.map(({ name, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={`text-lg font-semibold transition-colors ${
                    location.pathname === href
                      ? "text-teal-600"
                      : "text-gray-700 hover:text-teal-500"
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="mt-10 mx-8 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
