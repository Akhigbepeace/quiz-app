import Image from "next/image";
import React from "react";

const FingerprintShowcase = () => {
  const fingerprintImg = "/assets/fingerprint.png";
  return (
    <div className="lg:w-1/2 h-[300px] lg:h-auto hidden lg:flex justify-center items-center lg:items-stretch">
      <div className="relative w-[90%] h-full lg:h-auto lg:w-full">
        <Image
          src={fingerprintImg}
          alt="showcase"
          className="rounded-[40px_40px_0px_0px] lg:rounded-[80px_0px_0px_80px]"
          fill
        />
      </div>
    </div>
  );
};

export default FingerprintShowcase;
