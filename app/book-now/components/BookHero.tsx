"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function BookHero() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-background">
      {/* Background Image on the right */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-40 md:opacity-100 z-0">
        <Image
          src="/testi.png"
          alt="Living room"
          fill
          className="object-cover object-left mask-image-gradient"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 50%)",
            maskImage: "linear-gradient(to right, transparent, black 50%)",
          }}
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <FiChevronRight className="text-xs" />
          <span className="text-gray-900">Book a Helper</span>
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Book a <span className="text-[#D48B8B]">Helper</span>
          </h1>
          <p className="text-gray-700 text-lg">
            Find the perfect helper for your home in a few easy steps.
          </p>
        </div>
      </div>
    </section>
  );
}
