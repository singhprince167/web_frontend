import React from "react";
import Services from "../components/home/Services";
import { CiGlobe } from "react-icons/ci";
import { LuPencil } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Contact from "../components/home/Contact";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
  border?: boolean;
};

const steps: Step[] = [
  {
    icon: (
      <CiGlobe className="text-4xl text-center font-bold leading-relaxed m-2" />
    ),
    title: "Download App / Visit Website",
    description:
      "Visit our website or Download the Wallex app to enjoy seamless and secure financial transactions on the go.",
    border: true,
  },
  {
    icon: (
      <LuPencil className="text-4xl text-center font-bold leading-relaxed m-2" />
    ),
    title: "Register your account",
    description:
      "Sign up quickly and securely to start accepting payments online. Our registration process is simple.",
    border: true,
  },
  {
    icon: (
      <FaLocationArrow className="text-4xl text-center font-bold leading-relaxed m-2" />
    ),
    title: "Set and track payment",
    description:
      "Easily monitor the status of every payment, ensuring transparency and complete control over your financial operations.",
    border: true,
  },
  {
    icon: (
      <IoMdCheckmarkCircleOutline className="text-4xl text-center font-bold leading-relaxed m-2" />
    ),
    title: "Enjoy your automate payment",
    description:
      "Visit our website or Download the Wallex app to enjoy seamless and secure financial transactions on the go.",
    border: false,
  },
];

const StepItem: React.FC<Step & { idx: number }> = ({
  icon,
  title,
  description,
  border,
  idx,
}) => (
  <motion.div
    variants={fadeInUp}
    custom={idx + 1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="flex items-center gap-4">
      <motion.div
        className="bg-teal-100 rounded-2xl"
        whileHover={{ scale: 1.15, rotate: 8 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {icon}
      </motion.div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      </div>
    </div>
    <div
      className={border ? "border-b-2 border-gray-300 pb-6" : "mb-10 md:mb-20"}
    >
      <p className="opacity-60 text-base md:text-lg">{description}</p>
    </div>
  </motion.div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="mt-30 md:mt-36">
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-4 md:px-18"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold leading-relaxed text-center md:text-left"
          variants={fadeInUp}
          custom={0}
        >
          From local to global, We&apos;ve got your payments covered
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-justify leading-loose md:text-left"
          variants={fadeInUp}
          custom={0.2}
        >
          At <span>You P I</span>, we provide entrepreneurs and creator with a
          secure and reliable payment gateway service that enables seamless
          online transactions. Our platform supports multiple payment methods,
          ensuring smooth and efficient payment processing anytime, anywhere.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex justify-center items-center mt-8 md:mt-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          src="/credit_card.jpg"
          alt="User working"
          className="rounded-xl w-full max-w-[400px] md:max-w-[70rem] md:h-[30rem] object-cover"
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

      <div>
        <Services />
      </div>

      <motion.div
        className="flex flex-col justify-center items-center mt-10 md:mt-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-2xl md:text-4xl text-center font-bold leading-relaxed md:w-[42rem]"
          variants={fadeInUp}
          custom={0.3}
        >
          Simple Steps to Enjoy Seamless and Secure Transactions
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-10 gap-8 md:gap-10 w-full">
          {/* <motion.div
            className="flex justify-center items-center mt-8 md:mt-0 w-full md:w-auto mb-10 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
            }}
          >
            <motion.img
              src="/payment.jpeg"
              alt="User working"
              className="rounded-xl w-full max-w-[400px] md:max-w-[640px] md:h-[30rem] object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: 1.04 }}
            />
          </motion.div> */}
          <motion.div
            className="w-full mx-3 md:mx-16  space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, idx) => (
              <StepItem key={idx} {...step} idx={idx} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* <div className="bg-teal-100">
        <Finance />
      </div> */}

      <p className=" md:text-2xl text-center my-18"><span className="text-teal-600 font-bold">You P I</span> is committed to empowering your journey with innovative payment solutions and financial management tools designed to help you thrive in today’s digital economy.</p>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default ServicesPage;
