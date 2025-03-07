import { Icon } from "@iconify/react";
import { images } from "../constants/images";
import { useState } from "react";
import { initialFormResevationState } from "../constants/initialFormResevationState";
import { inputType } from "../types/inputType";
import { CustomTextArea, NormalInputBox, SelectInput } from "./CustomInput";
import { people, time } from "../constants/data";
import { LinkCustomButton } from "./CustomButton";

const PopUpReservation = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [reservationFrom, setReservationFrom] = useState<
    Record<string, inputType>
  >(initialFormResevationState);

  return (
    <div
      className={`w-full h-full ${
        show ? "absolute" : "hidden"
      } bg-[rgba(41,41,41,0.7)] z-20`}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[700px] h-[650px] bg-[#252525] flex justify-center items-center relative">
          <div className="w-[90%] h-[90%] border relative">
            <div className="absolute w-full h-full">
              <div className="flex flex-col w-full h-full gap-6 items-center p-4">
                <p className="text-xl text-secondary font-serif">
                  Don't forget to book a table
                </p>
                <div>
                  <p className="text-3xl text-white font-bold font-mono">
                    Table Reservations
                  </p>
                  <p className="text-4xl text-white text-center">......</p>
                </div>
                <div className="flex flex-col gap-4 w-full h-full mt-2">
                  <div className="flex justify-between gap-8">
                    <NormalInputBox
                      value={reservationFrom.name.value}
                      placeholder={reservationFrom.name.placeholder}
                      onChange={(e) =>
                        setReservationFrom({
                          ...reservationFrom,
                          name: {
                            ...reservationFrom.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                    <NormalInputBox
                      value={reservationFrom.email.value}
                      placeholder={reservationFrom.email.placeholder}
                      onChange={(e) =>
                        setReservationFrom({
                          ...reservationFrom,
                          email: {
                            ...reservationFrom.email,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="flex justify-between gap-8">
                    <NormalInputBox
                      value={reservationFrom.phone.value}
                      placeholder={reservationFrom.phone.placeholder}
                      onChange={(e) =>
                        setReservationFrom({
                          ...reservationFrom,
                          phone: {
                            ...reservationFrom.phone,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                    <SelectInput
                      value={reservationFrom.people.value}
                      placeholder={reservationFrom.people.placeholder}
                      onChange={(e) =>
                        setReservationFrom({
                          ...reservationFrom,
                          people: {
                            ...reservationFrom.people,
                            value: e,
                          },
                        })
                      }
                      data={people}
                    />
                  </div>
                  <div className="flex justify-between gap-8">
                    <NormalInputBox
                      value={reservationFrom.date.value}
                      placeholder={reservationFrom.date.placeholder}
                      onChange={(e) =>
                        setReservationFrom({
                          ...reservationFrom,
                          date: {
                            ...reservationFrom.date,
                            value: e.target.value,
                          },
                        })
                      }
                      type={reservationFrom.date.type}
                    />
                    <SelectInput
                      value={reservationFrom.time.value}
                      placeholder={reservationFrom.time.placeholder}
                      onChange={(e) =>
                        setReservationFrom({
                          ...reservationFrom,
                          time: {
                            ...reservationFrom.time,
                            value: e,
                          },
                        })
                      }
                      data={time}
                    />
                  </div>
                  <CustomTextArea
                    value={reservationFrom.message.value}
                    placeholder={reservationFrom.message.placeholder}
                    onChange={(e) =>
                      setReservationFrom({
                        ...reservationFrom,
                        message: {
                          ...reservationFrom.message,
                          value: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <LinkCustomButton text="Reserve Table" />
              </div>
            </div>
            <img
              src={images.BGMENU}
              alt={images.BGMENU}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="p-2 border border-gray-600 absolute bg-primary top-0 right-0 m-4"
            onClick={() => setShow(false)}
          >
            <Icon
              icon={"iconoir:cancel"}
              className="text-secondary"
              width={"24"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpReservation;
