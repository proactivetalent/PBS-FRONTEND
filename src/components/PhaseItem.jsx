import React from 'react';

// Helper function to format description with split logic
const formatDescription = (description) => {
  return description.split(";").map((item, index) => {
    const [label, value] = item.split(":");
    return (
      <p
        key={index}
        className="text-[#89A096] text-base sm:text-lg lg:text-xl font-semibold text-balance text-center lg:text-left"
      >
        <span className="text-[#DCE2E2] italic">{label + ": "}</span>
        <span>{value}</span>
      </p>
    );
  });
};

// Reusable PhaseItem component
const PhaseItem = ({ title, description, titleWidth, isFormatted = false }) => (
  <div className="flex flex-col gap-3 w-full py-2">
    <p
      className={`bg-[#1E2322] ${titleWidth} text-xl sm:text-2xl lg:text-3xl font-semibold rounded-2xl p-2 sm:p-3 lg:p-4 text-center lg:text-left mx-auto lg:mx-0`}
    >
      {title}
    </p>
    <div>
    {isFormatted ? (
      formatDescription(description)
    ) : (
      <p className="text-[#89A096] text-base sm:text-lg lg:text-xl font-semibold text-center lg:text-left">
        {description}
      </p>
    )}
    </div>
  </div>
);

export default PhaseItem;