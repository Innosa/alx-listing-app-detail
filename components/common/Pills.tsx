// components/Pill.tsx

import React from "react";

interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 rounded-full text-sm mr-2">
      {label}
    </button>
  );
};

export default Pill;
