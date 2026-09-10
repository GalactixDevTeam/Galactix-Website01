import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import LazyImage from "../components/LazyImage";
import ServiceHero from "../components/ServiceHero";
import labshero from "../assets/labshero.png";

// Service & Approach SVG Icons
import soft1 from "../assets/soft1.svg";
import soft2 from "../assets/soft2.svg";
import soft3 from "../assets/soft3.svg";
import labs1 from "../assets/labs1.svg";
import labs2 from "../assets/labs2.svg";
import labs3 from "../assets/labs3.svg";
import labs4 from "../assets/labs4.svg";
import labs5 from "../assets/labs5.svg";
import labs6 from "../assets/labs6.svg";
import fluentBrainCircuit from "../assets/fluent_brain-circuit-20-regular.svg";
import aiLabsIcon from "../assets/ai labs.svg";
import warRoomsIcon from "../assets/war rooms.svg";
import labsi1 from "../assets/labsi1.svg";
import labsi2 from "../assets/labsi2.svg";
import labsi3 from "../assets/labsi3.svg";
import labsi4 from "../assets/labsi4.svg";
import labsi5 from "../assets/labsi5.svg";
import labsi6 from "../assets/labsi6.svg";
import softstep1 from "../assets/softstep1.svg";
import softstep2 from "../assets/softstep2.svg";
import softstep3 from "../assets/softstep3.svg";
import softstep4 from "../assets/softstep4.svg";
import softstep5 from "../assets/softstep5.svg";
import Arrow from "../assets/cloud/Arrow.svg";
import labicon1 from "../assets/labicon1.svg";
import labicon2 from "../assets/labicon2.svg";
import labicon3 from "../assets/labicon3.svg";
import labicon4 from "../assets/labicon4.svg";

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
const labsServices = [
  {
    title: "Electronics Labs",
    desc: "Well-equipped electronics labs for hands-on design, testing, and prototyping.",
    icon: fluentBrainCircuit,
  },
  {
    title: "Simulation Labs",
    desc: "Advanced simulation environments for modeling, analysis, and real-world scenario training.",
    icon: labs2,
  },
  {
    title: "Tech Studios",
    desc: "Creative tech studios for content development, product showcases, and immersive learning.",
    icon: labs3,
  },
  {
    title: "Virtual Labs",
    desc: "Cloud-based and remote lab environments to enable research, learning, and collaboration.",
    icon: labs6,
  },
  {
    title: "AI Labs",
    desc: "High-performance infrastructure for AI research, development, and experimentation.",
    icon: aiLabsIcon,
  },
  {
    title: "War Rooms",
    desc: "Collaborative war rooms for strategy building, real-time problem solving, and innovation sprints.",
    icon: warRoomsIcon,
  },
];

// 2. Approach Steps
const approachSteps = [
  {
    number: "01",
    title: "Plan",
    desc: "Understand objectives, requirements, and use cases.",
    icon: softstep1,
  },
  {
    number: "02",
    title: "Design",
    desc: "Architect the solution with the right technologies and infrastructure.",
    icon: softstep2,
  },
  {
    number: "03",
    title: "Build",
    desc: "Develop, integrate, and deploy the environment or infrastructure.",
    icon: softstep3,
  },
  {
    number: "04",
    title: "Test",
    desc: "Validate performance, security, and reliability.",
    icon: softstep4,
  },
  {
    number: "05",
    title: "Operate",
    desc: "Provide ongoing support, monitoring, and continuous improvement.",
    icon: softstep5,
  },
];

// 3. Key Use Cases / Industries
const useCases = [
  {
    title: "Education & Research",
    icon: labsi1,
  },
  {
    title: "Defense & Government",
    icon: labsi2,
  },
  {
    title: "Industrial Automation",
    icon: labsi3,
  },
  {
    title: "Smart Cities",
    icon: labsi4,
  },
  {
    title: "Healthcare & Life Sciences",
    icon: labsi5,
  },
  {
    title: "Energy & Sustainability",
    icon: labsi6,
  },
];

// 4. Why Galactix Pillars
const whyPillars = [
  {
    title: "Domain Expertise",
    desc: "Deep experience across research, technology, and infrastructure projects.",
    icon: labicon1,
  },
  {
    title: "End-to-End Partner",
    desc: "From design and deployment to ongoing operations and support.",
    icon: labicon2,
  },
  {
    title: "Scalable Solutions",
    desc: "Built to grow with your research, operational, and mission needs.",
    icon: labicon3,
  },
  {
    title: "Real-World Impact",
    desc: "Enabling innovation that delivers measurable outcomes.",
    icon: labicon4,
  },
];

export default function LabsSmartInfrastructure() {
  return (
    <Layout>
      <div className="font-sans bg-white overflow-hidden text-gray-900">
        
        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Our Services", path: "/services" },
            { label: "Labs & Smart Infrastructure" },
          ]}
          title="Labs & Smart Infrastructure"
          description="From advanced research labs to smart infrastructure solutions, we design and build technology environments that accelerate innovation, research, and real-world impact."
          badges={[
            { icon: soft1, title: "Innovation Ready", desc: "Purpose-built for research" },
            { icon: soft2, title: "End-to-End Execution", desc: "Design, setup & operations" },
            { icon: soft3, title: "Trusted Expertise", desc: "Across industries" },
          ]}
          image={labshero}
          imageAlt="Labs & Smart Infrastructure"
          imageClassName="rounded-2xl"
        />

        {/* Services (What We Do) Section */}
        <section id="labs-what-we-do" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-24">
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
                Labs &amp; Smart Infrastructure Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Integrated solutions to design, build, and operate intelligent environments for research, development, and real-world applications.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
            >
              {labsServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col items-start text-left h-full group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#D2E4FE] flex items-center justify-center mb-5 sm:mb-6 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <LazyImage src={service.icon} alt={service.title} className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
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
                From Concept to Operational Readiness
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A structured approach to design, build, and support labs and smart infrastructure solutions.
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
                    <span className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-4 sm:mb-6 ring-8 ring-white relative z-10 transition-transform duration-300 hover:scale-105 shadow-sm">
                      <LazyImage src={step.icon} alt={step.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
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

        {/* Key Use Cases Section */}
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
                Key Use Cases
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">
                Enabling Innovation Across Industries
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our labs and smart infrastructure solutions support a wide range of applications.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 justify-items-center"
            >
              {useCases.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105 shrink-0">
                    <LazyImage src={item.icon} alt={item.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Galactix Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
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
                A Partner for Innovation
              </h2>
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
                    <LazyImage src={feature.icon} alt={feature.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
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
                Let's Build The Future Together
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                Build a Scalable, Secure Future
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get in touch with our team to discuss your cloud and infrastructure needs and explore how we can help your business grow.
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
