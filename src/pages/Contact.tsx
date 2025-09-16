import React from "react";
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";
import FAQSection from "../components/FAQ/FAQ";
import InviteUser from "../components/InviteUser/InviteUser";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const Contact: React.FC = () => {
  return (
    <div>
      <motion.div
        className="h-full flex flex-col px-6 md:px-0 bg-gradient-to-br from-teal-100 via-white to-teal-50 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div
          className="absolute top-0 -left-16 w-96 h-96 bg-teal-200 rounded-full opacity-30 blur-2xl z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 -right-16 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-2xl z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        ></motion.div>

        <motion.div
          className="relative py-40 space-y-4 md:pl-20"
          variants={fadeInUp}
          custom={0.2}
        >
          <motion.h1
            className="text-6xl font-bold"
            variants={fadeInUp}
            custom={0.3}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-base md:w-[40rem]"
            variants={fadeInUp}
            custom={0.4}
          >
            Have questions or need assistance? We’re here to help you every step
            of the way. Reach out to us for support, feedback, or collaboration
            opportunities.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeInUp} custom={0.9}>
        <InviteUser />
      </motion.div>

      <motion.div
        className="bg-[#f8f8f8]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        custom={0.5}
      >
        <motion.div variants={fadeInUp} custom={0.6}>
          <ContactMap />
        </motion.div>
        <motion.div variants={fadeInUp} custom={0.7}>
          <ContactForm />
        </motion.div>
        <motion.div variants={fadeInUp} custom={0.8}>
          <FAQSection />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
