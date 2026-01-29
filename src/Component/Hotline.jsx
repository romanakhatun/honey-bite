import Image from "next/image";
import React from "react";

const Hotline = () => {
  return (
    <section className="w-full py-16 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        {/* Image Wrapper */}
        <div className="relative">
          <Image
            src="/hotline.png"
            alt="Hotline"
            width={1200}
            height={300}
            className="mx-auto"
            priority
          />

          {/* Center Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-red-600 text-lg md:text-xl font-semibold mb-2">
              যে কোন প্রয়োজনে কল করুন
            </p>
            <p className="text-red-600 text-4xl md:text-5xl font-bold">
              হটলাইন: 01600-324567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotline;
