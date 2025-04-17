import { useEffect, useState } from "react";
import PopUpReservation from "./components/PopupReservation";
import LandingPage from "./sections/LandingSection";
import MainLoader from "./components/MainLoader";
import OurStorySection from "./sections/OurStorySection.tsx";
import ContactDetailInfoSection from "./sections/ContactDetailInfoSection.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import ReasonsToChooseUs from "./sections/ReasonsToChooseUs.tsx";
import MenuSection from "./sections/MenuSection.tsx";
import OurChefSection from "./sections/OurChefSection.tsx";

function App() {
  const [showReservationFrom, setShowReservationFrom] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])

  if(isLoading){
    return <MainLoader />
  }

  return (
    <ParallaxProvider>
      <div className="h-full w-full flex flex-col justify-center items-center relative bg-primary gap-16">
        {/* landing page section */}
        <LandingPage setShowReservationFrom={setShowReservationFrom} />
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
        {/* popup menu resevation */}
        <PopUpReservation show={showReservationFrom} setShow={setShowReservationFrom} />
      </div>
    </ParallaxProvider>
  );
}

export default App;
