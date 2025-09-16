import type React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const RefundReturnPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-30 md:pt-40 md:px-16 pb-8 md:pb-16 bg-gradient-to-tl from-teal-200 via-white to-white">
      <div className="mb-6 md:mb-8 bg-gradient-to-br p-6 md:pl-10 from-teal-200 md:rounded-2xl md:pt-7 via-white to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4">
          Refund & Return Policy
        </h1>
        <p className="text-sm md:text-base">
          Last Updated: <time dateTime="2025-06-11">June 11, 2025</time>
        </p>
      </div>

      <div className="px-4 md:px-10 space-y-6 md:space-y-8">
        <section>
          <p className="text-base md:text-lg mb-3 md:mb-4">
            Thank you for choosing{" "}
            <span className="text-teal-600 font-semibold">You-Pi.in</span>.
            Please read our Refund & Return Policy carefully before using our
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            1. No Refund Policy for Recharges
          </h2>
          <p className="text-base md:text-lg mb-2">
            Once a mobile recharge or any digital service is successfully
            processed through our platform, it cannot be cancelled, refunded, or
            reversed under any circumstances.
          </p>
          <p className="text-base md:text-lg mb-2">This includes:</p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Incorrect mobile numbers entered by the user</li>
            <li>Recharge of wrong plans or operators</li>
            <li>Network or service unavailability after recharge</li>
            <li>Please double-check all details before confirming your transaction</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            2. EMI Transactions & Bounce Charges
          </h2>
          <p className="text-base md:text-lg mb-2">
            We offer EMI-based payment options for eligible users via NBFC
            partners. Please note:
          </p>

          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>
              If your EMI payment fails due to insufficient balance, delayed
              payment, or any technical issue at your end, a bounce charge will
              be applied.
            </li>
            <li>
              The bounce charge is determined by the financing partner and is
              non-negotiable.
            </li>
            <li>
              Repeated EMI default may lead to service restrictions or legal
              recovery procedures as per NBFC policies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            3. Service Errors or Failures
          </h2>
          <p className="text-base md:text-lg mb-2">
            If a recharge fails but the payment is deducted, please contact our
            support team with your transaction ID. We will:
          </p>

          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Verify the transaction with the payment gateway/operator</li>
            <li>
              Process a retry or refund (only if the recharge genuinely failed
              and funds were not consumed) within 7–10 working days
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            4. How to Request Support
          </h2>
          <div className="text-base md:text-lg">
            <p className="mb-3">
              For any issues or refund-related queries (only in case of
              technical failures), reach out to us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IoIosMail className="text-xl md:text-2xl" />
                <a href="mailto:support@you-pi.in" className="text-blue-600 hover:underline">
                  support@you-pi.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg md:text-xl" />
                <a href="tel:+919648417704" className="text-blue-600 hover:underline">
                  +919648417704
                </a>
              </div>
            </div>
          </div>

          <p className="text-base md:text-lg mb-2 mt-4">Please include:</p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Your registered mobile number</li>
            <li>Transaction ID</li>
            <li>Screenshot or proof of payment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            5. Policy Amendments
          </h2>
          <p className="text-base md:text-lg mb-2">
            We may update this policy from time to time. All changes will be
            posted on this page with an updated effective date. Continued use of
            our services implies acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundReturnPolicy;
