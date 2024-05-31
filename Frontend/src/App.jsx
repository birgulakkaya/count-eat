import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import BlogPage from "./Pages/BlogPage";
import DietTypesPage from "./Pages/DietTypesPage";
import DMCAPage from "./Pages/DMCAPage";
import ExplorePage from "./Pages/ExplorePage";
import FoodsPage from "./Pages/FoodsPage";
import ForProfessionalsPage from "./Pages/ForProfessionalsPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import SupportPage from "./Pages/SupportPage";
import TermsOfUsePage from "./Pages/TermsOfUsePage";
import RegisterPage from "./Pages/RegisterPage";
import SingleFoodPage from "./Pages/SingleFoodPage";
import SingleBlogPage from "./Pages/SingleBlogPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/diettypes" element={<DietTypesPage />} />
        <Route path="/dmca" element={<DMCAPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/foods" element={<FoodsPage />} />
        <Route path="/food/:id" element={<SingleFoodPage />} />
        <Route path="/forproffesionals" element={<ForProfessionalsPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
