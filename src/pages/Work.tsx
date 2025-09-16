import React from "react";
import { FaSearch, FaCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

import FAQSection from "../components/FAQ/FAQ";
import YouPIComparison from "../components/YouPIComparison";

const steps = [
  {
    title: "Discover",
    description:
      " Explore our innovative fintech solutions designed to simplify your payments and recharge experience, empowering you with smarter financial control.",
    icon: <FaSearch />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Build",
    description:
      "Customize your recharge plans and payment preferences effortlessly with our user-friendly platform backed by robust technology.",
    icon: <FaCode />,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Launch",
    description:
      "Activate your recharge plan, manage payments seamlessly, and enjoy uninterrupted services powered by secure, automated systems.",
    icon: <FaRocket />,
    color: "bg-green-100 text-green-600",
  },
];

const Work: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-teal via-teal-100 to-teal-50 mt-20 py-10 md:py-20">
        <div className="mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full h-56 sm:h-72 md:h-80 bg-teal-200 rounded-xl shadow-md flex items-center justify-center text-teal-400 text-xl">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://i.pinimg.com/736x/77/c7/80/77c7803e90ed0409710f000c50e2c940.jpg"
                alt="img"
              />
            </div>
          </motion.div> */}

          <motion.div
            className="space-y-6 md:space-y-10 md:ml-16 "
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-teal-800">
              How It Works
            </h2>
            {/* <p className="text-teal-600 text-base md:text-lg leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              perspiciatis nostrum alias distinctio omnis officia!
            </p> */}

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 md:gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className={`p-3 md:p-4 rounded-full text-xl md:text-2xl shadow-md ${step.color}`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-teal-600 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/*  */}

          <motion.div
            className="order-1 lg:order-none flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full max-w-md h-60 sm:h-72 md:h-[30rem] bg-teal-100 rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/77/c7/80/77c7803e90ed0409710f000c50e2c940.jpg"
                alt="Product showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="my-10 mx-3">
        <YouPIComparison />
      </div>

      <section className="bg-gradient-to-b from-teal via-teal-100 to-teal-50 py-10 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-teal-700">
            Your Journey With Us
          </h2>
          <div className="relative border-l-4 border-teal-200 pl-4 md:pl-18 space-y-8 md:space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="absolute -left-5 md:-left-8 top-2 bg-teal-400 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-teal-600 shadow-lg">
                  {step.icon}
                </div>
                <div className="ml-1 md:ml-2">
                  <div className="font-bold text-base md:text-lg text-teal-700">
                    {step.title}
                  </div>
                  <div className="text-teal-600 text-sm md:text-base">
                    {step.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <FAQSection />
      </div>

      <section className="bg-gradient-to-b from-teal via-teal-50 to-teal-50 py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center px-4 md:px-6">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-teal-500 mb-3 md:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-teal-700 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Join thousands of users who trust our platform to launch and grow
  their journey.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-bold py-2.5 md:py-3 px-8 md:px-10 rounded-full shadow-lg transition"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Work;
