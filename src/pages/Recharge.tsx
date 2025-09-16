import React from 'react';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-teal-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">You P I – Recharge Now. Pay Smart.</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
      India’s first fintech platform where recharges meet Installments.
      </p>
      <p className="text-lg md:text-xl max-w-2xl mb-2">
        Why pay all at once, when you can pay in 3 stress-free parts?
      </p>
      <p className="text-lg md:text-xl max-w-2xl mb-2">Split your 3-month mobile recharge into 3 interest-free Installments
      </p>
      <p className="text-lg md:text-xl max-w-2xl mb-2 text-green-600 font-semibold">
        No credit card. No KYC. No hidden charges
      </p>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Works with Jio, Airtel, Vi, and more
      </p>

      <h2 className="text-xl md:text-2xl font-semibold italic text-gray-600 mb-6">
        &gt; Recharge freedom is here.
      </h2>

    </div>
  );
};

export default HomePage;
