import { motion } from "motion/react";

export default function MiddleLine(props: React.SVGProps<SVGSVGElement>) {
    const { className, ...rest } = props;
    return (
        <svg width="312" height="33" viewBox="0 0 312 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path  d="M-0.000488281 2L1025.5 2.00009" stroke="url(#line-middle-gradient)" strokeWidth="1"/>
       
        <defs>
            <motion.linearGradient id="line-middle-gradient" 
             
              initial={{
                 x1:"0%",
                x2:"10%"
              }}
              animate={{
               x1:"90%",
               x2:"100%"
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeatType:"loop",
                repeat:Infinity,
    
              }}
              >
                <stop  stopColor="#c9c9c9" />
                <stop offset="1" stopColor="#134686" /> 
                <stop offset="0.66" stopColor="blue" />
                <stop offset="1" stopColor="#c9c9c9" />
            </motion.linearGradient>
        </defs>
        </svg>
    );
  }
