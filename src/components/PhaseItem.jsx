import React from 'react';

// Helper function to format description with split logic
const formatDescription = (description) => {
  return description.split(";").map((item, index) => {
    const [label, value] = item.split(":");
    return (
      <p
        key={index}
        className="text-[#DFDFDF] text-base text-balance text-center lg:text-left mx-8"
      >
        <span className="text-[#DFDFDF] font-semibold">{label + ": "}</span>
        <span>{value}</span>
      </p>
    );
  });
};

// Reusable PhaseItem component
const PhaseItem = ({ title, description, titleWidth, isFormatted = false }) => (
  <div className="flex flex-col gap-3 w-full py-2">
    <p
      className={`glass-morphism-glow ${titleWidth} text-xl sm:text-2xl lg:text-3xl font-semibold rounded-2xl py-4 px-8 text-center lg:text-left mx-auto lg:mx-0`}
    >
      {title}
    </p>
    <div>
    {isFormatted ? (
      formatDescription(description)
    ) : (
      <p className="text-[#DFDFDF] text-base text-center lg:text-left mx-8">
        {description}
      </p>
    )}
    </div>
  </div>
);

export default PhaseItem;