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

const Services: React.FC = () => {
  const services = [
    // {
    //   id: 1,
    //   title: "Split Recharge in 3 payments",
    //   description: (
    //     <>
    //       Forget paying{" "}
    //       <span className="font-semibold text-yellow-400">
    //         ₹600-700 upfront
    //       </span>
    //       Recharge for 3 months, pay monthly in 3 zero-interest payments. It’s fast, automatic, and doesn’t need a credit card.
    //     </>
    //   ),
    // },
    {
      id: 1,
      title: "Cashback Every Cycle",
      description:
        "Each Monthly Payment Plan brings a reward — get up to ₹50 cashback in your wallet. More recharges, more rewards.",
    },
    {
      id: 2,
      title: "WalletOS",
      description:
        "Your recharge activity meets fintech intelligence. Track transactions, monitor cashback, manage Monthly Payment Plan schedules — all in a secure, smart, NBFC-backed digital wallet.",
    },
    {
      id: 3,
      title: "SmartNotify",
      description:
        "Never miss a recharge. We notify you before every due date so you can stay on track — without the stress.",
    },
  ];

  return (
    <motion.section
      id="services"
      aria-labelledby="services-heading"
      className="bg-gradient-to-b from-white via-sky-100 to-teal-50 text-slate-900 py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-7xl mx-auto" variants={fadeInUp} custom={0}>
        <motion.h2
          id="services-heading"
          className="text-4xl font-extrabold text-teal-600 mb-12 text-center tracking-wide"
          variants={fadeInUp}
          custom={0.1}
        >
          What You Get with <span className="text-slate-900">You P I</span>
        </motion.h2>

        <div className="md:flex justify-center items-center gap-10">
          <div className="w-full h-full lg:w-1/2 flex justify-center md:flex-col mt-4 md:gap-8">
            <motion.figure
              className="flex-shrink-0 flex justify-center w-[10rem] h-[10rem] md:w-full md:h-[24rem] mb-8 lg:mb-0"
              variants={fadeInUp}
              custom={1}
              whileHover={{ rotateY: 12, rotateX: 6, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{ perspective: 1000 }}
            >
              <motion.img
                // src="/services.jpeg"
                src="/get1.png"
                alt="Telecom operator working concept"
                loading="lazy"
                className="rounded-3xl shadow-lg md:w-full max-w-xs md:max-w-md border-4 border-teal-300"
                style={{ willChange: "transform" }}
                whileHover={{ scale: 1.07, rotateY: 12, rotateX: 6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <figcaption className="sr-only">
                Image representing telecom operator recharge services
              </figcaption>
            </motion.figure>
            {/* <motion.figure
              className="flex-shrink-0 flex justify-center w-[10rem] h-[10rem] md:w-full md:h-[24rem] mb-8 lg:mb-0"
              variants={fadeInUp}
              custom={1}
              whileHover={{ rotateY: 12, rotateX: 6, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{ perspective: 1000 }}
            >
              <motion.img
                // src="/services-2.jpeg"
                src="/get2.png"
                alt="Telecom operator working concept"
                loading="lazy"
                className="rounded-3xl shadow-lg w-full max-w-xs md:max-w-md border-4 border-teal-300"
                style={{ willChange: "transform" }}
                whileHover={{ scale: 1.07, rotateY: 12, rotateX: 6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <figcaption className="sr-only">
                Image representing telecom operator recharge services
              </figcaption>
            </motion.figure> */}
          </div>

          <div className="space-y-12">
            {services.map(({ id, title, description }) => (
              <motion.article
                key={id}
                role="region"
                aria-labelledby={`service-title-${id}`}
                className="bg-teal-100 border-l-8 border-teal-400 p-8 rounded-xl shadow-md hover:shadow-teal-300 transition-shadow duration-300"
                variants={fadeInUp}
                custom={id}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)",
                }}
              >
                <motion.h3
                  id={`service-title-${id}`}
                  className="text-xl md:text-2xl font-semibold text-teal-700 mb-4"
                  variants={fadeInUp}
                  custom={id + 0.1}
                >
                  {id}. {title}
                </motion.h3>
                <motion.p
                  className="text-slate-700 text-lg leading-relaxed"
                  variants={fadeInUp}
                  custom={id + 0.2}
                >
                  {description}
                </motion.p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
