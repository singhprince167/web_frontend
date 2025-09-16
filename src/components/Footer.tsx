import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
   const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-white border-t border-gray-200 text-slate-700 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" onClick={handleClick}>
            <img
              src="/logo/you-pi_logo.jpg"
              alt="You P I Logo"
              className="h-14 w-auto mb-6"
            />
          </Link>
          <p className="text-sm">
            <span className="text-teal-600 font-bold">You P I</span> is
            committed to being your trusted partner in technology innovation,
            helping you unlock growth and success through smart, modern
            solutions.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-teal-500 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/aboutus" className="hover:text-teal-600 transition" onClick={handleClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-teal-600 transition" onClick={handleClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-teal-600 transition" onClick={handleClick}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-600 transition" onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-teal-500 mb-2">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-teal-600 transition"
                onClick={handleClick}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="hover:text-teal-600 transition"
                onClick={handleClick}
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/refund-policy"
                className="hover:text-teal-600 transition"
                onClick={handleClick}
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-teal-500 mb-2">
            Connect With Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:support@you-pi.in"
                className="text-teal-600 hover:underline"
              >
                support@you-pi.in
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+919648417704"
                className="text-teal-600 hover:underline"
              >
                +91 96484 17704
              </a>
            </li>
            <li>
              Registered Office:{" "}
              <p className="text-teal-600 hover:underline">
                3n B-6-303, Nandini Enclave Sector 3, Bhadrukh, Lucknow, Uttar
                Pradesh, India, 226002
              </p>
            </li>
            <li className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/company/you-p-i/"
                target="blank"
                aria-label="Twitter"
                className="hover:text-teal-600 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/you.pi.official?igsh=eGVlZm11NnI4cmtl"
                aria-label="LinkedIn"
                target="blank"
                className="hover:text-teal-600 transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} You P I. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
