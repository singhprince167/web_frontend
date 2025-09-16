import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Field = ({ label, value, highlight = false }: any) => (
  <div
    className={`w-full max-w-md mx-auto p-4 rounded-xl text-center ${
      highlight ? "bg-teal-50 border border-teal-300" : "bg-white shadow"
    }`}
  >
    <div className="text-teal-500 text-sm">{label}</div>
    <div
      className={`mt-1 font-semibold text-lg ${
        highlight ? "text-teal-700" : "text-teal-700"
      }`}
    >
      {value}
    </div>
  </div>
);

const YouPIComparison = () => {
  const [mode, setMode] = useState<"normal" | "smart">("normal");

  const data = {
    planType:
      mode === "smart" ? "2 GB/Day 5g data plan" : "2 GB/Day 5g data plan",
    totalCost:
      mode === "smart" ? "Same Jio Plan ₹295 / 28 Days" : "Jio ₹349 / 28 Days",
    fee: mode === "smart" ? "₹0 (No platform fee)" : "Up to ₹5",
    paymentStructure: mode === "smart" ? (
      <div className="flex flex-col gap-4">
        <div className="border border-teal-200 rounded-lg p-4 bg-teal-50 text-center">
          1st Month ₹295
        </div>
        <div className="border border-teal-200 rounded-lg p-4 bg-teal-50 text-center">
          2nd Month ₹295
        </div>
        <div className="border border-teal-200 rounded-lg p-4 bg-teal-50 text-center">
          3rd Month ₹295
        </div>
      </div>
    ) : (
      <div className="flex flex-col gap-4">
        <div className="border border-teal-200 rounded-lg p-4 bg-teal-50 text-center">
          1st Month ₹349 + platform fee
        </div>
        <div className="border border-teal-200 rounded-lg p-4 bg-teal-50 text-center">
          2nd Month ₹349 + platform fee
        </div>
        <div className="border border-teal-200 rounded-lg p-4 bg-teal-50 text-center">
          3rd Month ₹349 + platform fee
        </div>
      </div>
    ),
    saving: mode === "smart" ? "₹54/month" : "₹0",
    lockIn:
      mode === "smart"
        ? "You got a flexibility of 5 days."
        : "Your plan will disable after 28 days.",
    comfort:
      mode === "smart"
        ? "Same plan, more savings, zero effort"
        : "Standard recharge flow",
    investment:
      mode === "smart"
        ? "SmartSave invests your savings automatically"
        : "None",
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-white rounded-2xl shadow-lg border border-teal-200">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-teal-700 mb-8">
        Normal User vs SmartSave Recharge
      </h2>

      {/* Improved Toggle Button */}
      <div className="flex justify-center mb-10">
        <div
          onClick={() => setMode(mode === "normal" ? "smart" : "normal")}
          className="relative w-72 h-12 bg-teal-200 rounded-full cursor-pointer flex items-center justify-between px-2 text-sm font-medium"
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-1 left-1 w-34 h-10 bg-white rounded-full shadow flex items-center justify-center text-teal-700 font-semibold z-10"
            animate={{ x: mode === "smart" ? 144 : 0 }}
          >
            {/* {mode === "smart" ? "SmartSave Mode" : "Normal Mode"} */}
          </motion.div>
          <div className="flex w-full justify-between z-20  text-teal-600">
            <span className="px-10">Normal</span>
            <span className="px-6 text-teal-600">SmartSave</span>
          </div>
        </div>
      </div>

      {/* Single Column Data */}
      <div className="flex flex-col gap-6">
        <Field label="Plan Type" value={data.planType} />
        <Field label="Total Cost / 28 Days" value={data.totalCost} />
        <Field label="Platform Fee" value={data.fee} />
        <Field label="Payment Structure" value={data.paymentStructure} />
        <Field
          label="Monthly Saving"
          value={data.saving}
          highlight={mode === "smart"}
        />
        <Field label="Lock-in or Penalty" value={data.lockIn} />
        <Field label="Comfort Level" value={data.comfort} />
        <Field label="Investment Benefit" value={data.investment} />
      </div>

      {/* Highlight Note */}
      {mode === "smart" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex items-start gap-3 p-5 bg-white border border-teal-300 rounded-xl shadow-sm max-w-2xl mx-auto"
        >
          <FaCheckCircle className="w-5 h-5 mt-1 text-teal-600" />
          <p className="text-sm text-teal-700 leading-relaxed">
            With <strong>YouPI SmartSave</strong>, you pay only ₹295 instead of ₹349, skip platform fees,
            and save ₹54 every month — all without changing your routine. That’s smart spending with smarter saving.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default YouPIComparison;
