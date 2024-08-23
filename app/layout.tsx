import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";

const nuninto = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz app for Frontend Developers",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const overlayFingerprintImg = "/assets/background-fingerprint.png";

  return (
    <html lang="en">
      <body
        className={clsx(
          nuninto.className,
          "xl:bg-primaryColor relative min-h-screen flex items-center justify-center"
        )}
      >
        <div className="absolute right-0">
          <div className="relative h-screen w-[640px]">
            <Image
              src={overlayFingerprintImg}
              alt="overlay"
              objectFit="cover"
              className="rotate-180"
              fill
            />
          </div>
        </div>
        <div className="relative z-10 bg-white w-full max-w-[1280px] mx-auto shadow-lg xl:rounded-[80px_20px_20px_80px]">
          {children}
        </div>
      </body>
    </html>
  );
}
