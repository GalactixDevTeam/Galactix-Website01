import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Cpu,
  RefreshCw,
  BarChart3,
  Code2,
  Cloud,
  Layout as LayoutIcon,
  Settings,
  Search,
  Compass,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Layout from "../components/Layout";
const servicesHero = "https://res.cloudinary.com/kf1uuvct/image/upload/v1789120827/services-hero.png";
import serviceOne from "../assets/serviceone.svg";
import serviceTwo from "../assets/servicetwo.svg";
import serviceThree from "../assets/servicethree.svg";
import softwareIcon from "../assets/boxicons_code.svg";
import cyberIcon from "../assets/CYBEER.svg";
import chipIcon from "../assets/heroicons-outline_chip.svg";
import researchIcon from "../assets/research and innovation.svg";
import trainingIcon from "../assets/training and dev.svg";
import vlsiIcon from "../assets/vlsi.svg";
import delivery1 from "../assets/delivery1.svg";
import delivery2 from "../assets/delivery2.svg";
import delivery3 from "../assets/delivery3.svg";
import delivery4 from "../assets/delivery4.svg";
import servicecta from "../assets/servicecta.png";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

import tech1 from "../assets/tech1.svg";
import tech2 from "../assets/tech2.svg";
import tech3 from "../assets/tech3.svg";
import tech4 from "../assets/tech4.svg";
import tech5 from "../assets/tech5.svg";
import tech6 from "../assets/tech6.svg";
import tech7 from "../assets/tech7.svg";
import tech8 from "../assets/tech8.svg";
import tech9 from "../assets/tech9.svg";
import tech10 from "../assets/tech10.svg";
import tech11 from "../assets/tech11.svg";
import tech12 from "../assets/tech12.svg";
import tech13 from "../assets/tech13.svg";
import tech14 from "../assets/tech14.svg";
import tech15 from "../assets/tech15.svg";

// Technologies Data
const techRow1 = [
  { name: "Java", src: tech1 },
  { name: "Python", src: tech2 },
  { name: "React", src: tech3 },
  { name: "Node.js", src: tech4 },
  { name: "AWS", src: tech5 },
  { name: "Spring Boot", src: tech6 },
  { name: "PostgreSQL", src: tech7 },
  { name: "Docker", src: tech8 },
  { name: "TensorFlow", src: tech9 },
];

const techRow2 = [
  { name: "Flutter", src: tech10 },
  { name: "Kubernetes", src: tech11 },
  { name: "Kotlin", src: tech12 },
  { name: "Figma", src: tech13 },
  { name: "Angular", src: tech14 },
  { name: "Azure", src: tech15 },
];

const coreServices = [
  {
    title: "Software Development",
    desc: "Custom enterprise, web, mobile & cloud-native applications engineered for scale.",
    icon: softwareIcon,
    path: "/services/software-development",
  },
  {
    title: "Research & Innovation",
    desc: "Advanced research, emerging technologies, and innovative solutions that drive real-world impact.",
    icon: researchIcon,
    path: "/services/research-innovation",
  },
  {
    title: "Cybersecurity & Security Operations",
    desc: "Enterprise-grade security solutions designed to detect, respond to, and protect critical IT environments.",
    icon: cyberIcon,
    path: "/services/cybersecurity-security-operations",
  },
  {
    title: "Training & Development",
    desc: "Industry-focused training programs that build skills, strengthen capabilities, and prepare future-ready talent.",
    icon: trainingIcon,
    path: "/services/training-development",
  },
  {
    title: "Labs & Smart Infrastructure",
    desc: "AI labs, electronics labs, simulation environments, virtual labs and smart infrastructure solutions.",
    icon: chipIcon,
    path: "/services/labs-smart-infrastructure",
  },
  {
    title: "VLSI, IoT & Embedded",
    desc: "Smart VLSI, IoT, and embedded solutions engineered for connected and intelligent systems.",
    icon: vlsiIcon,
    path: "/services/vlsi-iot-embedded",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your business, challenges and objectives.",
    icon: delivery1,
    color: "bg-[#0047E4]",
    textColor: "text-[#0047E4]",
    shadow: "0 12px 28px -4px rgba(0, 71, 228, 0.45)",
  },
  {
    number: "02",
    title: "Design",
    desc: "We architect the right solution with scalability, security and efficiency.",
    icon: delivery2,
    color: "bg-[#2B66FE]",
    textColor: "text-[#2B66FE]",
    shadow: "0 12px 28px -4px rgba(43, 102, 254, 0.45)",
  },
  {
    number: "03",
    title: "Develop",
    desc: "Agile development with quality, testing and transparency.",
    icon: delivery3,
    color: "bg-[#6F7DBE]",
    textColor: "text-[#0047E4]",
    shadow: "0 12px 28px -4px rgba(111, 125, 190, 0.45)",
  },
  {
    number: "04",
    title: "Deliver & Scale",
    desc: "We deploy, support and help you scale with confidence.",
    icon: delivery4,
    color: "bg-[#981CA2]",
    textColor: "text-[#981CA2]",
    shadow: "0 12px 28px -4px rgba(152, 28, 162, 0.45)",
  },
];

// Hero Quotes Data (Rotates every 5s)
const heroQuotes = [
  {
    quote: "We don’t just build technology; we build solutions that create meaningful impact.",
    author: "Sri Pallabothu",
    role: "Founder & CEO",
    bgClass: "bg-[#0052B4]",
    shadow: "0 20px 45px -10px rgba(0, 82, 180, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.2)",
    iconColor: "text-[#38BDF8]",
  },
  {
    quote: "Innovation begins with vision, but success comes from execution.",
    author: "Dr. Saikrishna Kauri",
    role: "Director",
    bgClass: "bg-[#253BE5]",
    shadow: "0 20px 45px -10px rgba(37, 59, 229, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.2)",
    iconColor: "text-[#93C5FD]",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % heroQuotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="w-full bg-white text-gray-900 mt-10">
        {/* ── 1. HERO SECTION ── */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp}>
                <span className="text-[#0825E8] font-bold text-[18px] sm:text-[20px] tracking-tight block mb-3">
                  Our Services
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[30px] sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold text-[#000000] tracking-tight leading-[1.12] mb-5"
              >
                End-to-End Technology
                <br />
                Services That{" "}
                <span className="text-[#2238E8]">Drive Impact</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[#000000] text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl mb-10"
              >
                From strategy and engineering to deployment and support, we deliver intelligent, scalable, and future-ready solutions tailored to your business goals.
              </motion.p>

              {/* 3 Callout Cards Row with Vertical Dividers */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-3 pt-6 border-t border-gray-100"
              >
                {/* 1 */}
                <div className="flex flex-col items-start pr-0 md:pr-6 lg:pr-8 pb-6 md:pb-0 md:border-r border-gray-200">
                  <div className="flex items-center gap-3.5 mb-3">
                    <img
                      src={serviceOne}
                      alt="AI-Powered Solutions"
                      loading="lazy"
                      decoding="async"
                      className="object-contain shrink-0"
                    />
                    <h3 className="font-bold text-[15px] sm:text-[16px] text-[#0F172A] leading-tight">
                      AI-Powered
                      <br />
                      Solutions
                    </h3>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-[#576375] leading-relaxed">
                    Intelligent automation that accelerates growth.
                  </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col items-start px-0 md:px-6 lg:px-8 pb-6 md:pb-0 md:border-r border-gray-200">
                  <div className="flex items-center gap-3.5 mb-3">
                    <img
                      src={serviceTwo}
                      alt="Secure & Scalable"
                      loading="lazy"
                      decoding="async"
                      className="object-contain shrink-0"
                    />
                    <h3 className="font-bold text-[15px] sm:text-[16px] text-[#0F172A] leading-tight">
                      Secure &
                      <br />
                      Scalable
                    </h3>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-[#576375] leading-relaxed">
                    Enterprise-grade security built for scale.
                  </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col items-start pl-0 md:pl-6 lg:pl-8">
                  <div className="flex items-center gap-3.5 mb-3">
                    <img
                      src={serviceThree}
                      alt="Industry-Focused Delivery"
                      loading="lazy"
                      decoding="async"
                      className="object-contain shrink-0"
                    />
                    <h3 className="font-bold text-[15px] sm:text-[16px] text-[#0F172A] leading-tight">
                      Industry-
                      <br />
                      Focused Delivery
                    </h3>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-[#576375] leading-relaxed">
                    Domain expertise that delivers real outcomes.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image with Overlaid Quote Card */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0 pb-10 sm:pb-12 lg:pb-0"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-[630px]">
                {/* Hero Image with exact curved border-radius */}
                <div
                  className="w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden shadow-lg bg-gray-100 rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[84px]"
                  style={{ borderRadius: "24px 24px 24px 84px" }}
                >
                  <img
                    src={servicesHero}
                    alt="Galactix Solutions Technology Team"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[95%_center] rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[84px]"
                    style={{ borderRadius: "24px 24px 24px 84px" }}
                  />
                </div>

                {/* Auto-Rotating Quote Overlay Card (Card stays in place; color and text change smoothly) */}
                <div
                  className={`w-[280px] sm:w-[320px] absolute -bottom-8 -right-2 sm:-bottom-10 sm:-right-4 lg:-bottom-8 lg:-right-6 z-10 p-6 sm:p-7 rounded-[22px] shadow-2xl text-white transition-colors duration-700 ease-in-out ${heroQuotes[currentQuoteIndex].bgClass}`}
                  style={{
                    boxShadow: heroQuotes[currentQuoteIndex].shadow,
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuoteIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      {/* Quote SVG Icon */}
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${heroQuotes[currentQuoteIndex].iconColor} mb-3 opacity-95 transition-colors duration-500`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <p className="text-[13.5px] sm:text-[14.5px] font-medium leading-[1.45] text-white mb-4 min-h-[58px] sm:min-h-[64px] flex items-center">
                        "{heroQuotes[currentQuoteIndex].quote}"
                      </p>

                      <div>
                        <h4 className="font-bold text-[15px] text-white tracking-tight">
                          {heroQuotes[currentQuoteIndex].author}
                        </h4>
                        <p className="text-[12px] text-white/80 font-normal mt-0.5">
                          {heroQuotes[currentQuoteIndex].role}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. WHAT WE DO / OUR CORE SERVICES ── */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2563EB] uppercase block mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0F172A] tracking-tight mb-4">
              Our Core Services
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              We combine deep technology expertise with industry knowledge to build solutions that are innovative, reliable, and future-ready.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {coreServices.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  onClick={() => service.path && navigate(service.path)}
                  className="bg-white border border-[#E2E8F0] rounded-[22px] p-7 sm:p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col justify-start cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F1F5FF] flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-[20px] text-[#000000] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-[16px] text-[#797E89] leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ── 3. OUR APPROACH / SERVICE DELIVERY APPROACH ── */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <motion.div
            className="bg-[#EDF5FE] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-blue-100/60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
                <span className="text-xs font-bold tracking-wider text-[#2563EB] uppercase mb-2 block">
                  OUR APPROACH
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F172A] tracking-tight leading-tight mb-3">
                  Our Service Delivery Approach
                </h2>
                <p className="text-[#64748B] text-sm sm:text-[15px] leading-relaxed mb-8">
                  A proven, agile, and client-centric approach to deliver high-quality solutions on time, every time.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#0B1528] hover:bg-[#1E293B] text-white px-6 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition active:scale-95 shadow-sm"
                >
                  Talk to Our Team <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Column: 4 Steps Roadmap */}
              <div className="lg:col-span-8 relative">
                {/* Dotted Connecting Line (Desktop) - starts at circle 1 center and ends at circle 4 center */}
                <div className="hidden lg:block absolute top-[42px] left-[12.5%] right-[12.5%] border-t-[1.5px] border-dashed border-[#6B62D099] z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
                  {deliverySteps.map((step, idx) => {
                    return (
                      <div key={idx} className="flex flex-col items-center text-center">
                        {/* Circle Icon Badge */}
                        <div
                          className={`w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] rounded-full ${step.color} text-white flex items-center justify-center relative z-10 mb-4 ring-2 ring-white/60 mx-auto transition-transform hover:scale-105 duration-200`}
                          style={{ boxShadow: step.shadow }}
                        >
                          <img
                            src={step.icon}
                            alt={step.title}
                            loading="lazy"
                            decoding="async"
                            className="object-contain"
                          />
                        </div>

                        {/* Step Number */}
                        <span className={`${step.textColor} font-bold text-[16px] sm:text-[17px] block mb-1`}>
                          {step.number}
                        </span>

                        {/* Step Title */}
                        <h3 className="font-bold text-[#000000] text-[16px] sm:text-[18px] mb-2 leading-snug">
                          {step.title}
                        </h3>

                        {/* Step Description */}
                        <p className="text-[12px] sm:text-[13.5px] text-[#454650] leading-[1.5] max-w-[210px] mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── 4. TECHNOLOGIES WE WORK WITH ── */}
        <section className="max-w-[1920px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[16px] font-bold tracking-[0.18em] text-[#2458F5] uppercase">
              TECHNOLOGIES WE WORK WITH
            </span>
          </div>

          <div className="flex flex-col gap-8 sm:gap-12 items-center justify-center">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-7 sm:gap-10 lg:gap-12 xl:gap-14">
              {techRow1.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-auto max-h-[42px] sm:max-h-[50px] w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-7 sm:gap-10 lg:gap-12 xl:gap-14">
              {techRow2.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-auto max-h-[38px] sm:max-h-[44px] w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CTA BANNER ── */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <motion.div
            className="bg-[#00033F] rounded-[28px] sm:rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-16 relative border border-blue-950/60 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-[12px] font-bold tracking-widest text-[#93C5FD] uppercase mb-3 block">
                  LET'S BUILD WHAT'S NEXT
                </span>

                <h2 className="text-[42px] font-semibold text-[#FFFFFF] tracking-tight leading-[1.3] mb-4 max-w-2xl">
                  Ready to Transform Your Business with Intelligent Solutions?
                </h2>

                <p className="text-[#FFFFFF] text-[18px] leading-relaxed mb-8 max-w-2xl">
                  Let's connect and create technology that drives growth, efficiency and measurable impact.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-white hover:bg-gray-100 text-[#07144F] px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition active:scale-95 shadow-md"
                  >
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-transparent hover:bg-white/10 text-white border border-white/25 px-6 py-3.5 rounded-xl font-semibold text-sm transition active:scale-95"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>

              {/* Right Column: 3D Holographic Tech Cube Graphic */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/3] flex items-center justify-center">
                  <img
                    src={servicecta}
                    alt="Galactix Services Call to Action"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}