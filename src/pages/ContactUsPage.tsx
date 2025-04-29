import { useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { CustomTextArea, NormalInputBox } from "../components/CustomInput";
import { Dottes } from "../components/DecorationBox";
import MapDisplay from "../components/MapDisplay";
import ReservationInfo from "../components/ReservationInfo";
import { initialFormContactState } from "../constants/initialFormResevationState";
import ComponentContainer from "../layout/SectionContainer";
import FooterSection from "../sections/FooterSection";
import TopMenuSection from "../sections/TopMenuSection";
import { inputType } from "../types/inputType";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactUsPage = () => {
  const [reservationFrom, setReservationFrom] = useState<
    Record<string, inputType>
  >(initialFormContactState);

  const center: [number, number] = [3.8667, 11.5167]; // Yaoundé for example

  const points = [
    { lat: 3.8687, lng: 11.526, label: "Yaoundé" },
    { lat: 3.8667, lng: 11.5167, label: "Yaoundé" },
    { lat: 3.8607, lng: 11.5107, label: "Yaoundé" },
  ];

  const contactInfo: Array<Record<string, string>> = [
    {
      icon: "gis:map-poi",
      label: "Adress",
      text: "USA 27TH Brooklyn NY",
    },
    {
      icon: "majesticons:phone-retro-line",
      label: "Phone",
      text: "+7(123)987654",
    },
    {
      icon: "flowbite:mail-box-outline",
      label: "Mail",
      text: "yourmail@domain.com",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-primary">
      <ComponentContainer extraStyle="h-full flex flex-col items-center justify-center">
        <TopMenuSection />
        <div className="relative w-full h-full">
          <MapDisplay center={center} points={points} />
          <div className="absolute z-10 h-full w-full top-0 flex items-center p-16">
            <div className="p-8 w-fit h-fit bg-[rgb(45,45,45)] mt-16">
              <div className="p-4 flex flex-col gap-4 bg-primary items-center">
                <p className="text-secondary font-semibold font-playfair text-xl">
                  Contact Details
                </p>
                {contactInfo.map((info, ind) => (
                  <div
                    className="flex gap-2 items-center font-playfair text-[14px] w-full"
                    key={"icon-" + ind}
                  >
                    <Icon
                      icon={info.icon}
                      width="24"
                      height="24"
                      className="text-secondary"
                    />
                    <p className="text-gray-400">{info.label}:</p>

                    <p className="text-white font-semibold">{info.text}</p>
                  </div>
                ))}
                <Icon
                  icon="solar:menu-dots-bold"
                  width="24"
                  height="24"
                  className="text-secondary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex px-8 py-16 gap-8">
          <div className="w-[60%] flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[32px] font-semibold font-playfair text-white">
                Get in touch
              </p>
              <Dottes />
            </div>
            <p className="text-gray-300 text-sm font-poppins">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt.
            </p>
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
                <NormalInputBox
                  value={reservationFrom.subject.value}
                  placeholder={reservationFrom.subject.placeholder}
                  onChange={(e) =>
                    setReservationFrom({
                      ...reservationFrom,
                      subject: {
                        ...reservationFrom.subject,
                        value: e.target.value,
                      },
                    })
                  }
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
            <CustomButton text="Send Message" />
          </div>
          <div className="w-[40%] justify-center items-center flex">
            <div className="h-fit w-fit px-2 py-8 bg-[rgba(50,50,50)]">
              <ReservationInfo extraStyle="block" />
            </div>
          </div>
        </div>
        <FooterSection />
      </ComponentContainer>
    </div>
  );
};

export default ContactUsPage;
