import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";

// Cloud Assets
import cloudHero from "../assets/92b377d1940d1be1ccb5d1e35b795aec606baa33.png";
import cloud2 from "../assets/cloud/cloud2.svg";
import cloud3 from "../assets/cloud/cloud3.svg";
import cloud4 from "../assets/cloud/cloud4.svg";
import cloud5 from "../assets/cloud/cloud5.svg";
import cloud6 from "../assets/cloud/cloud6.svg";
import cloud7 from "../assets/cloud/cloud7.svg";
import cloud8 from "../assets/cloud/cloud8.svg";
import cloud9 from "../assets/cloud/cloud9.svg";
import cloud10 from "../assets/cloud/cloud10.svg";
import cloud11 from "../assets/cloud/cloud11.svg";
import cloud12 from "../assets/cloud/cloud12.svg";
import cloud13 from "../assets/cloud/cloud13.svg";
import cloud14 from "../assets/cloud/cloud14.svg";
import cloud15 from "../assets/cloud/cloud15.svg";
import Arrow from "../assets/cloud/Arrow.svg";
import cloud16 from "../assets/cloud/cloud16.svg";
import cloud17 from "../assets/cloud/cloud17.svg";
import cloud18 from "../assets/cloud/cloud18.svg";
import cloud19 from "../assets/cloud/cloud19.svg";

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

// 1. Services List
const cloudServices = [
  {
    title: "Cloud Strategy & Consulting",
    desc: "Assess your current environment and define the right cloud strategy for your business goals.",
    icon: cloud5,
  },
  {
    title: "Cloud Migration & Modernization",
    desc: "Migrate, modernize, and optimize your applications and infrastructure for the cloud.",
    icon: cloud6,
  },
  {
    title: "Infrastructure Automation",
    desc: "Implement automation and DevOps practices to improve speed, reliability, and efficiency.",
    icon: cloud7,
  },
  {
    title: "Managed Cloud Services",
    desc: "Proactive monitoring, management, and optimization of your cloud environments.",
    icon: cloud8,
  },
  {
    title: "Security & Compliance",
    desc: "Build secure, compliant infrastructure aligned with industry standards and regulations.",
    icon: cloud9,
  },
  {
    title: "High Availability & Scalability",
    desc: "Design resilient infrastructure that scales with your business needs.",
    icon: cloud10,
  },
];

// 2. Approach Steps
const approachSteps = [
  {
    number: "01",
    title: "Assess",
    desc: "Understand your current environment, requirements, and goals.",
    icon: cloud11,
  },
  {
    number: "02",
    title: "Design",
    desc: "Define the architecture, security, and implementation plan.",
    icon: cloud12,
  },
  {
    number: "03",
    title: "Implement",
    desc: "Deploy and configure cloud and infrastructure solutions.",
    icon: cloud13,
  },
  {
    number: "04",
    title: "Optimize",
    desc: "Monitor performance, optimize resources, and enhance efficiency.",
    icon: cloud14,
  },
  {
    number: "05",
    title: "Manage",
    desc: "Provide ongoing management, support, & continuous improvement.",
    icon: cloud15,
  },
];

// 3. Why Galactix Pillars
const whyFeatures = [
  {
    title: "Scalable",
    desc: "Built to support evolving business needs.",
    icon: cloud16,
  },
  {
    title: "Secure",
    desc: "Security considered throughout the development lifecycle.",
    icon: cloud17,
  },
  {
    title: "Reliable",
    desc: "Focused on performance, stability, and maintainability.",
    icon: cloud18,
  },
  {
    title: "Flexible",
    desc: "Technology and architecture selected around your requirements.",
    icon: cloud19,
  },
];

export default function CloudDigitalInfrastructure() {
  return (
    <Layout>
      <div className="font-sans bg-white overflow-hidden text-gray-900">
        
        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Our Services", path: "/services" },
            { label: "Software Development", path: "/services/software-development" },
            { label: "Cloud & Digital Infrastructure" },
          ]}
          title="Cloud & Digital Infrastructure"
          description="Scalable, secure, and high-performance cloud and digital infrastructure solutions to power your business today and tomorrow."
          badges={[
            { icon: cloud2, title: "Scalable Infrastructure", desc: "Built for growth" },
            { icon: cloud3, title: "Secure by Design", desc: "Trusted & compliant" },
            { icon: cloud4, title: "End-to-End Support", desc: "From strategy to ops" },
          ]}
          image={cloudHero}
          imageAlt="Cloud & Digital Infrastructure"
          imageClassName="rounded-2xl"
        />

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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud &amp; Digital Infrastructure Services</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                Comprehensive infrastructure solutions to help you modernize, scale, and operate efficiently.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {cloudServices.map((service, idx) => (
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

        {/* Our Approach Section */}
        <section className="py-20">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 md:mb-16"
            >
              <h3 className="text-base md:text-lg text-blue-600 font-bold uppercase tracking-wider mb-2">Our Approach</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">From Strategy to Continuous Operations</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                A structured approach to deliver reliable, secure, and scalable infrastructure.
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
        <section className="bg-gray-50 py-20">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 md:mb-16"
            >
              <h3 className="text-base md:text-lg text-blue-600 font-bold uppercase tracking-wider mb-2">Why Galactix</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Engineering With Purpose</h2>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Build a Scalable, Secure Future</h2>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                  Get in touch with our team to discuss your cloud and infrastructure needs and explore how we can help your business grow.
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
