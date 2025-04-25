import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import DefaultMenuPage from "./pages/DefaultMenuPage.tsx";
import routesPath from "./constants/routes.ts";
import { PopUpProvider } from "./context/PopupProvider.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <PopUpProvider>
        <BrowserRouter>
          <Routes>
            <Route path={routesPath.HOME} element={<HomePage />} />
            <Route
              path={routesPath.DEFAULTMENU}
              element={<DefaultMenuPage />}
            />
            <Route path={routesPath.MENU} element={<MenuPage />} />
          </Routes>
        </BrowserRouter>
      </PopUpProvider>
    </ParallaxProvider>
  );
}

export default App;
