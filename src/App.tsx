import { useState } from "react";
import PopUpReservation from "./components/PopupReservation";
import LandingPage from "./sections/LandingSection";

function App() {
  const [showReservationFrom, setShowReservationFrom] = useState(false);
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
