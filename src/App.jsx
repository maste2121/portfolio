import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import AboutMeMain from "./components/aboutMe/AboutMeMain";
import SkillsMain from "./components/SkillsSection/SkillsMain";
import ContactMeMain from "./components/ContactMeSection/ContactMeMain";
import { Routes, Route, useLocation } from "react-router-dom";
import SuccessPage from "./components/SuccessPage";
import FooterMain from "./components/footerSection/FooterMain";
import ProjectsSection from "./components/projects/ProjectsSection";

function App() {
  const location = useLocation();
  const isSuccess = location.pathname === "/success";

  return (
    <main className="overflow-hidden relative h-auto">
      {isSuccess ? (
        <Routes>
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      ) : (
        <>
          <NavbarMain />
          <HeroMain />
          <HeroGradient />
          <AboutMeMain />
          <SkillsMain />
          <ProjectsSection />
          <ContactMeMain />
          <Routes>
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
          <FooterMain />
        </>
      )}
    </main>
  );
}

export default App;
