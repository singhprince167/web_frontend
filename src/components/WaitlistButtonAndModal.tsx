import React, { useEffect, useState } from "react";
import { FaShieldAlt, FaUserPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";

const WaitlistButtonAndModal: React.FC = () => {
  const [showWaitlist, setShowWaitlist] = useState(true);
  const [showWaitlistBtn, setShowWaitlistBtn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Show waitlist button after 5s if not joined
  useEffect(() => {
    if (!localStorage.getItem("waitlistJoined")) {
      const btnTimer = setTimeout(() => setShowWaitlistBtn(true), 5000);
      return () => clearTimeout(btnTimer);
    }
  }, []);

  // ✅ Show modal after 10s if not joined
  useEffect(() => {
    if (!localStorage.getItem("waitlistJoined")) {
      const modalTimer = setTimeout(() => setShowWaitlist(true), 10000);
      return () => clearTimeout(modalTimer);
    }
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:3001/api/v1/waitlist", {
        name,
        email,
        phone: mobile,
      });

      toast.success("You’ve joined the waitlist! 🎉");
      setShowWaitlist(false);
      setShowWaitlistBtn(false);
      localStorage.setItem("waitlistJoined", "true");
      setName("");
      setEmail("");
      setMobile("");
    } catch (err) {
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Debug helper: log state to ensure timers are firing
  useEffect(() => {
    console.log("showWaitlistBtn:", showWaitlistBtn, "showWaitlist:", showWaitlist);
  }, [showWaitlistBtn, showWaitlist]);

  return (
    <>
      {showWaitlistBtn && !localStorage.getItem("waitlistJoined") && (
        <button
          className="fixed bottom-20 right-4 z-[9998] bg-yellow-400 hover:bg-yellow-300 text-teal-900 font-bold px-5 py-3 rounded-full shadow-lg transition-all duration-300 animate-bounce ring-4 ring-yellow-200"
          onClick={() => setShowWaitlist(true)}
        >
          <FaUserPlus className="inline mr-2 mb-1" />
          Be the First! Join Waitlist
        </button>
      )}

      {showWaitlist && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] px-2">
          <div className="bg-white rounded-2xl p-0 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md relative overflow-hidden border border-teal-100">
            <div className="bg-gradient-to-br from-teal-200 to-pink-50 p-5 flex flex-col items-center">
              <FaShieldAlt className="text-teal-500 text-3xl mb-2" />
              <h2 className="text-xl font-bold text-teal-600 text-center mb-1">
                Join the Waitlist
              </h2>
            </div>
            <button
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500"
              onClick={() => setShowWaitlist(false)}
              disabled={loading}
            >
              ×
            </button>
            <form
              onSubmit={handleWaitlistSubmit}
              className="flex flex-col gap-3 px-6 py-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-teal-200 rounded px-3 py-2 w-full text-base focus:ring-2 focus:ring-teal-400 outline-none"
                disabled={loading}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-teal-200 rounded px-3 py-2 w-full text-base focus:ring-2 focus:ring-teal-400 outline-none"
                disabled={loading}
              />
              <input
                type="tel"
                placeholder="Your Mobile Number"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                className="border border-teal-200 rounded px-3 py-2 w-full text-base focus:ring-2 focus:ring-teal-400 outline-none"
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-teal-600 text-white rounded-full px-4 py-2 font-semibold hover:bg-teal-700 transition w-full text-base mt-2 shadow flex items-center justify-center"
                disabled={loading}
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
              <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                <FaShieldAlt className="mr-1 text-teal-400" />
                100% Secure & Private
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WaitlistButtonAndModal;
