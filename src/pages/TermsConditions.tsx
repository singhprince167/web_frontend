import type React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-30 md:pt-40  md:px-16 pb-8 md:pb-16 bg-gradient-to-tl from-teal-200 via-white to-white">
      <div className="mb-6 md:mb-8 bg-gradient-to-br p-6 md:pl-10 from-teal-200 md:rounded-2xl md:pt-7 via-white to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm md:text-base">
          Last Updated: <time dateTime="2025-06-11">June 11, 2025</time>
        </p>
      </div>

      <div className="px-4 md:px-10 space-y-6 md:space-y-8">
        <section>
          <p className="text-base md:text-lg mb-3 md:mb-4">
            Welcome to{" "}
            <span className="text-teal-600 font-semibold">You-Pi.in</span> (
            "Platform", "We", "Us", or "Our"). By accessing or using our website,
            services, and products (collectively, the "Services"), you agree to
            comply with and be bound by the following Terms and Conditions.
          </p>
          <p className="text-base md:text-lg mb-3 md:mb-4">
            Please read them carefully. If you do not agree with any part of
            these terms, you must not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            1. Eligibility
          </h2>
          <p className="text-base md:text-lg mb-2">
            By using this site, you confirm that:
          </p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>
              You are at least 18 years old or have legal parental/guardian
              consent.
            </li>
            <li>
              You have the legal capacity to enter into a binding contract.
            </li>
            <li>You are using the site in compliance with applicable laws.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            2. User Account
          </h2>
          <p className="text-base md:text-lg mb-2">
            To access some services, you may be required to register and create
            an account:
          </p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>You must provide accurate and complete information.</li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You agree to notify us immediately in case of unauthorized access
              or security breach.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            3. Services Offered
          </h2>
          <p className="text-base md:text-lg mb-4">
            <span className="text-teal-600 font-semibold">You-Pi.in</span>{" "}
            offers online mobile recharge and related services, including
            flexible EMI-based payment options through registered NBFC partners.
          </p>
          <p className="text-base md:text-lg">
            We reserve the right to modify or discontinue any feature or service
            at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            4. Pricing & Payments
          </h2>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>
              Prices for recharge plans or services are displayed in Indian
              Rupees (INR).
            </li>
            <li>
              Payments can be made via PhonePe and other approved gateways.
            </li>
            <li>
              EMI options are available through partnered NBFCs, subject to
              approval.
            </li>
            <li>
              We reserve the right to correct pricing errors and update rates
              without notice.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            5. Use of Platform You agree:
          </h2>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Not to misuse the site for illegal or harmful purposes.</li>
            <li>
              Not to copy, distribute, or create derivative works of the
              content.
            </li>
            <li>
              Not to attempt unauthorized access to our systems or user data.
            </li>
            <li>
              To respect all intellectual property rights associated with the
              platform.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            6. Third-Party Links and Services
          </h2>
          <p className="text-base md:text-lg mb-2">
            Our platform may link to external websites or services. We do not
            endorse or control these third parties and are not responsible for
            their content, terms, or practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            7. Intellectual Property
          </h2>
          <p className="text-base md:text-lg mb-2">
            All trademarks, content, software, and design elements of{" "}
            <span className="text-teal-600 font-semibold">You-Pi.in </span>
            are owned by us or our licensors. You may not use or reproduce any
            part of the platform without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            8. Disclaimer of Warranties
          </h2>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>
              Services are provided on an “as-is” and “as-available” basis.
            </li>
            <li>
              We do not guarantee uninterrupted access, or that services will be
              error-free or secure.
            </li>
            <li>
              We are not liable for delays, service interruptions, or any losses
              arising from the use of the platform.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            9. Limitation of Liability
          </h2>
          <p className="text-base md:text-lg mb-2">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>
              We shall not be liable for indirect, incidental, or consequential
              damages.
            </li>
            <li>
              Our total liability to you for any claim shall not exceed the
              amount paid by you for the service in question.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            10. Termination
          </h2>
          <p className="text-base md:text-lg mb-2">
            We reserve the right to terminate or suspend your access for any
            violation of these terms, without notice or liability.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            11. Governing Law & Jurisdiction
          </h2>
          <p className="text-base md:text-lg mb-2">
            These Terms shall be governed by and construed in accordance with
            the laws of India. Any disputes shall be subject to the jurisdiction
            of the courts in Lucknow, Uttar Pradesh.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            12. Changes to Terms
          </h2>
          <p className="text-base md:text-lg mb-2">
            We may update these Terms from time to time. Continued use of the
            platform after changes implies your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            13. Contact Information
          </h2>
          <div className="text-base md:text-lg">
            <p className="mb-3">
              For questions regarding these Terms, please contact us at:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IoIosMail className="text-xl md:text-2xl" />
                <a
                  href="mailto:support@you-pi.in"
                  className="text-blue-600 hover:underline"
                >
                  support@you-pi.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg md:text-xl" />
                <a
                  href="tel:+919648417704"
                  className="text-blue-600 hover:underline"
                >
                  +919648417704
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
