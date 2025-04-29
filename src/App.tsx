import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import DefaultMenuPage from "./pages/DefaultMenuPage.tsx";
import routesPath from "./constants/routes.ts";
import { PopUpProvider } from "./context/PopupProvider.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutPage from "./pages/AboutPage.tsx";
import ContactUsPage from "./pages/ContactUsPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";

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
            <Route path={routesPath.ABOUT} element={<AboutPage />} />
            <Route path={routesPath.CONTACT} element={<ContactUsPage />} />
            <Route path={routesPath.NEWS} element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </PopUpProvider>
    </ParallaxProvider>
  );
}

export default App;
