import { useEffect, useState } from "react";
import PopUpReservation from "./components/PopupReservation";
import LandingPage from "./sections/LandingSection";
import MainLoader from "./components/MainLoader";

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
    <>
      <div className="h-full w-full flex flex-col justify-center items-center relative">
        {/* landing page section */}
        <LandingPage setShowReservationFrom={setShowReservationFrom} />
        {/* about us section */}

        {/* popup menu resevation */}
        <PopUpReservation show={showReservationFrom} setShow={setShowReservationFrom} />
      </div>
    </>
  );
}

export default App;
