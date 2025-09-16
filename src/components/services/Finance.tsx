import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Finance() {
  const points = [
    {
      title: "Strategic Decision Making",
      description:
        "Robust business finance enables informed, strategic decisions that drive company growth.",
    },
    {
      title: "Resource Allocation",
      description:
        "Effective use of financial resources ensures your business operates efficiently and sustainably.",
    },
    {
      title: "Risk Management",
      description:
        "Maintaining sufficient working capital helps your business cover unforeseen expenses and stay resilient.",
    },
  ];

  return (
    <motion.section
      className="max-w-7xl mx-auto p-6 md:flex md:items-center gap-12 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex-1" variants={fadeInUp} custom={0}>
        <motion.h2
          className="text-4xl font-bold mb-8"
          variants={fadeInUp}
          custom={0.1}
        >
          The importance of business finance
        </motion.h2>
        <ul className="space-y-6">
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-4"
              variants={fadeInUp}
              custom={idx + 1}
              whileHover={{ scale: 1.03, backgroundColor: "#F0F7FF" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <FaCheckCircle className="text-teal-600 mt-1" size={20} />
              </motion.span>
              <div>
                <h3 className="font-semibold text-lg">{point.title}</h3>
                <p className="text-teal-600">{point.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="flex-1 mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
      >
        <motion.img
          src="/finance.jpg"
          alt="Business meeting"
          className="rounded-[2rem] w-full h-auto object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />
      </motion.div>
    </motion.section>
  );
}