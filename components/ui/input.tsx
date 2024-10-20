"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  const radius = 100; // Change this to adjust the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Handle mouse move on div wrapper
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
            radial-gradient(
              ${
                visible ? radius + "px" : "0px"
              } circle at ${mouseX}px ${mouseY}px,
              var(--end-gold),
              transparent 80%
            )
          `,
      }}
      onMouseMove={handleMouseMove} // Handle mouse move on div
      onMouseEnter={() => setVisible(true)} // Show hover effect
      onMouseLeave={() => setVisible(false)} // Hide hover effect
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        type={type}
        className={cn(
          `flex h-10 w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm 
            file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400`,
          className
        )}
        ref={ref}
        {...props} // Pass all remaining props to the input
      />
    </motion.div>
  );
});

Input.displayName = "Input";

export { Input };
