import { AnimatePresence, motion } from "framer-motion";
import {
  FaChartLine,
  FaLightbulb,
  FaPiggyBank,
  FaLockOpen,
  FaMoneyCheckAlt,
  FaRobot,
  FaSmileBeam,
} from "react-icons/fa";
import YouPIComparison from "../YouPIComparison";

const SmartSave: React.FC = () => {
  return (
    <div className="gap-8 z-10 px-4 md:px-12 lg:px-24 xl:px-32 mb-6">
      <motion.div
        className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-lg rounded-2xl p-4 md:p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h2
          className="text-2xl md:text-5xl font-bold text-teal-600 mb-6 md:mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          SmartSave by You P I
        </motion.h2>
        <motion.p
          className="text-base md:text-xl text-gray-700 max-w-xl text-justify md:max-w-2xl lg:max-w-4xl md:text-center leading-loose mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          SmartSave by You P I is a revolutionary feature that allows users to
          save and invest automatically based on their spending behavior. It’s
          designed especially for the youth who want to grow their wealth
          without changing their lifestyle.
        </motion.p>
      </motion.div>

      <motion.div className="mb-2 mt-6 ">
        <motion.p
          className="font-semibold text-teal-700 text-2xl md:text-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          How it Works:
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-lg rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-4 my-5">
          {[
            {
              title: "Spending Behaviour Analysis",
              desc: "You P I analyzes your past transactions to understand your spending patterns.",
              icon: (
                <FaChartLine className="text-5xl md:text-6xl text-teal-500 mb-2" />
              ),
            },
            {
              title: "Smart Recommendations",
              desc: "Based on your spending pattern You P I recommend you to save more without compromising your regular benefit",
              icon: (
                <FaLightbulb className="text-5xl md:text-6xl text-teal-500 mb-2" />
              ),
            },
            {
              title: "Coming Soon",
              desc: "Up to 15%  of your spending will be invested in best investment option",
              icon: (
                <FaPiggyBank className="text-5xl md:text-6xl text-teal-500 mb-2" />
              ),
            },
          ].map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex-1 bg-teal-50 rounded-xl shadow-md p-5 flex flex-col items-center transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
            >
              <div>{step.icon}</div>
              <div className="text-teal-600 font-bold text-lg md:text-xl mb-2 text-center">
                {step.title}
              </div>
              <div className="text-gray-600 text-center text-base md:text-lg">
                {step.desc}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="my-10 w-full">
          <YouPIComparison />
        </div>
        <motion.div
          className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-lg rounded-2xl mt-10 md:mt-16 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-teal-600 mb-10 text-center">
            Why SmartSave?
          </h3>
          <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-0  mt-10 items-center">
            <div className="w-full flex justify-center items-center mb-8 lg:mb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  className="relative z-10 flex-1 flex justify-center items-center w-full"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src="./smartsave.png"
                    alt="SmartSave by YouPI"
                    className="w-full max-w-xs md:max-w-sm rounded-2xl border-4 border-teal-100"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="w-full flex justify-center items-center">
              <ul className="text-gray-700 text-base md:text-xl pl-0 space-y-8 max-w-lg">
                {[
                  {
                    icon: (
                      <FaLockOpen className="text-3xl md:text-4xl text-teal-500 mt-1" />
                    ),
                    heading: "Zero Lock-in",
                    text: "Withdraw your money anytime.",
                  },
                  {
                    icon: (
                      <FaMoneyCheckAlt className="text-5xl md:text-5xl text-teal-500 mt-1" />
                    ),
                    heading: "No Hidden Charges",
                    text: "Complete transparency in how your money is saved and invested.",
                  },
                  {
                    icon: (
                      <FaRobot className="text-4xl md:text-5xl text-teal-500 mt-1" />
                    ),
                    heading: "No Effort Needed",
                    text: "Everything is automated and smart.",
                  },
                  {
                    icon: (
                      <FaSmileBeam className="text-4xl md:text-4xl text-teal-500 mt-1" />
                    ),
                    heading: "No Stress",
                    text: "Your money grows passively with no hassle.",
                  },
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                  >
                    {item.icon}
                    <span>
                      <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                        {item.heading}
                      </span>
                      {" – "}
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="font-semibold text-teal-700 text-center md:text-left text-2xl md:text-3xl mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Join YouPI today and let your money grow while you spend!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SmartSave;
