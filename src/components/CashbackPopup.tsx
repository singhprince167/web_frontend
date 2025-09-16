import React from "react";

const CashbackPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="relative w-[90vw] max-w-xl h-[20rem] bg-gradient-to-br from-green-200 via-green-100 to-yellow-50 text-green-900 flex flex-col items-center justify-center px-6 py-6 font-semibold text-base shadow-2xl rounded-2xl border-2 border-green-300 animate-fadeIn">
      <button
        className="absolute top-3 right-3 text-green-700 hover:text-red-500 text-3xl font-bold transition-colors duration-200"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-green-400 rounded-full p-4 shadow-lg mb-2 animate-bounce">
          <span className="text-4xl">💸</span>
        </div>
        <span className="text-lg md:text-2xl text-center font-bold">
          Upto <span className="text-green-700">5% Real Money Back</span>
        </span>
        <span className="text-base md:text-lg text-center font-medium text-green-800">
          on every recharge! Don’t miss out on this limited-time offer.
        </span>
        <button
          className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow transition-all duration-200 font-semibold text-base"
          onClick={onClose}
        >
          Claim Now
        </button>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease;
          }
        `}
      </style>
    </div>
  );
};

export default CashbackPopup;
