// components/PropertyCard.tsx

import React from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const PropertyCard: React.FC<CardProps> = ({ name, price, rating, imageUrl }) => {
  return (
    <div className="border rounded-lg p-3 shadow-sm w-full max-w-sm">
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={200}
        className="rounded-md"
      />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p>₦{price.toLocaleString()}</p>
      <p className="text-yellow-500">⭐ {rating}</p>
    </div>
  );
};

export default PropertyCard;
