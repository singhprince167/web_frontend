import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { motion } from "framer-motion";
import SmartSave from "../components/home/SmartSave";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const AboutUs: React.FC = () => {
  const data = [
    {
      title: "Innovative Design",
      description:
        "We craft intuitive, engaging interfaces that make technology accessible and enjoyable for users.",
    },
    {
      title: "Robust Development",
      description:
        "Our solutions are built with reliability and performance in mind, ensuring seamless operation at scale.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you and ensure your systems run smoothly.",
    },
    {
      title: "Client-Driven Results",
      description:
        "We focus on understanding client needs to deliver results that exceed expectations and foster long-term partnerships.",
    },
  ];

  const navigate = useNavigate();
  const redirect = (path: string) => navigate(path);

  return (
    <div>
      <div className="min-h-screen mt-30 bg-gradient-to-b from-white via-sky-100 to-teal-50 text-teal-800 font-sans">
        <motion.section
          className="py-12 md:py-16 mt-10 md:mt-20 px-4 md:px-8 lg:px-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
            variants={fadeInUp}
            custom={0}
          >
            About Us
          </motion.h3>
          <p className="text-lg md:text-xl lg:text-2xl text-justify md:text-center leading-loose font-semibold text-teal-800 mx-auto">
            At <span className="text-teal-500 font-bold">You P I</span>, we
            elevate possibilities through innovation and integrity. We bring
            ideas to life with cutting-edge design and development, empowering
            youth with scalable, secure, and user-friendly technology solutions
            tailored for today’s dynamic landscape.
          </p>
        </motion.section>

        <motion.section
          className="px-4 md:px-8 lg:px-16 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex justify-center"
            variants={fadeInUp}
            custom={0.3}
          >
            <motion.div
              className="w-full h-56 md:h-64 bg-gradient-to-tr from-gray-200 to-teal-100 rounded-2xl shadow-lg flex items-center justify-center text-gray-500 text-xl font-semibold"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.img
                className="w-full h-full object-cover rounded-2xl"
                src="https://i.pinimg.com/736x/10/43/3c/10433c98906331e048c4a9d7cff10e3a.jpg"
                alt="Image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 120,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-10">
            <motion.div
              className="flex items-start gap-4 md:gap-6"
              variants={fadeInUp}
              custom={0.4}
            >
              <motion.div
                className="bg-yellow-100 text-yellow-600 p-4 rounded-full text-2xl shadow-md"
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <FaLightbulb />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  Our Vision
                </h2>
                <p className="text-teal-600 text-base md:text-lg leading-relaxed">
                  To innovate with purpose, shape the future with integrity, and
                  build experiences that empower youth to thrive in a digital
                  world.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 md:gap-6"
              variants={fadeInUp}
              custom={0.5}
            >
              <motion.div
                className="bg-teal-100 text-teal-600 p-4 rounded-full text-2xl shadow-md"
                whileHover={{ scale: 1.1, rotate: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <GrSend />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  Our Mission
                </h2>
                <p className="text-teal-600 text-base md:text-lg leading-relaxed">
                  To deliver scalable, innovative, and human-centered technology
                  solutions that drive measurable impact and create lasting
                  value for our clients.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="px-4 md:px-8 lg:px-16 py-8 md:py-12 space-y-12 md:space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10">
            What We Offer
          </h1>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border-l-8 border-teal-500 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-teal-100 transition-all duration-300"
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ scale: 1.04, y: -6 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-teal-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp} custom={5}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The <span className="text-teal-600">You P I</span> Story
            </h2>

            <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-10">
              <motion.p
                className="text-teal-600 text-base md:text-xl max-w-3xl mx-auto text-justify leading-loose"
                variants={fadeInUp}
                custom={5.1}
              >
                In a rapidly digitalizing India, millions still struggled with
                the monthly burden of mobile recharges and managing everyday
                digital payments. While the world was talking about financial
                inclusion,
                <span className="text-teal-600 font-bold"> You P I </span>
                decided to act. Partnering with Sahind Technologies Pvt. Ltd.,
                they envisioned a platform that would bridge the gap between
                convenience and affordability, especially for those who needed
                flexibility with small, recurring financial needs. That vision
                gave birth to You P I — not just another recharge app, but a
                smart fintech companion designed for the modern Indian user.
              </motion.p>
              <motion.div
                className="w-full h-56 md:h-64 bg-gradient-to-tr from-gray-200 to-teal-100 rounded-2xl shadow-lg flex items-center justify-center mt-6 lg:mt-0"
                variants={fadeInUp}
                custom={5.2}
                whileHover={{ scale: 1.03 }}
              >
                <motion.img
                  className="w-full h-full object-cover rounded-2xl"
                  src="https://i.pinimg.com/736x/1d/ae/9e/1dae9ef63649c874cea038cdf917c230.jpg"
                  alt="img"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 120,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      <div className="mb-10">
        <SmartSave />
      </div>

      <hr className="border-b-2 border-teal-400 w-1/2 mx-auto mt-6" />

      <motion.div className="text-center my-10" variants={fadeInUp} custom={6}>
        <motion.button
          onClick={() => redirect("/contact")}
          className="bg-teal-600 text-white text-lg font-bold px-8 md:px-10 py-3 md:py-4 rounded-xl shadow-lg hover:bg-cyan-500 transition-all duration-300"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
