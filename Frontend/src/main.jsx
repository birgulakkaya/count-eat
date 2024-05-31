import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//! React Router Dom
import { BrowserRouter } from "react-router-dom";

//! React Slick Css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//!Scroll To Top Import
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
//!Layout
import { LayoutProvider } from "./Context/LayoutContext.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LayoutProvider>
      <MainLayout>
        <ScrollToTop />
        <App />
      </MainLayout>
    </LayoutProvider>
  </BrowserRouter>
);
