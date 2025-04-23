import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { testimonyData } from "../constants/data";
import { images as imgs } from "../constants/images";
import TestimonyCart from "./TestimonyCart";

const images = [imgs.IMG1, imgs.CHEF1, imgs.LANDING1, imgs.LANDING3, imgs.IMG3];
const VISIBLE_COUNT = 3;

const Carousel3x1: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (current < images.length - VISIBLE_COUNT) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const ButtonItemChange = ({
    icon,
    display,
    action,
  }: {
    icon: string;
    display: boolean;
    action: () => void;
  }) => {
    return (
      <button
        onClick={action}
        disabled={display}
        className="p-1 h-fit w-fit rounded-full bg-[rgba(34,34,34)] hover:bg-[rgba(33,33,33)] disabled:bg-opacity-40"
      >
        <Icon icon={icon} width="40" height="40" className="text-secondary" />
      </button>
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative overflow-x-hidden" style={{width: `${windowSize.width-50}px` }}>
        <div className="w-full h-full absolute z-10">
          <div className="flex px-4 w-full h-full justify-between items-center">
            <ButtonItemChange
              icon="material-symbols:arrow-left-rounded"
              display={current === 0}
              action={prev}
            />
            <ButtonItemChange
              icon="material-symbols:arrow-right-rounded"
              display={current >= images.length - VISIBLE_COUNT}
              action={next}
            />
          </div>
        </div>
        <motion.div
          className="flex"
          animate={{ x: -current * (Math.ceil(windowSize.width / 3) + 16) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {testimonyData.map((item, index) => (
            <TestimonyCart
              testimony={item}
              cartSize={Math.ceil(windowSize.width / 3)}
              key={index}
              ind={index+1}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel3x1;
