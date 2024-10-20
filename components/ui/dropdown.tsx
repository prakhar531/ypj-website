"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// Define the dropdown component using forwardRef with the correct typing
const DropDown = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  const radius = 100; // Adjust this to control the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse move event handler for the div that wraps the select element
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
      onMouseMove={handleMouseMove} // Attach the mouse move event to the div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      {/* Dropdown (select) element */}
      <select
        className={cn(
          `flex h-10 w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm 
            placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400
           `,
          className
        )}
        ref={ref} // Forwarded ref for the select element
        {...props} // Pass remaining props
      >
        {/* Dropdown options */}
        <option value="general">General Inquiry</option>
        <option value="product">Product Inquiry</option>
        <option value="custom">Custom Jewelry Request</option>
        <option value="repair">Repair or Service Request</option>
        <option value="feedback">Feedback</option>
      </select>
    </motion.div>
  );
});

// Name the component for better debugging
DropDown.displayName = "DropDown";

export { DropDown };
