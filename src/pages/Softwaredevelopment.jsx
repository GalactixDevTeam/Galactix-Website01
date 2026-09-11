import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
const softwarehero = "https://res.cloudinary.com/kf1uuvct/image/upload/v1789111402/softwarehero.png";

// Tech Stack SVGs
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

import soft1 from "../assets/soft1.svg";
import soft2 from "../assets/soft2.svg";
import soft3 from "../assets/soft3.svg";
import softdev2 from "../assets/softdev2.svg";
import softdev4 from "../assets/softdev4.svg";
import twoIcon from "../assets/twoicon.svg";
import fiveIcon from "../assets/fiveicon.svg";
import fourIcon from "../assets/fouricon.svg";
import softstep1 from "../assets/softstep1.svg";
import softstep2 from "../assets/softstep2.svg";
import softstep3 from "../assets/softstep3.svg";
import softstep4 from "../assets/softstep4.svg";
import softstep5 from "../assets/softstep5.svg";
import Arrow from "../assets/cloud/Arrow.svg";
import softicon1 from "../assets/softicon1.svg";
import softicon2 from "../assets/softicon2.svg";
import softicon3 from "../assets/softicon3.svg";
import softicon4 from "../assets/softicon4.svg";

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

const softwareServices = [
  {
    title: "Web & Mobile Application Development",
    desc: "Responsive and scalable applications for modern businesses across web, iOS, Android, and cross-platform.",
    icon: softdev2,
    path: "/services/software-development/web-mobile-application-development",
  },
  {
    title: "Enterprise Application Development",
    desc: "Secure and scalable applications designed to support complex business operations.",
    icon: softdev4,
    path: "/services/software-development/enterprise-applications",
  },
  {
    title: "AI & Agentic AI Solutions",
    desc: "AI-powered automation, machine learning, multi-agent systems and intelligent workflows.",
    icon: twoIcon,
    path: "/services/software-development/ai-agentic-ai-solutions",
  },
  {
    title: "UI UX & Product Engineering",
    desc: "Human-centered design and product engineering that delivers exceptional user experiences.",
    icon: fiveIcon,
    path: "/services/software-development/ui-ux-design",
  },
  {
    title: "Cloud & Digital Infrastructure",
    desc: "Scalable cloud infrastructure, DevOps, and managed services for modern businesses.",
    icon: fourIcon,
    path: "/services/software-development/cloud-infrastructure",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand business requirements, users, and objectives.",
    icon: softstep1,
  },
  {
    number: "02",
    title: "Design",
    desc: "Define the user experience, architecture, and solution.",
    icon: softstep2,
  },
  {
    number: "03",
    title: "Develop",
    desc: "Build scalable and secure software using modern stacks.",
    icon: softstep3,
  },
  {
    number: "04",
    title: "Test",
    desc: "Ensure performance, security, reliability, and quality.",
    icon: softstep4,
  },
  {
    number: "05",
    title: "Deploy",
    desc: "Launch, monitor, and provide continuous support & optimization.",
    icon: softstep5,
  },
];

const whyPillars = [
  {
    title: "Scalable",
    desc: "Built to support evolving business needs.",
    icon: softicon1,
  },
  {
    title: "Secure",
    desc: "Security considered throughout the development lifecycle.",
    icon: softicon2,
  },
  {
    title: "Reliable",
    desc: "Focused on performance, stability, and maintainability.",
    icon: softicon3,
  },
  {
    title: "Flexible",
    desc: "Technology and architecture tailored around your requirements.",
    icon: softicon4,
  },
];

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

export default function SoftwareDevelopment() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="font-sans bg-white overflow-hidden text-gray-900">
        
        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Our Services", path: "/services" },
            { label: "Software Development" },
          ]}
          title="Software Development"
          description="Build reliable, scalable, and secure software tailored to your business requirements. From enterprise applications to web, mobile, and cloud solutions, Galactix delivers software designed for long-term growth."
          badges={[
            { icon: soft1, title: "Enterprise Ready", desc: "Built for real-world impact" },
            { icon: soft2, title: "Secure by Design", desc: "Your data, our priority" },
            { icon: soft3, title: "Scalable Solutions", desc: "Grow without limits" },
          ]}
          image={softwarehero}
          imageAlt="Software Development"
          imageClassName="rounded-2xl"
        />

        {/* Services (What We Do) Section */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xs sm:text-sm md:text-base text-blue-600 font-bold uppercase tracking-wider mb-2">
                What We Do
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">
                Software Development Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                End-to-end software development services to help you build, modernize, and scale your digital solutions.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-6 xl:gap-7"
            >
              {softwareServices.map((service, idx) => {
                const CardWrapper = service.path ? Link : "div";
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="h-full"
                  >
                    <CardWrapper
                      {...(service.path ? { to: service.path } : {})}
                      className="bg-white rounded-2xl p-6 sm:p-7 xl:p-8 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col items-start text-left h-full block group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#D2E4FE] flex items-center justify-center mb-5 sm:mb-6 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <img src={service.icon} alt={service.title} loading="lazy" decoding="async" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xs sm:text-sm md:text-base text-blue-600 font-bold uppercase tracking-wider mb-2">
                Our Approach
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">
                From Idea to Production
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A structured and collaborative approach to deliver high-quality software solutions.
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
                    {/* Arrow pointing to next step on large screens */}
                    {idx < 4 && (
                      <div className="hidden lg:flex absolute top-12 -right-[15%] xl:-right-[20%] w-8 lg:w-12 xl:w-16 items-center justify-center z-0 pointer-events-none opacity-60">
                        <img src={Arrow} alt="arrow" loading="lazy" decoding="async" className="w-full object-contain" />
                      </div>
                    )}
                    <span className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-4 sm:mb-6 ring-8 ring-white relative z-10 transition-transform duration-300 hover:scale-105 shadow-sm">
                      <img src={step.icon} alt={step.title} loading="lazy" decoding="async" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Galactix Section */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xs sm:text-sm md:text-base text-blue-600 font-bold uppercase tracking-wider mb-2">
                Why Galactix
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">
                Engineering With Purpose
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We combine technology, domain understanding, and engineering excellence to deliver solutions that create real value for your business.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {whyPillars.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 hover:scale-105 shrink-0">
                    <img src={feature.icon} alt={feature.title} loading="lazy" decoding="async" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 5. TECHNOLOGY: BUILT WITH MODERN TECHNOLOGY ── */}
        <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center mb-8 sm:mb-12 md:mb-14">
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#0825E8] uppercase block mb-2 sm:mb-3">
              TECHNOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#000000] tracking-tight">
              Built With Modern Technology
            </h2>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 items-center justify-center">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
              {techRow1.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-auto max-h-[30px] sm:max-h-[36px] md:max-h-[44px] lg:max-h-[50px] w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
              {techRow2.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-auto max-h-[26px] sm:max-h-[32px] md:max-h-[38px] lg:max-h-[44px] w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: easeOutCubic }}
            className="bg-[#07144F] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left shadow-xl"
          >
            <div className="w-full lg:w-2/3">
              <h3 className="text-blue-300 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3">
                Let's Build Together
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                Let's Build What's Next
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Have an idea, application, or legacy system that needs to be scaled? We're here to help you turn it into reality.
              </p>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-2 lg:mt-0">
              <Link
                to="/contact"
                className="bg-white text-gray-900 font-bold py-3 px-6 sm:py-3.5 sm:px-8 md:py-4 md:px-8 rounded-xl hover:bg-gray-100 transition-all active:scale-95 whitespace-nowrap w-full sm:w-auto text-center inline-block shadow-md text-sm sm:text-base"
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
