import React, { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Will my personal data be shared with third parties?",
    answer:
      "No, your personal data will never be shared with third parties without your explicit consent. We use advanced security protocols to keep your information safe and private, and only use your data to provide and improve our services.",
  },
  {
    question: "Do I need an account to use this service?",
    answer:
      "Yes, you need to create an account to use our services. This helps us ensure the security of your transactions, provide personalized features, and keep your information protected.",
  },
  {
    question: "What payment methods can I use to top up my balance?",
    answer:
      "You can top up your balance using a variety of payment methods including UPI, debit cards, credit cards, and popular wallets like PhonePe. All transactions are processed securely.",
  },
  {
    question: "Why do I need to verify my identity during registration?",
    answer:
      "Identity verification is required to comply with regulatory guidelines and to protect your account from unauthorized access. This process helps us ensure that your funds and personal information remain secure.",
  },
  {
    question: "How does YouPI help users save money on their mobile recharges?",
    answer:
      "YouPI analyzes your spending behavior using its smart analytics tool. When it finds you suitable, it purchases a similar benefits plan of a longer duration on your behalf and offers you the flexibility to pay comfortably, helping you save on every spending.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.h3
        className="text-sm font-semibold tracking-widest text-center text-teal-600 mb-2"
        variants={fadeInUp}
        custom={0}
      >
        FAQS
      </motion.h3>
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-center text-teal-900 mb-10"
        variants={fadeInUp}
        custom={0.1}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="border-b pb-2"
            variants={fadeInUp}
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-start text-left focus:outline-none"
            >
              <motion.h4
                className="md:text-2xl font-semibold text-teal-900 max-w-[90%]"
                whileHover={{ color: "#66B2B2" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {item.question}
              </motion.h4>
              <motion.div
                className="text-xl text-teal-800 shrink-0"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? <FiMinusCircle /> : <FiPlusCircle />}
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-teal-500">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;