import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
import LazyImage from "../components/LazyImage";
import Arrow from "../assets/cloud/Arrow.svg";

// Research Assets
const research1 = "https://res.cloudinary.com/kf1uuvct/image/upload/v1789112391/research1.png";
import research2 from "../assets/Research/research2.svg";
import research3 from "../assets/Research/research3.svg";
import research4 from "../assets/Research/research4.svg";

import research5 from "../assets/Research/research5.svg";
import research6 from "../assets/Research/research6.svg";
import research7 from "../assets/Research/research7.svg";
import research8 from "../assets/Research/research8.svg";

import research9 from "../assets/Research/research9.svg";
import research10 from "../assets/Research/research10.svg";
import research11 from "../assets/Research/research11.svg";
import research12 from "../assets/Research/research12.svg";
import research13 from "../assets/Research/research13.svg";
import research14 from "../assets/Research/research14.svg";

// Approach Assets (from web&mobile)
import web17 from "../assets/web&mobile/web17.svg";
import web18 from "../assets/web&mobile/web18.svg";
import web19 from "../assets/web&mobile/web19.svg";
import web20 from "../assets/web&mobile/web20.svg";
import web21 from "../assets/web&mobile/web21.svg";

// Why Galactix Assets
import research15 from "../assets/Research/research15.svg";
import research16 from "../assets/Research/research16.svg";
import research17 from "../assets/Research/research17.svg";
import research18 from "../assets/Research/research18.svg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const domains = [
  {
    title: "GPS Tracking Systems",
    desc: "High-precision real-time location intelligence for fleet, assets, and logistics.",
    icon: research5,
  },
  {
    title: "Underwater Sensing",
    desc: "Advanced sonar and sensor arrays for sub-aquatic environment monitoring.",
    icon: research6,
  },
  {
    title: "Device Automation & Bio-Electronics",
    desc: "Smart automation systems fused with bio-signal processing capabilities.",
    icon: research8,
  },
  {
    title: "Multi-Cam Security Systems",
    desc: "AI-driven surveillance with real-time threat detection and analytics.",
    icon: research7,
  }
];

const useCases = [
  { title: "Defense & Surveillance", icon: research9 },
  { title: "Environmental Monitoring", icon: research10 },
  { title: "Marine Research & Exploration", icon: research11 },
  { title: "Logistics & Fleet Management", icon: research12 },
  { title: "Healthcare & Bio-Signals", icon: research13 },
  { title: "Smart Cities & Infrastructure", icon: research14 },
];

const approachSteps = [
  {
    number: "01",
    title: "Explore",
    desc: "Identify real-world problems and research opportunities.",
    icon: web17,
  },
  {
    number: "02",
    title: "Research",
    desc: "Conduct in-depth research and prototyping.",
    icon: web18,
  },
  {
    number: "03",
    title: "Develop",
    desc: "Build and test innovative solutions using advanced technologies.",
    icon: web19,
  },
  {
    number: "04",
    title: "Validate",
    desc: "Test for performance, reliability, and real-world applicability.",
    icon: web20,
  },
  {
    number: "05",
    title: "Scale",
    desc: "Scale and deploy solutions for measurable impact.",
    icon: web21,
  },
];

const whyFeatures = [
  {
    title: "Applied Research",
    desc: "Translating scientific breakthroughs into real solutions.",
    icon: research15,
  },
  {
    title: "Expert Team",
    desc: "Multidisciplinary researchers and engineers.",
    icon: research16,
  },
  {
    title: "Advanced Facilities",
    desc: "Access to state-of-the-art tools and testing environments.",
    icon: research17,
  },
  {
    title: "Impact-Driven",
    desc: "Focused on innovations that create a safer, smarter, and more connected world.",
    icon: research18,
  },
];

export default function ResearchInnovation() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="w-full bg-white text-gray-900 font-sans overflow-x-hidden">

        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Our Services", path: "/services" },
            { label: "Research & Innovation" },
          ]}
          title="Research & Innovation"
          description="Pushing the boundaries of technology through applied research and innovative solutions for a smarter, safer, and more connected world."
          badges={[
            { icon: research2, title: "Real-World Impact", desc: "From research to deployment" },
            { icon: research3, title: "Interdisciplinary Expertise", desc: "Across domains" },
            { icon: research4, title: "Innovation-Driven", desc: "Solving tomorrow's challenges" },
          ]}
          image={research1}
          imageAlt="Research & Innovation"
          imageClassName="rounded-2xl"
        />

        {/* 2. WHAT WE DO SECTION */}

        {/* 2. WHAT WE DO (Domains) */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.18em] text-[#0825E8] uppercase block mb-2 sm:mb-3">
                WHAT WE DO
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6">
                Research &amp; Innovation Domains
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#454650] leading-relaxed max-w-4xl mx-auto">
                We invest in applied research and develop cutting-edge solutions across high-impact domains.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 w-full"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-[#F3F6FE] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <LazyImage src={domain.icon} alt={domain.title} className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl md:text-[22px] text-[#000000] mb-2 leading-snug">
                      {domain.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#797E89] leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. KEY USE CASES */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-y border-gray-100">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.18em] text-[#0825E8] uppercase block mb-2 sm:mb-3">
                KEY USE CASES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6">
                Solving Real-World Challenges
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#454650] leading-relaxed max-w-4xl mx-auto">
                Our research and innovation initiatives address critical needs across industries and environments.
              </p>
            </div>
            
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 justify-items-center"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF1FF] flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105 shrink-0">
                    <LazyImage src={useCase.icon} alt={useCase.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#000000] text-xs sm:text-sm md:text-base leading-snug">
                    {useCase.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. OUR APPROACH */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.18em] text-[#0825E8] uppercase block mb-2 sm:mb-3">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6">
                From Ideas to Real-World Solutions
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#454650] leading-relaxed max-w-4xl mx-auto">
                A structured and agile approach to turn research into impactful technology.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 relative z-10"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {approachSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center relative px-2"
                >
                  {index < approachSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-12 -right-[15%] xl:-right-[20%] w-8 lg:w-12 xl:w-16 items-center justify-center z-0 pointer-events-none opacity-60">
                      <LazyImage src={Arrow} alt="arrow" className="w-full object-contain" />
                    </div>
                  )}
                  <span className="font-bold text-[#000000] text-lg sm:text-xl mb-3 sm:mb-4">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF1FF] border border-blue-100 flex items-center justify-center mb-4 sm:mb-6 ring-8 ring-white relative z-10 transition-transform duration-300 hover:scale-105 shadow-sm">
                    <LazyImage src={step.icon} alt={step.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#000000] text-lg sm:text-xl mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#454650] leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. WHY GALACTIX */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.18em] text-[#0825E8] uppercase block mb-2 sm:mb-3">
                WHY GALACTIX
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6">
                A Culture of Innovation
              </h2>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {whyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F3F6FE] flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 hover:scale-105 shrink-0">
                    <LazyImage src={feature.icon} alt={feature.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <h3 className="font-bold text-[#000000] text-lg sm:text-xl mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#454650] leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA BANNER CARD */}
            <motion.div
              className="bg-[#07144F] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full lg:w-2/3">
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#93C5FD] uppercase mb-2 sm:mb-3 block">
                  LET'S BUILD THE FUTURE TOGETHER
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
                  Innovating for a Smarter Tomorrow.
                </h2>
                <p className="text-[#DBEAFE] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Partner with Galactix to co-create innovative solutions that make a real difference.
                </p>
              </div>

              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-2 lg:mt-0">
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-[#07144F] py-3 px-6 sm:py-3.5 sm:px-8 md:py-4 md:px-8 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition active:scale-95 shadow-md cursor-pointer whitespace-nowrap w-full sm:w-auto"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
