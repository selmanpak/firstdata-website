import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import PlatformPage from "./pages/PlatformPage";
import SolutionsPage from "./pages/SolutionsPage";
import UseCasesPage from "./pages/UseCasesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
