import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const AboutUs: React.FC = () => {
  return (
   <motion.div
      role="main"
      aria-labelledby="aboutus-heading"
      className="min-h-screen bg-gradient-to-b from-white via-sky-100 to-teal-50 text-slate-900 font-sans md:px-6 py-12"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="mx-auto px-6"
        variants={fadeInUp}
        custom={0}
      >
        <motion.h1
          id="aboutus-heading"
          className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-20 text-center tracking-wide"
          variants={fadeInUp}
          custom={0.1}
        >
          About <span className="text-slate-900">US</span>
        </motion.h1>

        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-12"
          variants={fadeInUp}
          custom={0.2}
        >
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center ml-0 md:ml-16"
            variants={fadeInUp}
            custom={1.5}
          >
            <motion.section
              className="mb-8 text-center lg:text-left space-y-8"
              variants={fadeInUp}
              custom={2}
            >
              <p className="text-3xl md:text-5xl font-semibold text-teal-500">
                Recharge. <span className="text-slate-900">Reinvented.</span>
              </p>
              <p className="text-xl text-slate-700">
                At <strong className="text-slate-900">You P I</strong>, we don’t just enable mobile recharges — we redefine how they’re paid.
              </p>
            </motion.section>

            <motion.section
              className="mb-8 text-center lg:text-left text-slate-700 space-y-4"
              variants={fadeInUp}
              custom={3}
            >
              <p className="text-lg md:text-xl">
                We believe that every Indian should have the freedom to manage cashflow better, even for essentials like prepaid plans.
              </p>
              <p className="text-lg md:text-xl">
                That’s why we built India’s first{" "}
                <strong className="text-teal-600 font-semibold">
                  split-payment recharge model
                </strong>
                , backed by fintech innovation and NBFC partnerships.
              </p>
            </motion.section>
          </motion.div>

          <motion.figure
            className="flex-shrink-0 flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0"
            variants={fadeInUp}
            custom={1}
            whileHover={{ rotateY: 12, rotateX: 6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ perspective: 1000 }}
          >
            <motion.img
              src="./slide3.jpg"
              alt="Telecom operator working concept"
              loading="lazy"
              className="rounded-3xl shadow-lg w-full max-w-xs md:max-w-md border-4 border-teal-300"
              style={{ willChange: "transform" }}
              whileHover={{ scale: 1.07, rotateY: 12, rotateX: 6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            <figcaption className="sr-only">
              Image representing telecom operator recharge services
            </figcaption>
          </motion.figure>
        </motion.div>


          <motion.figure
            className="flex-shrink-0 flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0"
            variants={fadeInUp}
            custom={1}
            whileHover={{ rotateY: 12, rotateX: 6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ perspective: 1000 }}
          >
            <figcaption className="sr-only">
              Image representing telecom operator recharge services
            </figcaption>
          </motion.figure>
        </motion.div>

        <motion.section
          className="mt-12 p-8 md:p-12 bg-gradient-to-br from-teal-200 via-teal-100 to-white rounded-2xl text-center shadow-xl"
          variants={fadeInUp}
          custom={6}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight"
            variants={fadeInUp}
            custom={6.1}
          >
            Meet <span className="text-yellow-500">You P I</span> — More Than
            Just a Recharge App
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-teal-800 mb-6 max-w-3xl mx-auto"
            variants={fadeInUp}
            custom={6.2}
          >
            We’re revolutionizing the way you recharge, spend, and save. Say
            goodbye to switching between apps. With You P I, handle all your
            recharges, manage expenses, and gain financial insights — all from
            one smart dashboard.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left max-w-4xl mx-auto"
            variants={fadeInUp}
            custom={6.25}
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                📱 Smart Recharges
              </h3>
              <p className="text-teal-700 text-lg">
                Recharge mobile, DTH, and data cards in seconds with our
                ultra-fast, intuitive system.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                💸 Expense Tracking
              </h3>
              <p className="text-teal-700 text-lg">
                Know where your money goes. Track your spending in real-time and
                make informed choices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                📊 Financial Insights
              </h3>
              <p className="text-teal-700 text-lg">
                Get detailed insights and smart tips to improve your saving
                habits and financial health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                🔐 Secure & Reliable
              </h3>
              <p className="text-teal-700 text-lg">
                Your data is protected with industry-standard encryption and
                privacy-first design.
              </p>
            </div>
          </motion.div>

          <motion.button
            type="button"
            className="px-8 py-4 bg-yellow-400 text-teal-900 text-lg font-bold rounded-2xl shadow-lg hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
            whileHover={{ scale: 1.07 }}
            variants={fadeInUp}
            custom={6.3}
          >
            Start Your Smart Journey 🚀
          </motion.button>
        </motion.section>
      </motion.div>
  );
};

export default AboutUs;
