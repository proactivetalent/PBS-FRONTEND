import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTA2 = ({ text, href, styling = "", isArrow = true }) => {
  return (
    <Button
      className={`bg-green-600 hover:bg-[#bce2e1] font-semibold py-1 xl:py-3 px-4 md:px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-row items-center justify-center gap-2 mt-10 cursor-pointer w-full text-xs md:text-base xl:text-lg text-center ${styling}`} // Adjusted width and padding
      onClick={() => (window.location.href = href)}
    >
      <span className="">{text || "Get Started Now"}</span> {/* Adjusted text size and added whitespace-nowrap */}
      {isArrow && <ChevronRight className="" />}
    </Button>
  );
};

export default CTA2;