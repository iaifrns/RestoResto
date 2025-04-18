import { Icon } from "@iconify/react/dist/iconify.js";
import { Dottes } from "../components/DecorationBox";
import { images } from "../constants/images";
import ComponentContainer from "../layout/SectionContainer";
import EventItem from "../components/EventItem";
import { eventData } from "../constants/data";
import { useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { Parallax } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";

const BookingSection = () => {
  const [index, setIndex] = useState(2);

  const handleSlideChange = (ind: number) => {
    if (ind < 0) {
      setIndex(eventData.length - 1);
    } else if (ind == eventData.length) {
      setIndex(0);
    } else {
      setIndex(ind);
    }
  };

  return (
    <div className="w-full h-[70vh]">
      <ComponentContainer extraStyle="h-full flex justify-between">
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full">
            <div className="w-full h-full flex justify-center items-center">
              <div className="bg-[rgba(29,29,29,0.7)] border-dotted border-secondary border p-4 w-[80%] h-[80%] flex flex-col items-center justify-center gap-4">
                <p className="font-playfair text-secondary font-semibold text-xl">
                  Book a table
                </p>
                <p className="text-[32px] text-white font-playfair font-bold mb-2">
                  Upcoming Events
                </p>
                <Dottes />
                <div className="w-full flex justify-between items-center gap-8 mt-6">
                  <Icon
                    icon="ic:round-arrow-left"
                    width="40"
                    height="40"
                    className="text-secondary"
                    onClick={() => handleSlideChange(index - 1)}
                  />

                  <div className="flex w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.5 }}
                        className="flex"
                      >
                        <EventItem
                          event={
                            eventData[
                              index == 0 ? eventData.length - 1 : index - 1
                            ]
                          }
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="w-fit flex justify-end items-end">
                      <div className="p-1 bg-white rounded-full"></div>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.5 }}
                        className="flex"
                      >
                        <EventItem event={eventData[index]} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <Icon
                    icon="ic:round-arrow-right"
                    width="40"
                    height="40"
                    className="text-secondary"
                    onClick={() => handleSlideChange(index + 1)}
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src={images.BG3}
            alt={images.LANDING3}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full relative overflow-hidden">
          <div className="bg-[rgba(0,0,0,0.5)] absolute w-full h-full z-10">
            <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
              <Icon
                icon="bi:three-dots"
                width="24"
                height="24"
                className="text-white"
              />
              <p className="text-secondary font-semibold font-playfair text-[40px]">
                Our Store
              </p>
              <p className="text-white font-playfair text-xl font-semibold mb-2">
                Want to order food home? Visit out online store.
              </p>
              <CustomButton text="Buy online" />
            </div>
          </div>
          <Parallax speed={-10} className="h-[90vh]">
            <img
              src={images.LANDING1}
              alt={images.LANDING1}
              className="w-full h-full object-cover"
            />
          </Parallax>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default BookingSection;
