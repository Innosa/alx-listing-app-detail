// pages/index.tsx

import Image from "next/image";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "../constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";

export default function Home() {
  return (
    <div>

      {/* ============== HERO SECTION ============== */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={HERO_BG}
          alt="Hero Background"
          fill
          className="object-cover absolute"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="text-lg mt-2">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* ============== FILTER SECTION ============== */}
      <div className="px-4 mt-6 flex flex-wrap">
        {FILTERS.map((label, index) => (
          <Pill key={index} label={label} />
        ))}
      </div>

      {/* ============== LISTING SECTION ============== */}
      <div className="px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard
            key={index}
            name={property.name}
            price={property.price}
            rating={property.rating}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>

    </div>
  );
}
