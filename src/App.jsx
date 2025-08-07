import React, { useState } from "react";
import { motion, MotionConfig } from "motion/react";
import { ArrowRight } from "lucide-react";

const TABS = ["Saved Sites", "Collections", "48 Following", "32 Followers"];
const App = () => {
  const [hovered, setHovered] = useState(0);
  const [direction, setDirection] = useState(false);

  return (
    <div className="flex w-full min-w-[300px] items-center justify-center p-6 h-dvh">
      <div
        className="rounded-2xl p-2  drop-shadow-md 
    md:h-[54px] md:min-w-[450px]"
      >
        <motion.div
          layout
          className={`flex  w-fit items-center justify-evenly ${
            direction ? "flex-col" : "flex-row"
          }`}
        >
          {TABS.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm outline-none transition-colors 
               text-neutral-900
              `}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(0)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className={`h-full  absolute inset-0 rounded-md bg-neutral-200 `}
                />
              )}
              <motion.span
                layout
                className="text-nowrap text-inherit relative z-10 block"
              >
                {item}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => setDirection((direction) => !direction)}
        style={{
          rotate: direction ? 90 : 0,
          transition: "rotate 0.2s ease-in-out",
        }}
        className="bg-neutral-200 p-3 hover:bg-neutral-400/20 transition-all duration-150  cursor-pointer rounded-2xl absolute bottom-14 right-50"
      >
        <ArrowRight className="text-neutral-400 " />
      </motion.button>
    </div>
  );
};

export default App;
