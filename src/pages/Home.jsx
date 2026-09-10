import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import arrowAsset from "../assets/ARROW.png";
import galactixVideo from "../assets/Galactixvideo_white.mp4";
import statIcon1 from "../assets/Vector (4).svg";
import statIcon2 from "../assets/Group.svg";
import statIcon3 from "../assets/Vector (3).svg";
import enterpriseIcon from "../assets/boxicons_enterprise.svg";
import softwareIcon from "../assets/boxicons_code.svg";
import aiIcon from "../assets/fluent_brain-circuit-20-regular.svg";
import cyberIcon from "../assets/CYBEER.svg";
import cloudIcon from "../assets/akar-icons_cloud.svg";
import chipIcon from "../assets/heroicons-outline_chip.svg";
import researchIcon from "../assets/research and innovation.svg";
import trainingIcon from "../assets/training and dev.svg";
import vlsiIcon from "../assets/vlsi.svg";
import labsIcon from "../assets/labicon1.svg";

import pillarEngineerIcon from "../assets/Frame 1707484024.svg";
import pillarInnovateIcon from "../assets/Frame 1707484024 (1).svg";
import pillarImpactIcon from "../assets/Frame 1707484024 (2).svg";
import aiWorkflowIcon from "../assets/aiautomation.svg";
import multiAgentIcon from "../assets/carbon_ai-agent.svg";
import seoAgentIcon from "../assets/streamline-ultimate_seo-search-graph-bold.svg";
import enterpriseAiIcon from "../assets/griddy-icons_enterprise.svg";
import agenticBusinessIcon from "../assets/lucide_briefcase-business.svg";
import telehealthImg from "../assets/telehealth.png";
import kodemilabsImg from "../assets/kodemi.png";
import teknowsageImg from "../assets/teknowsage.png";
import synaptimeshImg from "../assets/synaptimesh.png";
import aiInProjectsImg from "../assets/ai in projects.png";
import manipurLogo from "../assets/MANIPUR.png";
import hitamLogo from "../assets/HITAM'.png";
import assamLogo from "../assets/GOVT.ASSAM.png";
import essplLogo from "../assets/ESSPL.png";
import aemLogo from "../assets/AEM.png";
import nasscomLogo from "../assets/NAASCOM.png";
import cmmiLogo from "../assets/CMMI.png";
import iso9001Logo from "../assets/ISO-2.png";
import iso21001Logo from "../assets/ISO-1.png";
import aboutGalactixImg from "../assets/0f0602b2996e60efbb41cc33ed905dbfbaf8572f.png";
import researchDrivenIcon from "../assets/uil_brain.svg";
import customerSuccessIcon from "../assets/customer success first.svg";
import Layout from "../components/Layout";

const easeOutCubic = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutCubic },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutCubic },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const stagger = staggerContainer;

export default function Home() {
  const navigate = useNavigate();
  const projectsContainerRef = useRef(null);
  const targetScrollRef = useRef(0);

  const scrollProjects = (direction) => {
    if (projectsContainerRef.current) {
      const container = projectsContainerRef.current;
      const firstCard = container.children[0];
      if (firstCard) {
        const gap = window.innerWidth < 640 ? 24 : 28;
        const scrollAmount = firstCard.offsetWidth + gap;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (Math.abs(container.scrollLeft - targetScrollRef.current) > 10) {
          targetScrollRef.current = container.scrollLeft;
        }

        if (direction === "left") {
          targetScrollRef.current = Math.max(0, targetScrollRef.current - scrollAmount);
        } else {
          targetScrollRef.current = Math.min(maxScroll, targetScrollRef.current + scrollAmount);
        }

        container.scrollTo({
          left: targetScrollRef.current,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Layout>
      {/* ── HERO & STATS SECTION ── */}
      <section className="w-full bg-white pt-0 pb-12 sm:pb-14 md:pb-16 overflow-hidden flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOutCubic }}
          className="w-[90%] md:w-[70%] lg:w-[55%] max-w-[1050px] mx-auto"
        >
          <video
            src={galactixVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto aspect-video block mx-auto bg-white object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: easeOutCubic }}
          className="w-full mt-6 sm:mt-8 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -5px rgba(22, 18, 109, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/services")}
            className="min-w-[200px] sm:min-w-[260px] h-[48px] sm:h-[60px] px-6 sm:px-8 bg-[#16126D] hover:bg-[#120e5c] text-white text-[14px] sm:text-[15px] md:text-base font-semibold rounded-[65px] flex items-center justify-center whitespace-nowrap opacity-100 cursor-pointer transition-colors shadow-sm"
          >
            Explore Our Services
          </motion.button>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: easeOutCubic }}
          className="w-[95%] sm:w-[92%] max-w-[1520px] mx-auto mt-12 sm:mt-16 bg-white border border-gray-200/80 rounded-2xl sm:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] py-8 sm:py-10 px-6 sm:px-10 lg:px-12"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          >
            {/* Stat 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-col items-start text-left px-2 sm:px-4 lg:px-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110">
                <img src={statIcon3} alt="Projects Delivered" loading="lazy" decoding="async" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1731] tracking-tight mb-1">
                10+
              </span>
              <span className="text-sm sm:text-base text-gray-600 font-medium">
                Projects Delivered
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-col items-start text-left px-2 sm:px-4 lg:px-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110">
                <img src={statIcon1} alt="Happy Clients" loading="lazy" decoding="async" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1731] tracking-tight mb-1">
                25+
              </span>
              <span className="text-sm sm:text-base text-gray-600 font-medium">
                Happy Clients
              </span>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-col items-start text-left px-2 sm:px-4 lg:px-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110">
                <img src={enterpriseIcon} alt="Business Domains" loading="lazy" decoding="async" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1731] tracking-tight mb-1">
                6+
              </span>
              <span className="text-sm sm:text-base text-gray-600 font-medium">
                Business Domains
              </span>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-col items-start text-left px-2 sm:px-4 lg:px-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF5FF] flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110">
                <img src={statIcon2} alt="Commitment to Excellence" loading="lazy" decoding="async" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1731] tracking-tight mb-1">
                100%
              </span>
              <span className="text-sm sm:text-base text-gray-600 font-medium whitespace-normal lg:whitespace-nowrap">
                Commitment to Excellence
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── WHAT WE DO / OUR CORE SERVICES ── */}
        <div id="our-core-services" className="w-[90%] max-w-[1500px] mx-auto mt-20 sm:mt-24 lg:mt-28 scroll-mt-28">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutCubic }}
            className="flex flex-col items-start text-left mb-10 sm:mb-12"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0825E8] uppercase mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1731] tracking-tight">
              Our Core Services
            </h2>
            <div className="w-12 h-1 bg-[#0047E4] rounded-full mt-3.5"></div>
          </motion.div>

          {/* 3-column x 2-row Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {/* Service 1: Software Development */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)", borderColor: "#0825E8" }}
              transition={{ duration: 0.25 }}
              id="service-software-development"
              onClick={() => navigate("/services/software-development")}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-7 flex flex-col items-start text-left shadow-sm scroll-mt-28 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F1F5FF] flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img src={softwareIcon} alt="Software Development" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                Software Development
              </h3>
              <p className="text-[15px] sm:text-base text-gray-500 font-normal leading-relaxed">
                Custom enterprise, web, mobile & cloud-native applications engineered for scale.
              </p>
            </motion.div>

            {/* Service 2: Research & Innovation */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)", borderColor: "#0825E8" }}
              transition={{ duration: 0.25 }}
              id="service-research-innovation"
              onClick={() => navigate("/services/research-innovation")}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-7 flex flex-col items-start text-left shadow-sm scroll-mt-28 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F1F5FF] flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img src={researchIcon} alt="Research & Innovation" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                Research & Innovation
              </h3>
              <p className="text-[15px] sm:text-base text-gray-500 font-normal leading-relaxed">
                Advanced research, emerging technologies, and innovative solutions that drive real-world impact.
              </p>
            </motion.div>

            {/* Service 3: Cybersecurity & Security Operations */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)", borderColor: "#0825E8" }}
              transition={{ duration: 0.25 }}
              id="service-cybersecurity"
              onClick={() => navigate("/services/cybersecurity-security-operations")}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-7 flex flex-col items-start text-left shadow-sm scroll-mt-28 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F1F5FF] flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img src={cyberIcon} alt="Cybersecurity & Security Operations" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                Cybersecurity & Security Operations
              </h3>
              <p className="text-[15px] sm:text-base text-gray-500 font-normal leading-relaxed">
                Enterprise-grade security solutions designed to detect, respond to, and protect critical IT environments.
              </p>
            </motion.div>

            {/* Service 4: Training & Development */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)", borderColor: "#0825E8" }}
              transition={{ duration: 0.25 }}
              id="service-training-development"
              onClick={() => navigate("/services/training-development")}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-7 flex flex-col items-start text-left shadow-sm scroll-mt-28 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F1F5FF] flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img src={trainingIcon} alt="Training & Development" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                Training & Development
              </h3>
              <p className="text-[15px] sm:text-base text-gray-500 font-normal leading-relaxed">
                Industry-focused training programs that build skills, strengthen capabilities, and prepare future-ready talent.
              </p>
            </motion.div>

            {/* Service 5: Labs & Smart Infrastructure */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)", borderColor: "#0825E8" }}
              transition={{ duration: 0.25 }}
              id="service-labs-smart-infrastructure"
              onClick={() => navigate("/services/labs-smart-infrastructure")}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-7 flex flex-col items-start text-left shadow-sm scroll-mt-28 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F1F5FF] flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img src={chipIcon} alt="Labs & Smart Infrastructure" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                Labs & Smart Infrastructure
              </h3>
              <p className="text-[15px] sm:text-base text-gray-500 font-normal leading-relaxed">
                AI labs, electronics labs, simulation environments, virtual labs and smart infrastructure solutions.
              </p>
            </motion.div>

            {/* Service 6: VLSI, IoT & Embedded */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(0,0,0,0.08)", borderColor: "#0825E8" }}
              transition={{ duration: 0.25 }}
              id="service-vlsi-iot"
              onClick={() => navigate("/services/vlsi-iot-embedded")}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-7 flex flex-col items-start text-left shadow-sm scroll-mt-28 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F1F5FF] flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img src={vlsiIcon} alt="VLSI, IoT & Embedded" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                VLSI, IoT & Embedded
              </h3>
              <p className="text-[15px] sm:text-base text-gray-500 font-normal leading-relaxed">
                Smart VLSI, IoT, and embedded solutions engineered for connected and intelligent systems.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT GALACTIX SECTION ── */}
      <section className="w-full bg-white py-14 sm:py-18 lg:py-20">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: easeOutCubic }}
              className="lg:col-span-6 w-full"
            >
              <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-gray-50">
                <img
                  src={aboutGalactixImg}
                  alt="About Galactix Team"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[420px] xl:h-[450px] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: easeOutCubic }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#2458F5] uppercase mb-2.5 sm:mb-3">
                ABOUT GALACTIX
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#0A1731] tracking-tight leading-[1.18] mb-4 sm:mb-5">
                Technology. Intelligence. <span className="text-[#3640CA]">Impact.</span>
              </h2>
              <p className="text-[15px] sm:text-base text-gray-600 font-normal leading-relaxed mb-4">
                Galactix Solutions is a technology-driven organization specializing in AI, software engineering, research, innovation, and infrastructure services.
              </p>
              <p className="text-[15px] sm:text-base text-gray-600 font-normal leading-relaxed mb-7 sm:mb-8">
                We partner with businesses, educational institutions, government agencies, and communities to build intelligent solutions that solve complex challenges and create lasting impact.
              </p>

              {/* 2x2 Feature Points */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5 pt-1">
                {/* 1. AI-Powered Solutions */}
                <div className="flex items-center gap-3">
                  <div className="shrink-0 text-[#3640CA]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M17.5 3V9M14.5 6H20.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[15px] sm:text-base font-bold text-[#0A1731]">
                    AI-Powered Solutions
                  </span>
                </div>

                {/* 2. Research Driven Innovation */}
                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] shrink-0 flex items-center justify-center">
                    <img
                      src={researchDrivenIcon}
                      alt="Research Driven Innovation"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[15px] sm:text-base font-bold text-[#0A1731]">
                    Research Driven Innovation
                  </span>
                </div>

                {/* 3. Engineering Excellence */}
                <div className="flex items-center gap-3">
                  <div className="shrink-0 text-[#3640CA]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="5" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
                      <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                      <path d="M9.5 2V5M14.5 2V5M9.5 19V22M14.5 19V22M2 9.5H5M2 14.5H5M19 9.5H22M19 14.5H22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[15px] sm:text-base font-bold text-[#0A1731]">
                    Engineering Excellence
                  </span>
                </div>

                {/* 4. Customer Success First */}
                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] shrink-0 flex items-center justify-center">
                    <img
                      src={customerSuccessIcon}
                      alt="Customer Success First"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[15px] sm:text-base font-bold text-[#0A1731]">
                    Customer Success First
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS OF EVERYTHING WE DO SECTION ── */}
      <section className="w-full bg-[#030637] pt-[70px] sm:pt-[85px] lg:pt-[100px] pb-[80px] sm:pb-[95px] lg:pb-[110px]">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutCubic }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-white uppercase mb-2 block">
              WHAT MAKES US DIFFERENT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight">
              Three Pillars of Everything We Do
            </h2>
          </motion.div>

          {/* 3 Pillar Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-10 xl:gap-x-12 items-stretch"
          >
            {/* CARD 1 — ENGINEER */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.35)", transition: { duration: 0.25 } }}
              className="relative w-full min-h-[315px] bg-[#2B2D58] border-2 border-white/10 rounded-[12px] pt-16 pb-8 px-7 sm:px-8 flex flex-col items-center text-center justify-center shadow-lg transition-colors group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[92px] sm:w-[96px] sm:h-[96px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={pillarEngineerIcon}
                  alt="ENGINEER"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-white font-bold text-[17px] sm:text-[18px] tracking-wide mb-1.5 uppercase">
                ENGINEER
              </h3>
              <span className="text-gray-300 text-xs sm:text-[13px] font-medium mb-3.5 block">
                Software · AI · Cloud
              </span>
              <p className="text-gray-300/80 text-[13px] sm:text-[14px] leading-[1.65]">
                We engineer robust, secure, and scalable solutions using best-in-class technologies and practices.
              </p>
            </motion.div>

            {/* CARD 2 — INNOVATE */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.35)", transition: { duration: 0.25 } }}
              className="relative w-full min-h-[315px] bg-[#2B2D58] border-2 border-white/10 rounded-[12px] pt-16 pb-8 px-7 sm:px-8 flex flex-col items-center text-center justify-center shadow-lg transition-colors group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[92px] sm:w-[96px] sm:h-[96px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={pillarInnovateIcon}
                  alt="INNOVATE"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-white font-bold text-[17px] sm:text-[18px] tracking-wide mb-1.5 uppercase">
                INNOVATE
              </h3>
              <span className="text-gray-300 text-xs sm:text-[13px] font-medium mb-3.5 block">
                Research · Labs · Emerging Tech
              </span>
              <p className="text-gray-300/80 text-[13px] sm:text-[14px] leading-[1.65]">
                We invest in research and build intelligent products and labs that shape the future.
              </p>
            </motion.div>

            {/* CARD 3 — IMPACT */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.35)", transition: { duration: 0.25 } }}
              className="relative w-full min-h-[315px] bg-[#2B2D58] border-2 border-white/10 rounded-[12px] pt-16 pb-8 px-7 sm:px-8 flex flex-col items-center text-center justify-center md:col-span-2 lg:col-span-1 shadow-lg transition-colors group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[92px] sm:w-[96px] sm:h-[96px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={pillarImpactIcon}
                  alt="IMPACT"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-white font-bold text-[17px] sm:text-[18px] tracking-wide mb-1.5 uppercase">
                IMPACT
              </h3>
              <span className="text-gray-300 text-xs sm:text-[13px] font-medium mb-3.5 block">
                Industry · Education · Community
              </span>
              <p className="text-gray-300/80 text-[13px] sm:text-[14px] leading-[1.65]">
                We create sustainable impact through education, skilling and community empowerment initiatives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── AI & AGENTIC AI SOLUTIONS SECTION ── */}
      <section className="w-full bg-white pt-[65px] sm:pt-[75px] lg:pt-[80px] pb-[70px] sm:pb-[80px] lg:pb-[85px]">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutCubic }}
            className="flex flex-col items-start text-left mb-10 sm:mb-12"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0825E8] uppercase mb-2">
              AI & AGENTIC AI SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0A1731] tracking-tight leading-tight">
              Intelligent Automation for a Smarter Future
            </h2>
            <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-[#0047E4] rounded-full mt-1.5"></div>
          </motion.div>

          {/* 5 AI Capability Items */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-y-0 gap-x-4"
          >
            {/* Item 1: AI Workflow Automation */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center px-2 sm:px-4 group cursor-pointer"
            >
              <div className="w-[56px] h-[56px] flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={aiWorkflowIcon}
                  alt="AI Workflow Automation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-base sm:text-[17px] font-semibold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 leading-[1.3] text-center max-w-[180px]">
                AI Workflow<br />Automation
              </h4>
            </motion.div>

            {/* Item 2: Multi Agent Systems */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center px-2 sm:px-4 group cursor-pointer"
            >
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[#EFF4FF] flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={multiAgentIcon}
                  alt="Multi Agent Systems"
                  loading="lazy"
                  decoding="async"
                  className="w-[28px] h-[28px] object-contain"
                />
              </div>
              <h4 className="text-base sm:text-[17px] font-semibold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 leading-[1.3] text-center max-w-[180px]">
                Multi Agent<br />Systems
              </h4>
            </motion.div>

            {/* Item 3: Intelligent SEO Agents */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center px-2 sm:px-4 group cursor-pointer"
            >
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[#EFF4FF] flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={seoAgentIcon}
                  alt="Intelligent SEO Agents"
                  loading="lazy"
                  decoding="async"
                  className="w-[28px] h-[28px] object-contain"
                />
              </div>
              <h4 className="text-base sm:text-[17px] font-semibold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 leading-[1.3] text-center max-w-[180px]">
                Intelligent<br />SEO Agents
              </h4>
            </motion.div>

            {/* Item 4: Enterprise AI Integrations */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center px-2 sm:px-4 group cursor-pointer"
            >
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[#EFF4FF] flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={enterpriseAiIcon}
                  alt="Enterprise AI Integrations"
                  loading="lazy"
                  decoding="async"
                  className="w-[28px] h-[28px] object-contain"
                />
              </div>
              <h4 className="text-base sm:text-[17px] font-semibold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 leading-[1.3] text-center max-w-[180px]">
                Enterprise<br />AI Integrations
              </h4>
            </motion.div>

            {/* Item 5: Agentic Business Automation */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center px-2 sm:px-4 col-span-2 md:col-span-1 group cursor-pointer"
            >
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[#EFF4FF] flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={agenticBusinessIcon}
                  alt="Agentic Business Automation"
                  loading="lazy"
                  decoding="async"
                  className="w-[28px] h-[28px] object-contain"
                />
              </div>
              <h4 className="text-base sm:text-[17px] font-semibold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 leading-[1.3] text-center max-w-[180px]">
                Agentic Business<br />Automation
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR PROJECTS SECTION ── */}
      <section className="w-full bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px] pb-[70px] sm:pb-[80px] lg:pb-[90px]">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          {/* Section Header with Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutCubic }}
            className="flex items-end justify-between mb-8 sm:mb-10 lg:mb-12"
          >
            <div className="flex flex-col items-start text-left">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0825E8] uppercase mb-2">
                OUR PROJECTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1731] tracking-tight leading-tight">
                Solutions That Drive Real-World Impact
              </h2>
              <div className="w-12 h-1 bg-[#0047E4] rounded-full mt-3.5"></div>
            </div>

            {/* Left & Right Scroll Navigation Arrows */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => scrollProjects("left")}
                aria-label="Scroll Left"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-[#0A1731] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => scrollProjects("right")}
                aria-label="Scroll Right"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-[#0A1731] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Projects Container */}
        <div className="w-full">
          <div className="w-[90%] max-w-[1500px] mx-auto">
            <motion.div
              ref={projectsContainerRef}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-6 sm:gap-7 overflow-x-auto no-scrollbar pb-8 pt-3 px-2 scroll-smooth"
            >
              {/* CARD 1 — TeleHealth */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative w-full sm:w-[350px] md:w-[360px] shrink-0 bg-white border border-gray-200/90 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,65,19,0.18)] hover:border-[#004113]/40 hover:bg-[#F2F8F4] transition-all duration-300"
              >
                <div>
                  <div className="w-full h-[190px] sm:h-[200px] rounded-[14px] bg-[#EAF5EE] group-hover:bg-[#DEEFE4] transition-colors duration-300 flex items-center justify-center p-2 mb-5 overflow-hidden">
                    <img
                      src={telehealthImg}
                      alt="TeleHealth with AI Integration"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain scale-110 transition-transform duration-300 group-hover:scale-120"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#004113] uppercase tracking-wider block mb-2">
                    HEALTHCARE
                  </span>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0A1731] group-hover:text-[#004113] transition-colors duration-200 mb-3 leading-snug">
                    TeleHealth with AI Integration
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] font-normal leading-[1.6]">
                    An AI-powered healthcare platform enabling remote patient monitoring, smart health analytics, and seamless tele consultation — redefining patient care delivery.
                  </p>
                </div>
              </motion.div>

              {/* CARD 2 — Kodemi Labs */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative w-full sm:w-[350px] md:w-[360px] shrink-0 bg-white border border-gray-200/90 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(8,37,232,0.14)] hover:border-[#0825E8]/40 hover:bg-[#F9FBFF] transition-all duration-300"
              >
                <div>
                  <div className="w-full h-[190px] sm:h-[200px] rounded-[14px] bg-[#F1F6FF] group-hover:bg-[#EAEFFF] transition-colors duration-300 flex items-center justify-center p-3 mb-5 overflow-hidden">
                    <img
                      src={kodemilabsImg}
                      alt="Kodemi Labs Open Platform"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0825E8] uppercase tracking-wider block mb-2">
                    EDUCATION
                  </span>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                    Kodemi Labs Open Platform
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] font-normal leading-[1.6]">
                    An intelligent learning ecosystem featuring smart assessments, virtual environments, and real-time collaboration tools for the next generation of learners.
                  </p>
                </div>
              </motion.div>

              {/* CARD 3 — Teknowsage */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative w-full sm:w-[350px] md:w-[360px] shrink-0 bg-white border border-gray-200/90 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,65,19,0.18)] hover:border-[#004113]/40 hover:bg-[#F2F8F4] transition-all duration-300"
              >
                <div>
                  <div className="w-full h-[190px] sm:h-[200px] rounded-[14px] bg-[#EAF5EE] group-hover:bg-[#DEEFE4] transition-colors duration-300 flex items-center justify-center p-2 mb-5 overflow-hidden">
                    <img
                      src={teknowsageImg}
                      alt="Teknowsage"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain scale-110 transition-transform duration-300 group-hover:scale-120"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#004113] uppercase tracking-wider block mb-2">
                    EDUCATION
                  </span>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0A1731] group-hover:text-[#004113] transition-colors duration-200 mb-3 leading-snug">
                    Teknowsage
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] font-normal leading-[1.6]">
                    Empowering learners through personalized learning paths, expert mentorship, smart assessments, and interactive tools — all in one intelligent platform.
                  </p>
                </div>
              </motion.div>

              {/* CARD 4 — SynaptiMesh */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative w-full sm:w-[350px] md:w-[360px] shrink-0 bg-white border border-gray-200/90 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(8,37,232,0.14)] hover:border-[#0825E8]/40 hover:bg-[#F9FBFF] transition-all duration-300"
              >
                <div>
                  <div className="w-full h-[190px] sm:h-[200px] rounded-[14px] bg-[#F1F6FF] group-hover:bg-[#EAEFFF] transition-colors duration-300 flex items-center justify-center p-3 mb-5 overflow-hidden">
                    <img
                      src={synaptimeshImg}
                      alt="SynaptiMesh"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0825E8] uppercase tracking-wider block mb-2">
                    RESEARCH
                  </span>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                    SynaptiMesh
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] font-normal leading-[1.6]">
                    A Real-Time Thought-Guided Command Layer for Heterogeneous Networked Smart Environments.
                  </p>
                </div>
              </motion.div>

              {/* CARD 5 — AI Automations (ai in projects) */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative w-full sm:w-[350px] md:w-[360px] shrink-0 bg-white border border-gray-200/90 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(8,37,232,0.14)] hover:border-[#0825E8]/40 hover:bg-[#F9FBFF] transition-all duration-300"
              >
                <div>
                  <div className="w-full h-[190px] sm:h-[200px] rounded-[14px] bg-[#F1F6FF] group-hover:bg-[#EAEFFF] transition-colors duration-300 flex items-center justify-center p-2 mb-5 overflow-hidden">
                    <img
                      src={aiInProjectsImg}
                      alt="AI Automations"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain scale-110 transition-transform duration-300 group-hover:scale-120"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0825E8] uppercase tracking-wider block mb-2">
                    ENTERPRISE
                  </span>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#0A1731] group-hover:text-[#0825E8] transition-colors duration-200 mb-3 leading-snug">
                    AI Automations
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] font-normal leading-[1.6]">
                    AI-powered content, newsletter, SEO, multi-agent automation and enterprise integrations.
                  </p>
                </div>
              </motion.div>

              {/* Spacer to ensure the last card is fully revealed when scrolled to the end */}
              <div className="w-4 sm:w-8 shrink-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATIONS SECTION ── */}
      <section className="w-full bg-white pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: easeOutCubic }}
          className="w-[94%] sm:w-[92%] max-w-[1500px] mx-auto bg-[#EFF4FE] rounded-[24px] sm:rounded-[32px] px-4 sm:px-8 md:px-12 lg:px-[60px] py-7 sm:py-9 lg:py-[42px] box-border"
        >
          {/* Centered Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0A1731] text-center tracking-tight mb-6 sm:mb-8 lg:mb-9">
            Collaborations
          </h2>

          {/* 5 Logos Responsive Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-items-center"
          >
            {/* 1. Manipur Tribal Development Corporation */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={manipurLogo}
                alt="Manipur Tribal Development Corporation"
                loading="lazy"
                decoding="async"
                className="max-h-[50px] sm:max-h-[65px] lg:max-h-[75px] max-w-[150px] sm:max-w-[180px] lg:max-w-[210px] w-auto h-auto object-contain"
              />
            </motion.div>

            {/* 2. HITAM */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={hitamLogo}
                alt="HITAM"
                loading="lazy"
                decoding="async"
                className="max-h-[50px] sm:max-h-[65px] lg:max-h-[75px] max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] w-auto h-auto object-contain"
              />
            </motion.div>

            {/* 3. Government of Assam */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={assamLogo}
                alt="Government of Assam"
                loading="lazy"
                decoding="async"
                className="max-h-[52px] sm:max-h-[68px] lg:max-h-[78px] max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] w-auto h-auto object-contain"
              />
            </motion.div>

            {/* 4. ESSPL */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={essplLogo}
                alt="ESSPL"
                loading="lazy"
                decoding="async"
                className="max-h-[38px] sm:max-h-[48px] lg:max-h-[54px] max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] w-auto h-auto object-contain"
              />
            </motion.div>

            {/* 5. AEM Consulting Services */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 col-span-2 sm:col-span-1 cursor-pointer"
            >
              <img
                src={aemLogo}
                alt="AEM Consulting Services"
                loading="lazy"
                decoding="async"
                className="max-h-[44px] sm:max-h-[54px] lg:max-h-[62px] max-w-[130px] sm:max-w-[150px] lg:max-w-[170px] w-auto h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── RECOGNITIONS SECTION ── */}
      <section className="w-full bg-white pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: easeOutCubic }}
          className="w-[94%] sm:w-[92%] max-w-[1500px] mx-auto bg-[#EFF4FE] rounded-[24px] sm:rounded-[32px] px-4 sm:px-8 md:px-12 lg:px-[60px] py-7 sm:py-9 lg:py-[42px] box-border"
        >
          {/* Centered Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0A1731] text-center tracking-tight mb-6 sm:mb-8 lg:mb-9">
            Recognitions
          </h2>

          {/* 4 Logos Responsive Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-items-center"
          >
            {/* 1. NASSCOM */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={nasscomLogo}
                alt="NASSCOM"
                loading="lazy"
                decoding="async"
                className="max-h-[48px] sm:max-h-[60px] lg:max-h-[72px] max-w-[140px] sm:max-w-[180px] lg:max-w-[210px] w-auto h-auto object-contain"
              />
            </motion.div>

            {/* 2. CMMI */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={cmmiLogo}
                alt="CMMI Level 3"
                loading="lazy"
                decoding="async"
                className="max-h-[44px] sm:max-h-[55px] lg:max-h-[65px] max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] w-auto h-auto object-contain"
              />
            </motion.div>

            {/* 3. ISO 9001:2015 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={iso9001Logo}
                alt="ISO 9001:2015"
                loading="lazy"
                decoding="async"
                className="max-h-[50px] sm:max-h-[65px] lg:max-h-[75px] max-w-[130px] sm:max-w-[150px] lg:max-w-[170px] w-auto h-auto object-contain"
              />
            </motion.div>

            {/* 4. ISO 21001:2018 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="flex items-center justify-center h-[60px] sm:h-[75px] lg:h-[85px] w-full p-1.5 sm:p-2 cursor-pointer"
            >
              <img
                src={iso21001Logo}
                alt="ISO 21001:2018"
                loading="lazy"
                decoding="async"
                className="max-h-[50px] sm:max-h-[65px] lg:max-h-[75px] max-w-[130px] sm:max-w-[150px] lg:max-w-[170px] w-auto h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── LET'S BUILD WHAT'S NEXT CTA SECTION ── */}
      <section className="w-full bg-white pt-2 pb-16 sm:pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: easeOutCubic }}
          className="w-[94%] sm:w-[92%] max-w-[1500px] mx-auto rounded-[32px] bg-gradient-to-r from-[#01123E] to-[#052B8D] px-6 sm:px-12 md:px-16 lg:px-[64px] py-10 sm:py-12 lg:py-[56px] box-border relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 shadow-[0_16px_40px_rgba(1,18,62,0.2)]"
        >
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOutCubic }}
            className="w-full lg:max-w-[650px] flex flex-col items-start text-left z-10"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#93B4FF] uppercase mb-3 sm:mb-4">
              LET'S BUILD WHAT'S NEXT
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4 sm:mb-5">
              Ready to Turn your Ideas<br className="hidden sm:inline" /> into Real Impact?
            </h2>

            <p className="text-[#C4D7FF] text-sm sm:text-base lg:text-[17px] leading-relaxed mb-7 sm:mb-9 max-w-[540px]">
              Our team is ready to help you innovate, scale and transform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-[#01123E] font-bold text-sm sm:text-[15px] rounded-[16px] flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Start a Project</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-[15px] rounded-[16px] border border-white/60 hover:border-white transition-all duration-200 cursor-pointer"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Arrow Artwork */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: easeOutCubic }}
            className="w-full lg:w-auto flex items-center justify-center lg:justify-end shrink-0 z-10"
          >
            <img
              src={arrowAsset}
              alt="Paper plane arrow"
              loading="lazy"
              decoding="async"
              className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] h-auto object-contain drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
