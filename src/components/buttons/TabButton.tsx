import clsx from "clsx";
import * as React from "react";

type TabButtonProps = {
   active?: boolean;
   children: React.ReactNode;
   onClick: () => void;
} & React.ComponentPropsWithoutRef<"button">;

export default function TabButton({
   active = false,
   children,
   onClick,
   className,
   ...rest
}: TabButtonProps) {
   return (
      <button
         onClick={onClick}
         className={clsx(
            "px-4 py-2 font-medium transition-all duration-200",
            "rounded-none border-b-2 border-transparent",
            "outline-none",
            active && [
               "transition-colors",
               "bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40",
               "dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent",
               "text-base scale-105",
            ],
            !active && ["text-md", "text-gray-600 dark:text-gray-300"],
            className
         )}
         {...rest}
      >
         {children}
      </button>
   );
}
