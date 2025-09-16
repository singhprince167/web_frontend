import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { FaInstagram } from "react-icons/fa6";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.35, duration: 0.9, ease: "easeOut" },
  }),
};

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post("/api/v1/userContact", form);
      toast.success("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to send message."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="h-full md:h-[40rem] md:pl-4 py-10 bg-gradient-to-br from-teal-50 to-teal-100 flex flex-col items-center justify-center mb-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="w-full flex flex-col lg:flex-row items-center gap-12"
        variants={fadeInUp}
        custom={0}
      >
        {/* Left Content */}
        <motion.div
          className="md:w-[70rem] flex flex-col md:pl-20 items-center lg:items-start text-center lg:text-left"
          variants={fadeInUp}
          custom={0.2}
        >
          <motion.div
            className="border border-gray-800 bg- rounded-full px-2 mb-4 md:mb-0"
            variants={fadeInUp}
            custom={0.3}
          >
            <h2 className="font-bold">Contact Us</h2>
          </motion.div>
          <motion.h2
            className="text-2xl md:text-4xl font-extrabold text-teal-700 mb-4"
            variants={fadeInUp}
            custom={0.4}
          >
            Partner. Build. Recharge Smarter.
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-2"
            variants={fadeInUp}
            custom={0.5}
          >
            We&apos;re building more than a product.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            variants={fadeInUp}
            custom={0.6}
          >
            We&apos;re creating a movement in smart finance.
          </motion.p>

          <motion.p
            className="text-md text-gray-500 mb-8"
            variants={fadeInUp}
            custom={0.7}
          >
            For general inquiries, business partnerships, or collaborations:
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center sm:justify-start gap-6 text-left mb-10"
            variants={fadeInUp}
            custom={0.8}
          >
            <div className="flex items-center gap-3 text-gray-800">
              <IoIosMail className="text-teal-600 text-2xl" />
              <span className="text-lg font-medium break-all">
              support@you-pi.in
                </span>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <FaPhoneAlt className="text-teal-600 text-xl" />
              <span className="text-lg font-medium">+91 96484 17704</span>
            </div>

            
          </motion.div>

            <motion.div className="mb-10" variants={fadeInUp} custom={0.8}>
            <h3 className="font-semibold text-2xl text-gray-700" >
            Registered Office:

          <p className="text-xl  text-teal-600 mb-4">3n B-6-303, Nandini Enclave Sector 3, Bhadrukh, Lucknow, Uttar Pradesh, India, 226002</p>
            </h3> 
            </motion.div>
          

          <motion.div className="mb-10" variants={fadeInUp} custom={0.9}>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Connect with us
            </h3>
            <div className="flex justify-center lg:justify-start gap-6">
              <motion.a
                href="https://www.linkedin.com/company/you-p-i/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-700 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              {/* <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter className="text-2xl" />
              </motion.a> */}
              <motion.a
                href="https://www.instagram.com/you.pi.official/?igsh=eGVlZm11NnI4cmtl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-800 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-[70rem] h-[40rem] flex mx-3 md:mx-0"
          variants={fadeInUp}
          custom={1}
        >
          <motion.div
            className="bg-teal-50 rounded-3xl my-4 md:rounded-tl-[10rem] md:rounded-bl-[10rem] flex flex-col justify-center items-center w-full p-8"
            variants={fadeInUp}
            custom={1.2}
          >
            <motion.h3
              className="text-2xl md:text-4xl font-bold mb-10 text-teal-700"
              variants={fadeInUp}
              custom={1.3}
            >
              We&apos;d Love to Hear from You
            </motion.h3>
            <motion.form
              className="flex flex-col gap-6 w-full max-w-xl mx-auto"
              variants={fadeInUp}
              custom={1.4}
              onSubmit={handleSubmit}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-300 focus:border-teal-500 placeholder-gray-500 py-2 px-1 focus:outline-none transition duration-200"
                required
                variants={fadeInUp}
                custom={1.5}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-300 focus:border-teal-500 placeholder-gray-500 py-2 px-1 focus:outline-none transition duration-200"
                required
                variants={fadeInUp}
                custom={1.6}
              />

              <motion.input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-300 focus:border-teal-500 placeholder-gray-500 py-2 px-1 focus:outline-none transition duration-200"
                required
                variants={fadeInUp}
                custom={1.6}
              />

              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-300 focus:border-teal-500 placeholder-gray-500 py-2 px-1 focus:outline-none transition duration-200"
                required
                variants={fadeInUp}
                custom={1.6}
              />

              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-300 focus:border-teal-500 placeholder-gray-500 py-2 px-1 resize-none focus:outline-none transition duration-200"
                required
                variants={fadeInUp}
                custom={1.7}
              />

              <motion.button
                type="submit"
                className="bg-teal-600 text-white font-semibold py-2 rounded-full hover:bg-teal-700 transition duration-300"
                variants={fadeInUp}
                custom={1.8}
                whileHover={{ scale: 1.05 }}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;