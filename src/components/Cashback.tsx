import React from "react";

const Cashback: React.FC<{ onClose?: () => void }> = () => (
  <div className="w-full md:pl-20 bg-green-100 text-green-800 flex items-center justify-center md:px-4 py-2 font-semibold text-base shadow-sm z-50 fixed top-0 left-0">
    <span className="text-sm md:text-lg">
      🎉 Upto <span className="font-bold">5% Real Money Back</span> on every recharge!
    </span>
    {/* {onClose && (
      <button
        className="ml-4 text-green-700 hover:text-green-900 text-xl font-bold"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
    )} */}
  </div>
);

export default Cashback;