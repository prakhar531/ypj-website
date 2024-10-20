"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  // Also change to HTMLTextAreaElement here
  const radius = 100; // change this to increase the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
              var(--blue-500),
              transparent 80%
            )
          `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <textarea
        className={cn(
          `flex h-24 w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  
            placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400
           `,
          className
        )}
        ref={ref}
        rows={5} // Adjust the number of rows as needed
        {...props}
      />
    </motion.div>
  );
});

TextArea.displayName = "TextArea";

export { TextArea };
