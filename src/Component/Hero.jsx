import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[url('/banner.png')] bg-cover flex items-center justify-center">
      <div className="w-full max-w-7xl px-6">
        {/* logo */}
        <div className="max-w-2xl">
          <div className="mb-6">
            <Image src="/logo.svg" alt="Honey Logo" width={240} height={78} />
          </div>

          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug">
            <span className="text-yellow-400">পুষ্টিগুণ বৃদ্ধি</span> মধুময়
            বাদাম সেবনে অসংখ্য রোগবালাই থেকে পরিত্রাণ পাওয়া যায়
          </h1>

          {/* Price */}
          <div className="mt-6">
            <p className="text-[#a8de63] line-through text-xl lg:text-2xl xl:text-4xl">
              পূর্বমূল্য: ১৫০০ টাকা
            </p>
            <p className="text-[#f22512] text-3xl lg:text-4xl lg: xl:text-[50px] font-bold mt-1">
              মূল্য: ১০০০ টাকা
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition cursor-pointer">
              <IoCartOutline size={25} />
              অর্ডার করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
