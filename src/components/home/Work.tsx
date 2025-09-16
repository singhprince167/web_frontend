import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Smart Plan Analysis',
    description: 'YouPI analyzes your recharge and spending behavior using its smart analytics tool to find the best savings opportunity for you.',
  },
  {
    id: 2,
    title: 'Longer Duration, More Savings',
    description: 'When suitable, YouPI purchases a similar benefits plan of a longer duration on your behalf and offers you the flexibility to pay comfortably, helping you save on every recharge.',
  },
  {
    id: 3,
    title: 'Earn Cashback Every Month',
    description: 'Get rewarded for every payment! Earn up to ₹50 cashback per cycle, directly into your secure wallet.',
  },
  {
    id: 4,
    title: 'Track Everything in WalletOS',
    description: 'Stay in control with WalletOS. Monitor payments, track cashback, and manage schedules in one smart dashboard.',
  },
  {
    id: 5,
    title: 'Stay on Track with SmartNotify',
    description: 'Never miss a payment! Get timely reminders so you can recharge stress-free and stay connected.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const Work: React.FC = () => {
  return (
    <motion.main
      id="work"
      role="main"
      aria-labelledby="work-heading"
      className="min-h-screen bg-gradient-to-b from-white via-sky-100 to-teal-50 text-slate-900 px-6 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        variants={fadeInUp}
        custom={0}
      >
        <motion.h1
          id="work-heading"
          className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-12 text-center tracking-wide"
          variants={fadeInUp}
          custom={0.1}
        >
          How <span className="text-slate-900">You P I</span> Works
        </motion.h1>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          variants={fadeInUp}
          custom={0.2}
        >
          {steps.map(({ id, title, description }) => (
            <motion.div
              key={id}
              className="bg-teal-100 border-l-8 border-teal-400 p-6 rounded-xl shadow-sm hover:shadow-teal-300 transition-shadow"
              role="region"
              aria-labelledby={`step-title-${id}`}
              variants={fadeInUp}
              custom={id}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)" }}
            >
              <motion.h2
                id={`step-title-${id}`}
                className="text-xl font-semibold text-teal-700 mb-2"
                variants={fadeInUp}
                custom={id + 0.1}
              >
                {id}. {title}
              </motion.h2>
              <motion.p
                className="text-slate-700"
                variants={fadeInUp}
                custom={id + 0.2}
              >
                {description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          custom={steps.length + 1}
        >
          <motion.p
            className="text-xl font-semibold text-teal-600"
            variants={fadeInUp}
            custom={steps.length + 1.1}
          >
            Ready to switch to smarter recharges?
          </motion.p>
          <motion.button
            className="mt-4 px-8 py-4 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
            variants={fadeInUp}
            custom={steps.length + 1.2}
            whileHover={{ scale: 1.07 }}
          >
            Get Started with You P I
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Work;