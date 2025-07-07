import * as React from "react";

import { cn } from "@/lib/utils";

// const Input = React.forwardRef(({ className, type, ...props }, ref) => {
//   return (
//     <input
//       type={type}
//       className={cn(
//         "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         className
//       )}
//       ref={ref}
//       {...props}
//     />
//   );
// });
// Input.displayName = "Input";

// export { Input };

// import * as React from "react";
// import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full my-5 px-3 py-10 border-none rounded-2xl text-white placeholder-brand-gray1 text-4xl outline-none focus-visible:ring-0 bg-transparent ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };

{
  /* <motion.p className="text-xl text-white mt-10 pl-5 border-l-[7px] border-solid border-green-500">
Wanna Subscribe for
<br />
<span className="text-4xl font-semibold">Alerts</span>
</motion.p> */
}
