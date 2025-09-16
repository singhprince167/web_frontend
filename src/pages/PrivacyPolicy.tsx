import type React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-30 md:pt-40 md:px-16 pb-16 bg-gradient-to-tl from-teal-200 via-white to-white">
      <div className="mb-8 bg-gradient-to-br p-6 md:pl-10 from-teal-200 md:rounded-2xl md:pt-7 via-white to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm md:text-base">
          Last Updated: <time dateTime="2025-06-11">June 11, 2025</time>
        </p>
      </div>

      <div className="px-4 md:px-10 space-y-6 md:space-y-8">
        <section>
          <p className="text-base md:text-lg mb-4">
            At <span className="text-teal-600 font-semibold">You-Pi.in </span>
            ("we", "us", or "our"), we are committed to protecting your privacy.
            This Privacy Policy describes how we collect, use, store, and
            protect your personal information when you use our website and
            services.
          </p>
          <p className="text-base md:text-lg mb-4">
            By using{" "}
            <span className="text-teal-600 font-semibold">You-Pi.in </span>, you
            agree to the practices outlined in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            1. Information We Collect
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                a) Personal Information
              </h3>
              <p className="text-base md:text-lg mb-2">
                When you create an account or transact with us, we may collect:
              </p>
              <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
                <li>Full Name</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>
                  Payment details (not stored directly, but processed through
                  third-party gateways)
                </li>
                <li>Address (if required for verification)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                b) Technical Information
              </h3>
              <p className="text-base md:text-lg mb-2">
                When you browse our site, we may automatically collect:
              </p>
              <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
                <li>IP Address</li>
                <li>Browser type & version</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Date/time of access</li>
                <li>Cookies and tracking data</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-base md:text-lg mb-2">We use the collected data to:</p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Process mobile recharge orders and EMI transactions</li>
            <li>Provide customer support</li>
            <li>Improve and personalize user experience</li>
            <li>Send service-related notifications and offers</li>
            <li>Detect and prevent fraud or misuse</li>
            <li>Fulfill legal and regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-base md:text-lg mb-2">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Maintain user sessions</li>
            <li>Analyze site traffic and performance</li>
            <li>Enhance functionality</li>
            <li>
              {" "}
              You can disable cookies through your browser settings, but some
              features of the site may not work properly.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            4. Data Sharing and Disclosure
          </h2>
          <p className="text-base md:text-lg mb-2">
            We do not sell your personal information. We may share limited
            information with:
          </p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>
              Service providers (e.g., payment gateways, hosting services) for
              operational purposes
            </li>
            <li>NBFC partners for EMI processing and KYC compliance</li>
            <li>Law enforcement or authorities when legally required</li>
            <li>
              {" "}
              All third parties are bound by strict confidentiality agreements
              and data protection obligations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            5. Data Storage and Security
          </h2>
          <p className="text-base md:text-lg mb-2">
            We implement industry-standard security practices to protect your
            data:
          </p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Encrypted data transmission (SSL)</li>
            <li>Restricted server access</li>
            <li>Secure payment gateways</li>
          </ul>
          <p className="text-base md:text-lg mt-2">
            However, no digital transmission or storage method is 100% secure.
            You use our services at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            6. Your Rights
          </h2>
          <p className="text-base md:text-lg mb-2">You have the right to:</p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (where legally permitted)</li>
            <li>
              Withdraw consent to data processing (may affect service
              availability)
            </li>
          </ul>
          <div className="flex gap-2 text-base md:text-lg mt-2">
            <p>To exercise these rights, contact us at</p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:support@you-pi.in"
                className="text-blue-600 hover:underline"
              >
                support@you-pi.in
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            7. Data Retention
          </h2>
          <p className="text-base md:text-lg mb-2">We retain your personal data:</p>
          <ul className="list-disc ml-6 md:ml-8 text-base md:text-lg space-y-1 md:space-y-2">
            <li>For as long as your account is active</li>
            <li>As needed for legitimate business or legal purposes</li>
            <li>
              Until you request deletion (if not restricted by legal/regulatory
              needs)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            8. Third-Party Links
          </h2>
          <p className="text-base md:text-lg mb-2">
            Our platform may contain links to third-party websites. We are not
            responsible for their privacy practices or content. Please review
            their policies separately.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            9. Children’s Privacy
          </h2>
          <p className="text-base md:text-lg mb-2">
            Our services are not intended for users under the age of 18. We do
            not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            10. Policy Updates
          </h2>
          <p className="text-base md:text-lg mb-2">
            We may update this Privacy Policy periodically. When we do, we will
            revise the "Last Updated" date. We encourage you to review it
            regularly. Continued use of the service constitutes acceptance of
            any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            11. Contact Us
          </h2>
          <p className="text-base md:text-lg mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <IoIosMail size={20} className="md:text-2xl" />
              <a
                href="mailto:support@you-pi.in"
                className="text-blue-600 hover:underline text-base md:text-lg"
              >
                support@you-pi.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={16} className="md:text-xl" />
              <a
                href="tel:+919648417704"
                className="text-blue-600 hover:underline text-base md:text-lg"
              >
                +919648417704
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
