import { useEffect, useState } from "react";
import MainLoader from "../components/MainLoader";
import PopUpReservation from "../components/PopupReservation";
import BookingSection from "../sections/BookingSection.tsx";
import ContactDetailInfoSection from "../sections/ContactDetailInfoSection.tsx";
import FooterSection from "../sections/FooterSection.tsx";
import LandingPage from "../sections/LandingSection";
import MenuSection from "../sections/MenuSection.tsx";
import OurChefSection from "../sections/OurChefSection.tsx";
import OurStorySection from "../sections/OurStorySection.tsx";
import ReasonsToChooseUs from "../sections/ReasonsToChooseUs.tsx";
import Testimony from "../sections/Testimony.tsx";
import TopMenuSection from "../sections/TopMenuSection.tsx";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center relative bg-primary">
      <TopMenuSection />
      {/* landing page section */}
      <LandingPage />
      {/* about us section */}
      <OurStorySection />
      {/* restaurant contact details */}
      <ContactDetailInfoSection />
      {/* reasons for choosing us */}
      <ReasonsToChooseUs />
      {/* menu section */}
      <MenuSection />
      {/* our chef section */}
      <OurChefSection />
      {/* booking section */}
      <BookingSection />
      {/* Testimonies section */}
      <Testimony />
      {/* Footer */}
      <FooterSection />
      {/* popup menu resevation */}
      <PopUpReservation />
    </div>
  );
};

export default HomePage;
