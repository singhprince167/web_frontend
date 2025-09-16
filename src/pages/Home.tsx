import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AboutUs from "../components/home/About";
import Services from "../components/home/Services";
import Work from "../components/home/Work";
import Contact from "../components/home/Contact";
import Score from "../components/home/Score";
import { motion, AnimatePresence } from "framer-motion";
import SmartSave from "../components/home/SmartSave";

const banners = [
  {
    img: "/home.png",
    alt: "Easy Mobile Recharges in Minutes",
    title: "Easy Mobile Recharges in Minutes",
    subtitle:
      "Recharge any operator with flexible payment plans and instant OTP login.",
    cta: "Recharge Now",
    ctaHref: "#plans",
  },
  {
    img: "/slide2.jpg",
    alt: "Flexible Payment Plans for Recharges",
    title: "Flexible Payment Plans for Recharges",
    subtitle:
      "Split your recharge payments over 3 months with low interest and cashback.",
    cta: "Get Started",
    ctaHref: "#contact",
  },
  {
    img: "/slide3.jpg",
    alt: "Secure Payments with PhonePe",
    title: "Secure Payments with PhonePe",
    subtitle:
      "Enjoy seamless and safe transactions with integrated PhonePe payment gateway.",
    cta: "Pay Securely",
    ctaHref: "#services",
  },
  {
    img: "/slide4.jpg",
    alt: "Manage Your Finances Easily",
    title: "Manage Your Finances Easily",
    subtitle:
      "Track payments, cashback, and all in one app with smooth user experience.",
    cta: "Explore Features",
    ctaHref: "#contact",
  },
];

const HomePage: React.FC = () => {
  const [bannerIdx, setBannerIdx] = useState(0);

  const nextBanner = () => setBannerIdx((i) => (i + 1) % banners.length);
  // const prevBanner = () => setBannerIdx((i) => (i - 1 + banners.length) % banners.length);

  React.useEffect(() => {
    const timer = setTimeout(nextBanner, 5000);
    return () => clearTimeout(timer);
  }, [bannerIdx]);

  const banner = banners[bannerIdx];

  return (
    <div>
      <div className="min-h-screen flex flex-col pt-36 md:pt-20 md:pl-20 gap-0 md:flex-row-reverse items-center justify-center px-6 py-20 md:py-0 bg-gradient-to-br from-teal-100 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 -left-16 w-96 h-96 bg-teal-200 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="absolute bottom-0 -right-16 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-2xl z-0"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={bannerIdx}
            className="relative z-10 flex-1 flex justify-center items-center w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl border-4 border-teal-100"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={bannerIdx + "_text"}
            className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-800 mb-6 leading-tight drop-shadow-md">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {banner.title}
              </motion.span>
            </h1>
            <motion.p
              className="font-mono text-lg md:text-xl text-gray-700 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {banner.subtitle}
            </motion.p>

            <motion.a
              href={banner.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-teal-700 transition mt-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              {banner.cta} <FaArrowRightLong size={18} />
            </motion.a>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center absolute bottom-10 md:bottom-20 left-0 w-full z-20">
          <div className="flex gap-2 mt-8 justify-center md:justify-start">
            {banners.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 border-teal-400 transition-all duration-200 ${
                  idx === bannerIdx ? "bg-teal-600" : "bg-white"
                }`}
                onClick={() => setBannerIdx(idx)}
                aria-label={`Go to banner ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Score />
        <AboutUs />
        <SmartSave />
        <Services />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
