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

const ContactMap: React.FC = () => {
  return (
    <motion.section
      className="py-16 px-4 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
        variants={fadeInUp}
        custom={0}
      >
        Contact Us
      </motion.h3>
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
        variants={fadeInUp}
        custom={0.1}
      >
        Get in Touch for Support & Collaboration
      </motion.h2>
      <motion.p
        className="text-gray-500 max-w-3xl mx-auto mb-10"
        variants={fadeInUp}
        custom={0.2}
      >
        We welcome your inquiries and partnership ideas. Contact{" "}
        <span className="text-teal-600 font-bold"> You P I </span> today to
        discover how we can support your growth and ambitions.
      </motion.p>
      <motion.div
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23161.714201495564!2d80.94193242356417!3d26.764637241496747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb13540eca5d%3A0x7486e14ff4bf1ce1!2sVrindavan%20Colony%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1749021711089!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.section>
  );
};

export default ContactMap;
