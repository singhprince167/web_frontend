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

const InviteUser: React.FC = () => {
  return (
    <motion.section
      className="bg-teal-100 rounded-3xl p-6 md:p-12 my-10 mx-3 md:mx-20 text-teal-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="flex-shrink-0"
          variants={fadeInUp}
          custom={0}
        >
          <motion.img
            src="/invite.jpg"
            alt="User working"
            className="rounded-xl w-[300px] md:w-[400px] object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.04 }}
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left max-w-xl"
          variants={fadeInUp}
          custom={0.2}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={fadeInUp}
            custom={0.3}
          >
            Join Millions of Satisfied Users!
          </motion.h2>
          <motion.p
            className="text-md md:text-lg mb-6 text-black"
            variants={fadeInUp}
            custom={0.4}
          >
            Experience the ease and reliability of You P I — trusted by thousands for smarter recharges and seamless payments.
          </motion.p>
          <motion.button
            className="bg-[#F3D6A4] text-black font-semibold py-2 px-6 rounded-full hover:bg-[#ebc77f] transition"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            variants={fadeInUp}
            custom={0.5}
          >
            Invite Users to Join
          </motion.button>
          <motion.p
            className="text-md md:text-lg mt-6 text-black"
            variants={fadeInUp}
            custom={0.4}
          >
            Spread the word! Invite your friends and colleagues to enjoy the benefits of our innovative fintech solutions.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InviteUser;