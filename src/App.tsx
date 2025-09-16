import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import CashbackPopup from "./components/CashbackPopup";
import WaitlistButtonAndModal from "./components/WaitlistButtonAndModal";
import TermsConditions from "./pages/TermsConditions";
import RefundReturnPolicy from "./pages/RefundReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./components/NotFound";

function AppContent() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/" &&
      !sessionStorage.getItem("cashbackPopupClosed")
    ) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [location.pathname]);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("cashbackPopupClosed", "true");
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex px-3 items-center justify-center bg-black/40 z-[9999]">
          <CashbackPopup onClose={handleClosePopup} />
        </div>
      )}

      <WaitlistButtonAndModal />

      <Navbar />
      <Toaster />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundReturnPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
