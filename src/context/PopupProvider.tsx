import { createContext, ReactNode, useState } from "react";
import { shopItems } from "../constants/data";
import { DishDetailType } from "../types/menuType";
export interface PopupStructure {
  showPopUp: boolean;
  setShowPopUp: (v: boolean) => void;
  shopItem: DishDetailType;
  setShopItem: (v: DishDetailType) => void;
}

const initialiser: PopupStructure = {
  showPopUp: false,
  setShowPopUp: (v: boolean) => v,
  shopItem: shopItems[0],
  setShopItem: (v) => v,
};

export const PopupContext = createContext(initialiser);

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [shopItem, setShopItem] = useState(shopItems[0]);

  const handleShowPopup = (v: boolean) => setShowPopUp(v);
  const handleShopItem = (v: DishDetailType) => setShopItem(v);

  return (
    <PopupContext.Provider
      value={{
        showPopUp,
        setShowPopUp: handleShowPopup,
        shopItem,
        setShopItem: handleShopItem,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
