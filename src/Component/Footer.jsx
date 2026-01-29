import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f6f6]">
      {/* TOP ROW */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600">
        {/* LOCATION */}
        <div className="flex items-center gap-2">
          <FaLocationDot />

          <span>Kuril, Vatara, Dhaka-1229, Bangladesh</span>
        </div>

        {/* LINKS */}
        <div className="flex gap-6 font-medium">
          <a href="/privacy-policy" className="hover:text-black transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-black transition">
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200" />

      {/* BOTTOM ROW */}
      <div className="py-6 text-center text-gray-500 text-sm">
        © 2026 All Rights Reserved Designed by{" "}
        <span className="font-semibold text-black">Funnel Liner</span>
      </div>
    </footer>
  );
};

export default Footer;
