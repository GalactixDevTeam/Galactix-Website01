import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useMotionValueEvent } from "framer-motion";
import Layout from "../components/Layout";
import LazyImage from "../components/LazyImage";
import statProjectsDelivered from "../assets/PROJECTS DELIVERS.svg";
import statHappyClients from "../assets/HAPPY CLIENTS.svg";
import statBusinessDomains from "../assets/BUSINESS DOMAINS.svg";
import statCommitmentExcellence from "../assets/COMMITMENT OF EXCELENCE.svg";

import iconAiPowered from "../assets/AI POWERED.svg";
import iconResearchDriven from "../assets/RESEARCH DRIVEN.svg";
import iconEngineering from "../assets/ENGINEERING.svg";
import iconCustomer from "../assets/CUSTOMER.svg";

import iconAiMindset from "../assets/AI.svg";
import iconEndToEnd from "../assets/END TO END.svg";
import iconSecureScalable from "../assets/SECURESCALABLE.svg";
import iconIndustryExpertise from "../assets/INDUSTRY.svg";
import iconPartnershipApproach from "../assets/PARTNERSHIP.svg";

import iconFoundation from "../assets/FOUNDATION.svg";
import iconExpansion from "../assets/EXPANSION.svg";
import iconRecognition from "../assets/RECOGNITION.svg";
import iconFutureReady from "../assets/FUTURE READY.svg";



// Subtle easing & variants
const easeOutCubic = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutCubic },
  },
};

const staggerCards = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const timelineStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Count-Up Component for Statistics
function StatCounter({ target, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return target;
    }
    return 0;
  });

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    // Subtle synchronized duration (1200ms–1400ms)
    const duration = target <= 10 ? 1200 : target <= 30 ? 1350 : 1400;
    let animationFrameId;
    const startTime = performance.now();

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out cubic curve: fast start, smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.min(Math.floor(easeOut * (target + 0.5)), target);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, target]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className="stat-number tabular-nums">{count}</span>
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

const advantages = [
  {
    icon: iconAiMindset,
    title: "AI-First Mindset",
    desc: "We embed AI and intelligent automation into every solution to drive measurable value.",
  },
  {
    icon: iconEndToEnd,
    title: "End-to-End Capabilities",
    desc: "From consulting and design to deployment and support, we deliver complete solutions.",
  },
  {
    icon: iconSecureScalable,
    title: "Secure & Scalable",
    desc: "We build enterprise-grade solutions that are secure, scalable, and future-ready.",
  },
  {
    icon: iconIndustryExpertise,
    title: "Industry Expertise",
    desc: "Deep domain knowledge across healthcare, education, enterprise, and government.",
  },
  {
    icon: iconPartnershipApproach,
    title: "Partnership Approach",
    desc: "We work as an extension of your team, committed to your success and growth.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Foundation",
    icon: iconFoundation,
    points: [
      "Company Incorporated",
      "Core Team Established",
      "First Client Acquired",
      "Vision Defined",
    ],
  },
  {
    year: "2024",
    title: "Expansion",
    icon: iconExpansion,
    points: [
      "Service Portfolio Expanded",
      "Team Strength Increased",
      "Project Delivery Excellence",
      "Business Growth",
    ],
  },
  {
    year: "2025",
    title: "Recognition",
    icon: iconRecognition,
    points: [
      "Strategic Industry Collaborations",
      "HITAM College Partnership",
      "KodeMi Labs & SynaptiMesh",
      "NASSCOM Membership",
      "Growing Client Network",
    ],
  },
  {
    year: "2026",
    title: "Future Ready",
    icon: iconFutureReady,
    points: [
      "AI Agentic Solutions",
      "MTDC Empanelled",
      "Driving the Next Phase of Growth",
    ],
  },
];

const teamMembers = [
  {
    image: sriImage,
    name: "Srinath Pallabothu",
    role: "Founder & CEO",
    desc: "Entrepreneur and technologist focused on business growth, client success, and operational excellence.",
  },
  {
    image: sajjanImage,
    name: "Sajjan Kumar Agrawalla",
    role: "Delivery Manager",
    desc: "Driving seamless project delivery through effective team coordination, client engagement and timely execution.",
  },
  {
    image: vipinImage,
    name: "Vipin Mankala",
    role: "Lead Developer",
    desc: "Leading end-to-end software development with a focus on architecture, performance, quality, and continuous innovation.",
  },
  {
    image: sravaniImage,
    name: "Sravani Kothuri",
    role: "Research Officer\n(VLSI & Electronics)",
    desc: "Driving research and innovation in VLSI & electronics, exploring emerging technologies & developing practical solutions.",
  },
];

export default function About() {
  const milestoneSectionRef = useRef(null);
  const [revealedMilestones, setRevealedMilestones] = useState(1);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
      setRevealedMilestones(4);
    }
  }, []);

  const { scrollYProgress: milestoneScrollProgress } = useScroll({
    target: milestoneSectionRef,
    offset: ["start 75%", "end 35%"],
  });

  useMotionValueEvent(milestoneScrollProgress, "change", (latest) => {
    if (isReducedMotion) return;
    if (latest >= 0.6) {
      setRevealedMilestones((prev) => Math.max(prev, 4));
    } else if (latest >= 0.4) {
      setRevealedMilestones((prev) => Math.max(prev, 3));
    } else if (latest >= 0.2) {
      setRevealedMilestones((prev) => Math.max(prev, 2));
    } else if (latest >= 0.05) {
      setRevealedMilestones((prev) => Math.max(prev, 1));
    }
  });

  return (
    <Layout>
      <div className="w-full bg-white overflow-hidden pb-16 sm:pb-24">

        {/* ── SECTION 1: ABOUT US (HERO WITH SEQUENTIAL ENTRANCE) ── */}
        <section className="w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

              {/* LEFT COLUMN: CONTENT & STATISTICS */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">

                {/* Eyebrow - 0ms */}
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: easeOutCubic }}
                  className="text-sm sm:text-[15px] font-bold text-[#2458F5] block mb-3"
                >
                  About Us
                </motion.span>

                {/* Main Heading - 100ms */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: easeOutCubic }}
                  className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#0A1731] tracking-tight leading-[1.12] mb-6"
                >
                  Engineering Tomorrow<br />
                  Through <span className="text-[#2458F5]">Innovation</span>
                </motion.h1>

                {/* Paragraph 1 & 2 - 220ms */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22, ease: easeOutCubic }}
                >
                  <p className="text-[#374151] font-semibold text-[15px] sm:text-base leading-[1.65] mb-4 max-w-[580px]">
                    Galactix Solutions is a technology-driven organization specializing in AI, software engineering, research, innovation, and infrastructure services.
                  </p>
                  <p className="text-[#4B5563] font-medium text-[15px] sm:text-base leading-[1.65] mb-10 lg:mb-12 max-w-[580px]">
                    We partner with businesses, institutions, and governments to design and deliver intelligent solutions that solve complex challenges and create lasting impact.
                  </p>
                </motion.div>

                {/* STATISTICS ROW - 350ms */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: easeOutCubic }}
                  className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 pt-2"
                >
                  {/* Stat 1: Projects Delivered */}
                  <div className="flex flex-col items-start text-left">
                    <LazyImage src={statProjectsDelivered} alt="Projects Delivered" className="w-7 h-7 sm:w-8 sm:h-8 object-contain mb-2" />
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1731] tracking-tight mb-0.5">
                      <StatCounter target={10} suffix="+" />
                    </span>
                    <span className="text-xs sm:text-[13px] text-gray-500 font-medium leading-snug">
                      Projects Delivered
                    </span>
                  </div>

                  {/* Stat 2: Happy Clients */}
                  <div className="flex flex-col items-start text-left">
                    <LazyImage src={statHappyClients} alt="Happy Clients" className="w-7 h-7 sm:w-8 sm:h-8 object-contain mb-2" />
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1731] tracking-tight mb-0.5">
                      <StatCounter target={25} suffix="+" />
                    </span>
                    <span className="text-xs sm:text-[13px] text-gray-500 font-medium leading-snug">
                      Happy Clients
                    </span>
                  </div>

                  {/* Stat 3: Business Domains */}
                  <div className="flex flex-col items-start text-left">
                    <LazyImage src={statBusinessDomains} alt="Business Domains" className="w-7 h-7 sm:w-8 sm:h-8 object-contain mb-2" />
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1731] tracking-tight mb-0.5">
                      <StatCounter target={6} suffix="+" />
                    </span>
                    <span className="text-xs sm:text-[13px] text-gray-500 font-medium leading-snug">
                      Business Domains
                    </span>
                  </div>

                  {/* Stat 4: Commitment to Excellence */}
                  <div className="flex flex-col items-start text-left">
                    <LazyImage src={statCommitmentExcellence} alt="Commitment to Excellence" className="w-7 h-7 sm:w-8 sm:h-8 object-contain mb-2" />
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1731] tracking-tight mb-0.5">
                      <StatCounter target={100} suffix="%" />
                    </span>
                    <span className="text-xs sm:text-[13px] text-gray-500 font-medium leading-snug">
                      Commitment to Excellence
                    </span>
                  </div>

                </motion.div>

              </div>

              {/* RIGHT COLUMN: BUILDING IMAGE (450ms sequential reveal) */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: easeOutCubic }}
                className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end"
              >
                <div
                  className="w-full max-w-[700px] h-[360px] sm:h-[430px] lg:h-[500px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white"
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                    height: "500px",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    borderBottomLeftRadius: "160px",
                  }}
                >
                  <LazyImage
                    src="https://res.cloudinary.com/kf1uuvct/image/upload/v1789109199/7322e6326ff3943ff04c68ac1e8fe60de2f5e2a5.png"
                    alt="Engineering Tomorrow Through Innovation"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── SECTION 2: OUR STORY (ROUNDED CONTAINER SCROLL-REVEAL) ── */}
        <section className="w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: easeOutCubic }}
            className="max-w-[1500px] mx-auto bg-[#F4F7FF] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 xl:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

              {/* LEFT COLUMN: 40-45% width */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
                {/* Eyebrow */}
                <span className="text-sm sm:text-[15px] font-bold text-[#2458F5] uppercase tracking-wider block mb-3">
                  OUR STORY
                </span>

                {/* Main heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0A1731] tracking-tight leading-[1.15] mb-4">
                  From Vision to<br />
                  Meaningful Impact
                </h2>

                {/* Short blue horizontal decorative line - Animated */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "48px", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15, ease: easeOutCubic }}
                  className="h-1 bg-[#2458F5] rounded-full mb-6"
                />

                {/* Paragraphs */}
                <p className="text-[#4B5563] text-[15px] sm:text-base leading-[1.7] mb-4 max-w-[540px]">
                  Galactix Solutions was established on 26 July 2023 with a vision to bridge the gap between emerging technologies and business transformation.
                </p>

                <p className="text-[#4B5563] text-[15px] sm:text-base leading-[1.7] mb-4 max-w-[540px]">
                  From day one, our mission has been to build intelligent, scalable, and future-ready digital solutions that empower businesses, educational institutions, and government organizations.
                </p>

                <p className="text-[#4B5563] text-[15px] sm:text-base leading-[1.7] max-w-[540px]">
                  Our journey is driven by innovation, engineering excellence, and a commitment to creating long-term value for our clients, partners, and communities.
                </p>
              </div>

              {/* RIGHT COLUMN: 55-60% width */}
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center relative">

                {/* Right Side Full Image with uniform 20px corners */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: easeOutCubic }}
                  className="w-full max-w-[689.33px] h-[280px] sm:h-[340px] lg:h-[375.63px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white relative rounded-[20px]"
                  style={{
                    width: "100%",
                    maxWidth: "689.33px",
                    borderRadius: "20px",
                  }}
                >
                  <LazyImage
                    src="https://res.cloudinary.com/kf1uuvct/image/upload/v1789112892/WhatsApp_Image_2026-07-31_at_8.43.38_PM.jpg"
                    alt="From Vision to Meaningful Impact"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </motion.div>

                {/* BOTTOM OVERLAY CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2, ease: easeOutCubic }}
                  className="w-[94%] sm:w-[92%] md:w-full max-w-[625.33px] bg-white rounded-[16px] shadow-[0px_16px_36px_rgba(0,0,0,0.08)] -mt-8 sm:-mt-12 lg:-mt-16 z-10 relative border border-gray-100/80 mx-auto p-4 sm:p-5 lg:p-6"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-gray-100 items-center">

                    {/* Item 1: AI-Powered Solutions */}
                    <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF4FE] flex items-center justify-center mb-1.5 sm:mb-2 shrink-0">
                        <LazyImage src={iconAiPowered} alt="AI-Powered Solutions" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-[#0A1731] leading-tight">
                        AI-Powered<br className="hidden sm:inline" /> Solutions
                      </span>
                    </div>

                    {/* Item 2: Research-Driven Innovation */}
                    <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF4FE] flex items-center justify-center mb-1.5 sm:mb-2 shrink-0">
                        <LazyImage src={iconResearchDriven} alt="Research-Driven Innovation" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-[#0A1731] leading-tight">
                        Research-Driven<br className="hidden sm:inline" /> Innovation
                      </span>
                    </div>

                    {/* Item 3: Engineering Excellence */}
                    <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF4FE] flex items-center justify-center mb-1.5 sm:mb-2 shrink-0">
                        <LazyImage src={iconEngineering} alt="Engineering Excellence" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-[#0A1731] leading-tight">
                        Engineering<br className="hidden sm:inline" /> Excellence
                      </span>
                    </div>

                    {/* Item 4: Customer Success First */}
                    <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFF4FE] flex items-center justify-center mb-1.5 sm:mb-2 shrink-0">
                        <LazyImage src={iconCustomer} alt="Customer Success First" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-[#0A1731] leading-tight">
                        Customer<br className="hidden sm:inline" /> Success First
                      </span>
                    </div>

                  </div>
                </motion.div>

              </div>

            </div>
          </motion.div>
        </section>

        {/* ── SECTION 3: THE GALACTIX ADVANTAGE (STAGGERED REVEAL) ── */}
        <section className="w-full bg-white py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1500px] mx-auto">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: easeOutCubic }}
              className="text-center"
            >
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-bold text-[#2458F5] uppercase tracking-wider block text-center mb-2">
                WHAT MAKES US DIFFERENT
              </span>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#030637] text-center tracking-tight">
                The Galactix Advantage
              </h2>

              {/* Horizontal blue decorative line - Animated */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "48px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease: easeOutCubic }}
                className="h-1 bg-[#2458F5] rounded-full mx-auto mt-4 mb-12 sm:mb-16"
              />
            </motion.div>

            {/* 5-column feature layout with Stagger */}
            <motion.div
              variants={staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 sm:gap-y-12 lg:gap-y-0 lg:divide-x lg:divide-gray-200"
            >
              {advantages.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-5"
                >
                  {/* SVG Icon */}
                  <div className="h-14 sm:h-16 flex items-center justify-center mb-4">
                    <LazyImage
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-bold text-[#030637] text-[15px] sm:text-base leading-snug mb-3 min-h-[44px] flex items-center justify-center">
                    {item.title}
                  </h3>

                  {/* Description Text */}
                  <p className="text-[#4B5563] text-xs sm:text-[13px] leading-relaxed max-w-[220px] mx-auto">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── SECTION 4: OUR FOUNDATION / MILESTONES (PROGRESSIVE SCROLL REVEAL) ── */}
        <section ref={milestoneSectionRef} className="w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1500px] mx-auto">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: easeOutCubic }}
              className="text-center"
            >
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-bold text-[#2458F5] uppercase tracking-wider block text-center mb-2">
                OUR FOUNDATION
              </span>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#030637] text-center tracking-tight">
                Milestones That Define Our Growth
              </h2>

              {/* Horizontal blue decorative line - Animated */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "48px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease: easeOutCubic }}
                className="h-1 bg-[#2458F5] rounded-full mx-auto mt-4 mb-12 sm:mb-16"
              />
            </motion.div>

            {/* Timeline & Cards Container */}
            <div className="relative">
              {/* Connecting Timeline Line (Desktop: reveals with scroll progress) */}
              <motion.div
                initial={false}
                animate={{
                  scaleX:
                    revealedMilestones === 1
                      ? 0
                      : revealedMilestones === 2
                        ? 0.333
                        : revealedMilestones === 3
                          ? 0.666
                          : 1,
                }}
                transition={{
                  duration: isReducedMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute top-[40px] left-[10%] right-[10%] h-[4px] hidden lg:block z-0 pointer-events-none origin-left"
                style={{ backgroundColor: "rgba(45, 129, 234, 1)" }}
              />

              {/* 4 Cards Grid - Progressive Scroll Controlled Reveal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
                {milestones.map((item, idx) => {
                  const isVisible = idx < revealedMilestones;
                  return (
                    <motion.div
                      key={idx}
                      initial={false}
                      animate={{
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : 20,
                      }}
                      transition={{
                        duration: isReducedMotion ? 0 : 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`bg-white border border-[#E8E8E8] rounded-[16px] p-6 sm:p-7 flex flex-col justify-start min-h-[360px] sm:min-h-[390px] transition-shadow duration-300 hover:shadow-[0px_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${isVisible ? "pointer-events-auto" : "pointer-events-none select-none"
                        }`}
                      style={{
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      {/* Card Header: Icon & Year Side by Side */}
                      <div className="flex items-center gap-3.5 sm:gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#EFF4FE] flex items-center justify-center shrink-0">
                          <LazyImage
                            src={item.icon}
                            alt={item.title}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <span
                          className="text-2xl sm:text-[28px] lg:text-[30px] font-extrabold tracking-tight"
                          style={{ color: "rgba(36, 88, 245, 1)" }}
                        >
                          {item.year}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1731] mb-4">
                        {item.title}
                      </h3>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 text-left text-[#4B5563] text-sm sm:text-[15px] leading-relaxed">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start">
                            <span className="text-[#2458F5] mr-2.5 font-bold leading-tight select-none">
                              •
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 5: FROM THE DESK OF OUR DIRECTOR (SCROLL-REVEAL) ── */}
        <section className="w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: easeOutCubic }}
            className="max-w-[1500px] mx-auto rounded-[32px] overflow-hidden relative"
            style={{
              background: "rgba(237, 244, 255, 1)",
              padding: "55px 40px 65px",
            }}
          >
            {/* Top-Right Soft Blurred Radial Glow */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                top: "-120px",
                right: "-120px",
                width: "550px",
                height: "550px",
                background: "rgba(92, 156, 255, 1)",
                filter: "blur(120px)",
                opacity: 0.45,
              }}
            />

            <div className="relative z-10 px-2 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">

                {/* LEFT COLUMN: ~72-75% width */}
                <div className="lg:col-span-8 xl:col-span-8 flex flex-col text-left">
                  {/* Heading */}
                  <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] font-bold text-[#0B1B3F] tracking-tight leading-[1.15] mb-6 sm:mb-8">
                    From the Desk of Our Director
                  </h2>

                  {/* Paragraph 1 */}
                  <p className="text-[#4F5668] text-base sm:text-lg lg:text-[20px] leading-[1.65] font-normal mb-5">
                    Technology is transforming industries at an unprecedented pace, and organizations today require more than software—they need intelligent solutions that create measurable business value.
                  </p>

                  {/* Paragraph 2 */}
                  <p className="text-[#4F5668] text-base sm:text-lg lg:text-[20px] leading-[1.65] font-normal mb-5">
                    At Galactix Solutions, our vision is to build innovative technologies that empower businesses to embrace digital transformation with confidence. We believe in combining creativity, engineering excellence, research, and emerging technologies to develop solutions that solve real-world challenges.
                  </p>

                  {/* Paragraph 3 */}
                  <p className="text-[#4F5668] text-base sm:text-lg lg:text-[20px] leading-[1.65] font-normal mb-8">
                    Our commitment to quality, continuous innovation, and customer success has enabled us to establish long-lasting partnerships across multiple industries. Every project we undertake reflects our dedication to delivering scalable, secure, and future-ready technology solutions.
                  </p>

                  {/* Quote */}
                  <div className="pt-2">
                    <p className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#111111] leading-snug">
                      "Innovation begins with vision, but success comes from execution."
                    </p>
                  </div>
                </div>

                {/* RIGHT COLUMN: ~25-28% width */}
                <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-left">
                  {/* Director Image with Image Reveal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: easeOutCubic }}
                    className="w-full max-w-[355px] overflow-hidden rounded-[24px] shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
                  >
                    <LazyImage
                      src="https://res.cloudinary.com/kf1uuvct/image/upload/v1789112962/SAIKRISHNA.png"
                      alt="Dr. Saikrishna Kauri"
                      className="w-full h-auto max-h-[535px] object-cover block transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </motion.div>

                  {/* Director Details Below Image */}
                  <div className="w-full max-w-[355px] pt-4 flex flex-col items-center lg:items-start">
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0B1B5E] tracking-tight">
                      Dr. Saikrishna Kauri
                    </h3>
                    <p className="text-sm sm:text-base lg:text-[17px] text-[#111111] font-medium mt-1">
                      Director, Galactix Solutions Pvt Ltd
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* ── SECTION 6: OUR CORE TEAM (STAGGERED CARDS & HOVER INTERACTIONS) ── */}
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1500px] mx-auto text-center">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: easeOutCubic }}
            >
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-bold text-[#2458F5] uppercase tracking-wider block text-center mb-2">
                OUR CORE TEAM
              </span>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#0B1B3F] text-center tracking-tight leading-[1.15]">
                The Minds Behind Our Mission
              </h2>

              {/* Short blue horizontal underline - Animated */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "68px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease: easeOutCubic }}
                className="mx-auto mt-4 mb-14 sm:mb-16"
                style={{
                  height: "6px",
                  backgroundColor: "#2458F5",
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            {/* 4 Team Cards - Staggered Reveal */}
            <motion.div
              variants={staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch"
            >
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white border border-[#E8E8E8] rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0px_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0px_16px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 hover:border-[#2458F5]/30 transition-all duration-300 ease-out h-full group"
                >
                  {/* Circular Profile Image */}
                  <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden shadow-sm border border-gray-100 mb-6 sm:mb-8 shrink-0">
                    <LazyImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-350 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Member Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3F] tracking-tight mb-1.5">
                    {member.name}
                  </h3>

                  {/* Designation / Role */}
                  <p className="text-base sm:text-lg font-semibold text-[#4F5260] mb-3 whitespace-pre-line">
                    {member.role}
                  </p>

                  {/* Content / Description directly below Designation */}
                  <p className="text-sm sm:text-[15px] leading-[1.55] text-[#505461] max-w-[280px] mx-auto">
                    {member.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Join Our Team Button - Micro interaction */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutCubic }}
              className="mt-12 sm:mt-16 flex justify-center"
            >
              <Link
                to="/careers"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-[14px] sm:rounded-[16px] border-2 border-[#2458F5] text-[#2458F5] font-bold text-base sm:text-lg hover:bg-[#2458F5] hover:text-white transition-all duration-250 hover:-translate-y-0.5 hover:shadow-md cursor-pointer group active:scale-95"
              >
                <span>Join Our Team</span>
                <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5 select-none">
                  →
                </span>
              </Link>
            </motion.div>

          </div>
        </section>

      </div>
    </Layout>
  );
}
