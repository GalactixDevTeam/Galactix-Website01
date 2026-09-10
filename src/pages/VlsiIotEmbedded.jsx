import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
import LazyImage from "../components/LazyImage";
import vlsiHeroImg from "../assets/VLSI/vlsihero.png";
import Arrow from "../assets/cloud/Arrow.svg";

import vlsi1 from "../assets/VLSI/vlsi1.svg";
import vlsi2 from "../assets/VLSI/vlsi2.svg";
import vlsi3 from "../assets/VLSI/vlsi3.svg";

import vlsione from "../assets/VLSI/vlsione.svg";
import vlsitwo from "../assets/VLSI/vlsitwo.svg";
import vlsithree from "../assets/VLSI/vlsithree.svg";
import vlsifour from "../assets/VLSI/vlsifour.svg";

import softstep1 from "../assets/softstep1.svg";
import softstep2 from "../assets/softstep2.svg";
import softstep5 from "../assets/softstep5.svg";
import softstep3 from "../assets/enterprise/enter1.svg";
import softstep4 from "../assets/enterprise/enter2.svg";

import vlsiicon1 from "../assets/VLSI/vlsiicon1.svg";
import vlsiicon2 from "../assets/VLSI/vlsiicon2.svg";
import vlsiicon3 from "../assets/VLSI/vlsiicon3.svg";
import vlsiicon4 from "../assets/VLSI/vlsiicon4.svg";
import vlsiicon5 from "../assets/VLSI/vlsiicon5.svg";
import vlsiicon6 from "../assets/VLSI/vlsiicon6.svg";

import iconenter1 from "../assets/enterprise/iconenter1.svg";
import iconenter2 from "../assets/enterprise/iconenter2.svg";
import iconenter3 from "../assets/enterprise/iconenter3.svg";
import iconenter4 from "../assets/enterprise/iconenter4.svg";

// Reusable easing and animations
const easeOutCubic = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutCubic },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function VlsiIotEmbedded() {
  // Hero value badges
  const heroBadges = [
    {
      title: "End-to-End Expertise",
      subtitle: "From chip concept to application",
      icon: vlsi1,
    },
    {
      title: "Innovation-Driven",
      subtitle: "Cutting-edge technologies",
      icon: vlsi2,
    },
    {
      title: "Industry Collaboration",
      subtitle: "Hands-on expertise across sectors",
      icon: vlsi3,
    },
  ];

  // What We Do / Our Expertise - 4 Core Services
  const servicesList = [
    {
      title: "VLSI Design & Development",
      desc: "Design, verification, and implementation of high-performance, low-power integrated circuits.",
      icon: vlsione,
    },
    {
      title: "IoT Solutions",
      desc: "End-to-end IoT product development with secure connectivity, edge processing, and cloud integration.",
      icon: vlsitwo,
    },
    {
      title: "Embedded Systems",
      desc: "Custom embedded solutions for real-time, high-reliability, and resource-constrained environments.",
      icon: vlsithree,
    },
    {
      title: "Electronics & Hardware Engineering",
      desc: "Complete electronics design, PCB development, prototyping, and hardware validation.",
      icon: vlsifour,
    },
  ];

  // Key Use Cases
  const keyUseCases = [
    {
      title: "Automotive & Mobility",
      icon: vlsiicon1,
    },
    {
      title: "Industrial Automation",
      icon: vlsiicon2,
    },
    {
      title: "Healthcare & Medical Devices",
      icon: vlsiicon3,
    },
    {
      title: "Agriculture & Environment",
      icon: vlsiicon4,
    },
    {
      title: "Smart Homes & Smart Cities",
      icon: vlsiicon5,
    },
    {
      title: "Aerospace & Defense",
      icon: vlsiicon6,
    },
  ];

  // Our Approach
  const approachSteps = [
    {
      number: "01",
      title: "Discover",
      desc: "Understand requirements, use cases, and technical feasibility.",
      icon: softstep1,
    },
    {
      number: "02",
      title: "Design",
      desc: "Architect optimal hardware and software solutions.",
      icon: softstep2,
    },
    {
      number: "03",
      title: "Develop",
      desc: "Build, integrate, and test with industry best practices.",
      icon: softstep3,
    },
    {
      number: "04",
      title: "Validate",
      desc: "Ensure performance, reliability, and compliance.",
      icon: softstep4,
    },
    {
      number: "05",
      title: "Deploy",
      desc: "Support deployment, scaling, and lifecycle management.",
      icon: softstep5,
    },
  ];

  // Why Galactix
  const whyGalactix = [
    {
      title: "Domain Expertise",
      desc: "Experienced team across VLSI, embedded, and IoT technologies.",
      icon: iconenter1,
    },
    {
      title: "Customized Solutions",
      desc: "Tailored to your application and industry needs.",
      icon: iconenter2,
    },
    {
      title: "End-to-End Support",
      desc: "From concept to commercialization.",
      icon: iconenter3,
    },
    {
      title: "Future-Ready Innovation",
      desc: "Focused on next-generation technologies and real-world impact.",
      icon: iconenter4,
    },
  ];

  return (
    <Layout>
      <div className="font-sans bg-white overflow-hidden text-gray-900">

        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Our Services", path: "/services" },
            { label: "VLSI, IoT & Embedded" },
          ]}
          title="VLSI, IoT & Embedded"
          description="From silicon to intelligent systems, we design and build next-generation hardware and embedded solutions for a connected, smarter world."
          badges={heroBadges}
          image={vlsiHeroImg}
          imageAlt="VLSI, IoT & Embedded"
          imageClassName="rounded-2xl drop-shadow-md"
        />

        {/* ── 2. WHAT WE DO (DOMAINS) SECTION ── */}

        {/* ── 2. OUR EXPERTISE: VLSI, IoT & Embedded Services ── */}
        <section id="vlsi-what-we-do" className="bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100 scroll-mt-24">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1720px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: easeOutCubic }}
                className="text-xs sm:text-sm md:text-base font-semibold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3"
              >
                OUR EXPERTISE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08, ease: easeOutCubic }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6"
              >
                VLSI, IoT &amp; Embedded Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16, ease: easeOutCubic }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#454650] max-w-4xl mx-auto leading-relaxed"
              >
                Integrated hardware and software expertise to bring intelligent ideas to life.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-[1520px] mx-auto"
            >
              {servicesList.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25, ease: easeOutCubic },
                  }}
                  className="group bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E2E8F0] hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 text-left h-full cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-[#EBF3FF] group-hover:bg-[#DCEBFE] flex items-center justify-center shrink-0 transition-colors duration-300"
                  >
                    {typeof service.icon === "string" ? (
                      <LazyImage
                        src={service.icon}
                        alt={service.title}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      service.icon
                    )}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#000000] group-hover:text-[#0825E8] mb-2 leading-snug transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 3. KEY USE CASES: Powering Innovation Across Industries ── */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3">
                KEY USE CASES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6">
                Powering Innovation Across Industries
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#454650] max-w-4xl mx-auto leading-relaxed">
                Our VLSI, IoT and Embedded solutions enable real-world impact in diverse domains.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 justify-items-center"
            >
              {keyUseCases.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    {typeof item.icon === "string" ? (
                      <LazyImage src={item.icon} alt={item.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#000000] leading-snug">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 4. OUR APPROACH: From Concept to Connected Solutions ── */}
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6">
                From Concept to Connected Solutions
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#454650] max-w-4xl mx-auto leading-relaxed">
                A structured and collaborative approach to deliver reliable and scalable systems.
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 relative z-10"
              >
                {approachSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center relative px-2"
                  >
                    {/* Arrow pointing to next step */}
                    {idx < 4 && (
                      <div className="hidden lg:flex absolute top-12 -right-[15%] xl:-right-[20%] w-8 lg:w-12 xl:w-16 items-center justify-center z-0 pointer-events-none opacity-60">
                        <LazyImage src={Arrow} alt="arrow" className="w-full object-contain" />
                      </div>
                    )}
                    <span className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{step.number}</span>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-4 sm:mb-6 ring-8 ring-white relative z-10 transition-transform duration-300 hover:scale-105 shadow-sm">
                      <LazyImage src={step.icon} alt={step.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 5. WHY GALACTIX: Engineering a Smarter Tomorrow ── */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3">
                WHY GALACTIX
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] tracking-tight mb-3 sm:mb-4 md:mb-6">
                Engineering a Smarter Tomorrow
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {whyGalactix.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    {typeof feature.icon === "string" ? (
                      <LazyImage src={feature.icon} alt={feature.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 6. CTA SECTION ── */}
        <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: easeOutCubic }}
            className="bg-[#07144F] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left shadow-xl"
          >
            <div className="w-full lg:w-2/3">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#93C5FD] uppercase mb-2 sm:mb-3 block">
                LET'S BUILD WHAT'S NEXT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
                Turn Hardware Ideas Into Real-World Impact.
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Partner with Galactix to design and develop VLSI, IoT and embedded solutions for a smarter, more connected future.
              </p>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-2 lg:mt-0">
              <Link
                to="/contact"
                className="bg-white text-[#0F172A] font-bold py-3 px-6 sm:py-3.5 sm:px-8 md:py-4 md:px-8 rounded-xl hover:bg-gray-100 transition-all active:scale-95 whitespace-nowrap text-center inline-block shadow-md text-sm sm:text-base w-full sm:w-auto"
              >
                Start a Conversation →
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </Layout>
  );
}
