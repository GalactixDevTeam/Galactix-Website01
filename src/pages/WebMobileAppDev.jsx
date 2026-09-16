import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";

// Web & Mobile Assets
const web1 = "https://res.cloudinary.com/kf1uuvct/image/upload/v1789121595/web1.png";
import web2 from "../assets/web&mobile/web2.svg";
import web3 from "../assets/web&mobile/web3.svg";
import web4 from "../assets/web&mobile/web4.svg";

import web5 from "../assets/web&mobile/web5.svg";
import web6 from "../assets/web&mobile/web6.svg";
import web7 from "../assets/web&mobile/web7.svg";
import web8 from "../assets/web&mobile/web8.svg";
import web9 from "../assets/web&mobile/web9.svg";
import web10 from "../assets/web&mobile/web10.svg";

import web11 from "../assets/web&mobile/web11.svg";
import web12 from "../assets/web&mobile/web12.svg";
import web13 from "../assets/web&mobile/web13.svg";
import web14 from "../assets/web&mobile/web14.svg";
import web15 from "../assets/web&mobile/web15.svg";
import web16 from "../assets/web&mobile/web16.svg";

import web17 from "../assets/web&mobile/web17.svg";
import web18 from "../assets/web&mobile/web18.svg";
import web19 from "../assets/web&mobile/web19.svg";
import web20 from "../assets/web&mobile/web20.svg";
import web21 from "../assets/web&mobile/web21.svg";
import Arrow from "../assets/cloud/Arrow.svg";

import web22 from "../assets/web&mobile/web22.svg";
import web23 from "../assets/web&mobile/web23.svg";
import web24 from "../assets/web&mobile/web24.svg";
import web25 from "../assets/web&mobile/web25.svg";

const easeOutCubic = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
      staggerChildren: 0.08,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const stagger = staggerContainer;

const services = [
  {
    title: "Product Strategy & Consulting",
    desc: "Define the right product strategy, validate ideas, and build a clear roadmap.",
    icon: web5,
  },
  {
    title: "UI/UX Design",
    desc: "Create intuitive, engaging, and accessible designs that users love.",
    icon: web6,
  },
  {
    title: "Custom Application Development",
    desc: "Build scalable web and mobile applications tailored to your business needs.",
    icon: web7,
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform applications for iOS and Android.",
    icon: web8,
  },
  {
    title: "Web Application Development",
    desc: "High-performance, secure, and scalable web applications.",
    icon: web9,
  },
  {
    title: "Maintenance & Modernization",
    desc: "Ongoing support, feature enhancements, and legacy application modernization.",
    icon: web10,
  },
];

const capabilities = [
  { title: "E-commerce Platforms", icon: web11 },
  { title: "Customer Portals", icon: web12 },
  { title: "Enterprise Applications", icon: web13 },
  { title: "On-Demand Solutions", icon: web14 },
  { title: "Data-Driven Platforms", icon: web15 },
  { title: "Marketplace Solutions", icon: web16 },
];

const approachSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand your goals, users, and requirements.",
    icon: web17,
  },
  {
    number: "02",
    title: "Design",
    desc: "Create user-centric designs and define the solution architecture.",
    icon: web18,
  },
  {
    number: "03",
    title: "Develop",
    desc: "Build and test with agile methodologies and best practices.",
    icon: web19,
  },
  {
    number: "04",
    title: "Validate",
    desc: "Ensure quality, performance, security, and seamless user experience.",
    icon: web20,
  },
  {
    number: "05",
    title: "Deploy",
    desc: "Launch and scale with continuous monitoring and support.",
    icon: web21,
  },
];

const whyFeatures = [
  {
    title: "Proven Expertise",
    desc: "Experience across government and enterprise environments.",
    icon: web22,
  },
  {
    title: "Tailored Solutions",
    desc: "Designed around your unique business needs.",
    icon: web23,
  },
  {
    title: "Proactive Approach",
    desc: "Focus on prevention, detection, and continuous improvement.",
    icon: web24,
  },
  {
    title: "Long-Term Partnership",
    desc: "Ongoing support to keep your organization secure and resilient.",
    icon: web25,
  },
];

export default function WebMobileAppDev() {
  return (
    <Layout>
      <div className="w-full bg-white text-gray-900 font-sans overflow-x-hidden">

        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Our Services", path: "/services" },
            { label: "Software Development", path: "/services/software-development" },
            { label: "Web & Mobile Application Development" },
          ]}
          title="Web & Mobile Application Development"
          description="Modern, scalable, and user-centric applications that bring your ideas to life and drive real business value."
          badges={[
            { icon: web2, title: "User-Centric Design", desc: "Engaging experiences" },
            { icon: web3, title: "Scalable Architecture", desc: "Built for growth" },
            { icon: web4, title: "Cross-Platform", desc: "Web, iOS, Android" },
          ]}
          image={web1}
          imageAlt="Web & Mobile Application Development"
          imageClassName="rounded-[24px]"
        />

        {/* 2. CORE CAPABILITIES (WHAT WE DO) */}

        {/* Services (What We Do) Section */}
        <section className="bg-gray-50 py-20">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 md:mb-16"
            >
              <h3 className="text-base md:text-2xl text-blue-600 font-bold uppercase tracking-wider mb-2">What We Do</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Web &amp; Mobile Application Services</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                Full-cycle development services to design, build, and scale high-performance digital products.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-6 shrink-0">
                    <img src={service.icon} alt={service.title} className="w-7 h-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className="py-20">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 md:mb-16"
            >
              <h3 className="text-base md:text-lg text-blue-600 font-bold uppercase tracking-wider mb-2">Key Capabilities</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Solving Real-World Business Challenges</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                We build digital solutions for diverse industries and real business needs.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {capabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-105">
                    <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="bg-gray-50 py-20">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 md:mb-16"
            >
              <h3 className="text-base md:text-lg text-blue-600 font-bold uppercase tracking-wider mb-2">Our Approach</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">From Ideas to Impact</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                A collaborative and agile approach to deliver successful digital products.
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

        {/* Why Galactix Section */}
        <section className="py-20">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 md:mb-16"
            >
              <h3 className="text-base md:text-lg text-blue-600 font-bold uppercase tracking-wider mb-2">Why Galactix</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Your Partner in Digital Success</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {whyFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-105">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-base leading-snug px-2">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, ease: easeOutCubic }}
              className="bg-[#07144F] rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left shadow-xl"
            >
              <div className="w-full lg:w-2/3">
                <h3 className="text-blue-300 font-medium uppercase tracking-wider text-xs mb-3">Let's Build The Future Together</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Turn Your Ideas Into Powerful Digital Experiences</h2>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                  Partner with Galactix to design, develop, and scale web and mobile applications that make an impact.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-4 lg:mt-0">
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-gray-100 transition-all active:scale-95 whitespace-nowrap w-full sm:w-auto text-center inline-block shadow-md"
                >
                  Start a Conversation →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
