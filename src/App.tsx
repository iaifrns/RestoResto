import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import DefaultMenuPage from "./pages/DefaultMenuPage.tsx";
import routesPath from "./constants/routes.ts";
import { PopUpProvider } from "./context/PopupProvider.tsx";

function App() {
  return (
    <PopUpProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routesPath.HOME} element={<HomePage />} />
          <Route path={routesPath.DEFAULTMENU} element={<DefaultMenuPage />} />
        </Routes>
      </BrowserRouter>
    </PopUpProvider>
  );
}

export default App;
