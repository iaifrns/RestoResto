import { createContext, ReactNode, useState } from "react";
export interface PopupStructure {
  showPopUp: boolean;
  setShowPopUp: (v: boolean) => void;
}

const initialiser: PopupStructure = {
  showPopUp: false,
  setShowPopUp: (v: boolean) => v,
};

export const PopupContext = createContext(initialiser);

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowPopup = (v: boolean) => setShowPopUp(v);

  return (
    <PopupContext.Provider value={{ showPopUp, setShowPopUp: handleShowPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
