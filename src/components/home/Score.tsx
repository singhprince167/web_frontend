import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const scores = [
  // { value: 25, label: "Year of Experience" },
  { value: 500, label: "Total Transaction" },
  { value: 194, label: "Active User" },
  { value: 41, label: "Positive Reviews" },
];

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Score: React.FC = () => (
  <div className="hidden md:block">
    <div className=" md:flex justify-evenly my-10">
      {scores.map(({ value, label }, idx) => (
        <div
          className="space-y-2 flex flex-col items-center justify-center mb-10 md:mb-0"
          key={idx}
        >
          <div className="flex items-center justify-center">
            <div className="flex">
              <h1 className="text-6xl font-bold">
                <AnimatedNumber value={value} />
              </h1>
              <p className="text-4xl font-bold text-teal-500">+</p>
            </div>
          </div>
          <p className="text-2xl text-gray-500 font-semibold">{label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Score;
