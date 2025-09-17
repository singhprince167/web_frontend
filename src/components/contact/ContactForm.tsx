import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
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
      const res=await axios.post("https://telecom-backend-vqt8.onrender.com/api/v1/userContact", form);
      console.log(res)
      toast.success("Message sent successfully!");
      
      setForm({
        name: "",
        email: "",
        subject: "",
        phone: "",
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
    <motion.div
      className="bg-white rounded-xl shadow-md p-8 max-w-6xl mx-auto mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
        variants={fadeInUp}
        custom={0.1}
      >
        <motion.div variants={fadeInUp} custom={0.2}>
          <label className="block font-semibold text-sm mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <motion.input
            type="text"
            name="name"
            placeholder="First Name"
            className="w-full border border-gray-200 rounded-md px-4 py-3 bg-gray-50"
            value={form.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03, borderColor: "#facc15" }}
          />
          <p className="text-sm text-gray-400 mt-1">Enter your first name here</p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={0.3}>
          <label className="block font-semibold text-sm mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <motion.input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-md px-4 py-3 bg-gray-50"
            value={form.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03, borderColor: "#facc15" }}
          />
          <p className="text-sm text-gray-400 mt-1">Example: example@website.com</p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={0.4}>
          <label className="block font-semibold text-sm mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-gray-200 rounded-md px-4 py-3 bg-gray-50"
            value={form.subject}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03, borderColor: "#facc15" }}
          />
          <p className="text-sm text-gray-400 mt-1">How can we help you?</p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={0.5}>
          <label className="block font-semibold text-sm mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <motion.input
            type="tel"
            name="phone"
            placeholder="+91 12345 67890"
            className="w-full border border-gray-200 rounded-md px-4 py-3 bg-gray-50"
            value={form.phone}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03, borderColor: "#facc15" }}
          />
        </motion.div>

        <motion.div className="md:col-span-2 mt-4" variants={fadeInUp} custom={0.6}>
          <h3 className="text-xl font-semibold mb-1">How can we help?</h3>
          <p className="text-sm text-gray-500 mb-3">
            Feel free to ask a question or simply leave a comment
          </p>

          <label className="block font-semibold text-sm mb-1">
            Comments / Questions <span className="text-red-500">*</span>
          </label>
          <motion.textarea
            rows={6}
            name="message"
            placeholder="Comments / Questions"
            className="w-full border border-gray-200 rounded-md px-4 py-3 bg-gray-50"
            value={form.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full"
            disabled={sending}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={fadeInUp}
            custom={0.7}
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;