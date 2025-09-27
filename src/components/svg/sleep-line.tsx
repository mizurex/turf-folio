import { motion } from "motion/react";

export default function SleepLine(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return (
    <svg
      width="10"
      height="80"
      viewBox="0 0 33 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Vertical line path (x = 2, from top to bottom) */}
      <motion.path
        d="M2 0 L2 312"
        stroke="url(#line-sleep-gradient)"
        strokeWidth="1"
      />

      <defs>
        <motion.linearGradient
          id="line-sleep-gradient"
          gradientUnits="userSpaceOnUse"
          initial={{
            y1: "0%",
            y2: "10%",
          }}
          animate={{
            y1: "90%",
            y2: "100%",
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}
        >
          <stop stopColor="#c9c9c9" />
          <stop offset="0.66" stopColor="red" />
          <stop offset="1" stopColor="red" />
          <stop offset="1" stopColor="#c9c9c9" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
