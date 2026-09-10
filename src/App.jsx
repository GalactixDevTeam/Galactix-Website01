import { Routes, Route } from "react-router-dom";
import './App.css';
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import JobApply from "./pages/JobApply";
import Contact from "./pages/contact";
import CloudDigitalInfrastructure from "./pages/CloudDigitalInfrastructure";
import AIAgenticAISolutions from "./pages/AIAgenticAISolutions";
import SoftwareDevelopment from "./pages/Softwaredevelopment";
import WebMobileAppDev from "./pages/WebMobileAppDev";
import UiuxProduct from "./pages/Uiuxproduct";
import LabsSmartInfrastructure from "./pages/LabsSmartInfrastructure";
import CybersecuritySecurityOperations from "./pages/CybersecuritySecurityOperations";
import ResearchInnovation from "./pages/ResearchInnovation";
import EnterpriseApplications from "./pages/EnterpriseApplications";
import USTrainings from "./pages/USTrainings";
import TrainingDevelopment from "./pages/TrainingDevelopment";
import VlsiIotEmbedded from "./pages/VlsiIotEmbedded";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import TermsAndConditions from "./pages/terms-conditions";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import Disclaimer from "./pages/Disclaimer";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/software-development/web-mobile-application-development" element={<WebMobileAppDev />} />
        <Route path="/services/software-development/enterprise-applications" element={<EnterpriseApplications />} />
        <Route path="/services/software-development/ai-agentic-ai-solutions" element={<AIAgenticAISolutions />} />
        <Route path="/services/software-development/ui-ux-design" element={<UiuxProduct />} />
        <Route path="/services/software-development/cloud-infrastructure" element={<CloudDigitalInfrastructure />} />
        <Route path="/services/cybersecurity-security-operations" element={<CybersecuritySecurityOperations />} />
        <Route path="/services/labs-smart-infrastructure" element={<LabsSmartInfrastructure />} />
        <Route path="/services/training-development" element={<TrainingDevelopment />} />
        <Route path="/services/vlsi-iot-embedded" element={<VlsiIotEmbedded />} />
        <Route path="/services/research-innovation" element={<ResearchInnovation />} />
        <Route path="/services/training-development/us-trainings" element={<USTrainings />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetails />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/careers/:slug" element={<JobDetails />} />
        <Route path="/careers/:slug/apply" element={<JobApply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;