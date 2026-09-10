import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
import EnterpriseHeroImg from "../assets/enterprise/Enterprisehero.png";
import enterprise1 from "../assets/enterprise/enterprise1.svg";
import enterprise2 from "../assets/enterprise/enterprise2.svg";
import enterprise3 from "../assets/enterprise/enterprise3.svg";
import Arrow from "../assets/cloud/Arrow.svg";

import softstep1 from "../assets/softstep1.svg";
import softstep2 from "../assets/softstep2.svg";
import softstep5 from "../assets/softstep5.svg";
import softstep3 from "../assets/enterprise/enter1.svg";
import softstep4 from "../assets/enterprise/enter2.svg";
import entericon1 from "../assets/enterprise/entericon1.svg";
import entericon2 from "../assets/enterprise/entericon2.svg";
import entericon3 from "../assets/enterprise/entericon3.svg";
import entericon4 from "../assets/enterprise/entericon4.svg";
import entericon5 from "../assets/enterprise/entericon5.svg";
import entericon6 from "../assets/enterprise/entericon6.svg";

import enterpriseicon1 from "../assets/enterprise/enterpriseicon1.svg";
import enterpriseicon2 from "../assets/enterprise/enterpriseicon2.svg";
import enterpriseicon3 from "../assets/enterprise/enterpriseicon3.svg";
import enterpriseicon4 from "../assets/enterprise/enterpriseicon4.svg";
import enterpriseicon5 from "../assets/enterprise/enterpriseicon5.svg";
import enterpriseicon6 from "../assets/enterprise/enterpriseicon6.svg";

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

export default function EnterpriseApplications() {
  // Hero value badges
  const heroBadges = [
    {
      title: "Drive Operational Efficiency",
      subtitle: "Streamline processes",
      icon: enterprise1,
    },
    {
      title: "Built for Scale",
      subtitle: "Adapt and grow with ease",
      icon: enterprise2,
    },
    {
      title: "Industry Expertise",
      subtitle: "Solutions tailored to domain",
      icon: enterprise3,
    },
  ];

  // What We Do - Enterprise Application Services
  const servicesList = [
    {
      title: "Strategy & Consulting",
      desc: "Assess business needs, define the right technology roadmap, and build a transformation strategy.",
      icon: entericon1,
    },
    {
      title: "Custom Enterprise Solutions",
      desc: "Develop tailored applications that fit your unique business processes and goals.",
      icon: entericon2,
    },
    {
      title: "Enterprise Software Implementation",
      desc: "Plan, implement, and integrate solutions like ERP, CRM, HRMS, SCM, and more.",
      icon: entericon3,
    },
    {
      title: "Application Integration",
      desc: "Seamlessly integrate with existing systems, third-party tools, and cloud platforms.",
      icon: entericon4,
    },
    {
      title: "Modernization & Migration",
      desc: "Upgrade legacy applications to modern, scalable, and cloud-ready platforms.",
      icon: entericon5,
    },
    {
      title: "Support & Managed Services",
      desc: "Ensure smooth operations with continuous monitoring, support, and enhancements.",
      icon: entericon6,
    },
  ];

  // Key Use Cases
  const keyUseCases = [
    {
      title: "Process Automation",
      icon: enterpriseicon1,
    },
    {
      title: "Customer Relationship Management",
      icon: enterpriseicon2,
    },
    {
      title: "Finance & Accounting",
      icon: enterpriseicon3,
    },
    {
      title: "Human Resource Management",
      icon: enterpriseicon4,
    },
    {
      title: "Fraud Detection & Risk Analysis",
      icon: enterpriseicon5,
    },
    {
      title: "Data Management & Analysis",
      icon: enterpriseicon6,
    },
  ];

  // Our Approach
  const approachSteps = [
    {
      number: "01",
      title: "Discover",
      desc: "Understand your business goals, processes, and challenges.",
      icon: softstep1,
    },
    {
      number: "02",
      title: "Design",
      desc: "Create the solution architecture and define the roadmap.",
      icon: softstep2,
    },
    {
      number: "03",
      title: "Develop",
      desc: "Build and configure applications with best practices.",
      icon: softstep3,
    },
    {
      number: "04",
      title: "Validate",
      desc: "Test for performance, security, and compliance.",
      icon: softstep4,
    },
    {
      number: "05",
      title: "Deploy",
      desc: "Go live and ensure smooth adoption with ongoing support.",
      icon: softstep5,
    },
  ];

  // Why Galactix
  const whyGalactix = [
    {
      title: "Domain Expertise",
      desc: "Proven experience across industries and business functions.",
      icon: iconenter1,
    },
    {
      title: "Scalable Solutions",
      desc: "Built to support your current needs and future growth.",
      icon: iconenter2,
    },
    {
      title: "End-to-End Partnership",
      desc: "From strategy to support, we’re with you every step.",
      icon: iconenter3,
    },
    {
      title: "Measurable Outcomes",
      desc: "Solutions that drive real business value and ROI.",
      icon: iconenter4,
    },
  ];

  return (
    <Layout>
      <div className="font-sans bg-white overflow-hidden text-gray-900">

        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Our Services", path: "/services" },
            { label: "Software Development", path: "/services/software-development" },
            { label: "Enterprise Applications" },
          ]}
          title="Enterprise Applications"
          description="From automation to autonomous agents, we build AI-powered solutions that help you operate smarter, move faster, and achieve measurable outcomes."
          badges={heroBadges}
          image={EnterpriseHeroImg}
          imageAlt="Enterprise Applications"
          imageClassName="rounded-2xl drop-shadow-md"
        />

        {/* ── 2. WHAT WE DO: Enterprise Application Services ── */}
        <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1720px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#0825E8] tracking-widest uppercase block mb-2">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#000000] tracking-tight mb-4">
                Enterprise Application Services
              </h2>
              <p className="text-[19px] text-[#000000] max-w-5xl mx-auto leading-relaxed">
                End-to-end enterprise solutions designed to simplify complex operations and create measurable value.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {servicesList.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-8 border border-gray-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-start text-left"
                >
                  <div className="w-14 h-14 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-6 shrink-0">
                    <img src={service.icon} alt={service.title} className="object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-[#000000] mb-3">{service.title}</h3>
                  <p className="text-[#797E89] text-sm sm:text-base leading-relaxed font-regular">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 3. KEY USE CASES: Solving Real-World Business Challenges ── */}
        <section className="bg-gray-50/70 py-16 sm:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1720px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-14 sm:mb-18"
            >
              <span className="text-xs sm:text-sm font-bold text-[#0825E8] tracking-widest uppercase block mb-2">
                KEY USE CASES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#000000] tracking-tight mb-4">
                Solving Real-World Business Challenges
              </h2>
              <p className="text-base sm:text-lg text-[#000000] max-w-5xl mx-auto leading-relaxed">
                We help organizations across industries unlock value with powerful enterprise applications.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {keyUseCases.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    {typeof item.icon === "string" ? (
                      <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#000000] leading-snug px-1">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 4. OUR APPROACH: From Possibilities to Real Impact ── */}
        <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1720px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-14 sm:mb-18"
            >
              <span className="text-xs sm:text-sm font-bold text-[#0825E8] tracking-widest uppercase block mb-2">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#000000] tracking-tight mb-4">
                From Possibilities to Real Impact
              </h2>
              <p className="text-base sm:text-lg text-[#000000] max-w-3xl mx-auto leading-relaxed">
                A structured and pragmatic approach to ensure successful implementations.
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10"
              >
                {approachSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center relative"
                  >
                    {/* Arrow pointing to next step */}
                    {idx < 4 && (
                      <div className="hidden lg:flex absolute top-[4.5rem] left-[calc(50%+8rem)] w-[95px] items-center justify-center z-0">
                        <img src={Arrow} alt="arrow" className="w-full object-contain" />
                      </div>
                    )}
                    <span className="text-xl font-bold text-gray-900 mb-4">{step.number}</span>
                    <div className="w-16 h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-6 ring-8 ring-white relative z-10 transition-transform duration-300 hover:scale-105">
                      <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-base leading-snug px-2">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 5. WHY GALACTIX: A Trusted Partner for Enterprise Growth ── */}
        <section className="bg-gray-50/70 py-16 sm:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1720px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-14 sm:mb-18"
            >
              <span className="text-xs sm:text-sm font-bold text-[#0825E8] tracking-widest uppercase block mb-2">
                WHY GALACTIX
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#000000] tracking-tight mb-4">
                A Trusted Partner for Enterprise Growth
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {whyGalactix.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    {typeof feature.icon === "string" ? (
                      <img src={feature.icon} alt={feature.title} className="w-7 h-7 object-contain" />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2">{feature.title}</h3>
                  <p className="text-[#000000] text-sm leading-relaxed px-2">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 6. CTA SECTION ── */}
        <section className="py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: easeOutCubic }}
            className="bg-[#07144F] rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left shadow-2xl relative overflow-hidden"
          >
            <div className="w-full lg:w-3/4 relative z-10">
              <span className="text-[#93C5FD] font-semibold text-[14px] mb-3 block">
                LET'S BUILD A PARTNERSHIP
              </span>
              <h2 className="text-[42px] font-bold text-[#FFFFFF] mb-4 leading-tight">
                Transform Your Business with Enterprise Solutions.
              </h2>
              <p className="text-[#DBEAFE] text-base leading-relaxed">
                Discuss your goals with our experts and discover how Galactix can build enterprise applications tailored for your success.
              </p>
            </div>
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-end shrink-0 relative z-10">
              <Link
                to="/contact"
                className="bg-white text-[#0F172A] font-bold py-3.5 px-7 rounded-xl hover:bg-gray-100 transition-all active:scale-95 whitespace-nowrap text-center inline-block shadow-lg text-sm sm:text-base"
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
