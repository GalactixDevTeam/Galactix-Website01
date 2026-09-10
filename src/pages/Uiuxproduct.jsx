import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
import Uiuxhero from "../assets/Uiuxhero.png";

// Service & Approach SVG Icons
import soft1 from "../assets/soft1.svg";
import soft2 from "../assets/soft2.svg";
import uiux1 from "../assets/uiux1.svg";
import uiux2 from "../assets/uiux2.svg";
import uiux3 from "../assets/uiux3.svg";
import uiux4 from "../assets/uiux4.svg";
import uiux5 from "../assets/uiux5.svg";
import uiux6 from "../assets/uiux6.svg";
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

const uiuxServices = [
  {
    title: "UI/UX Design",
    desc: "Intuitive and engaging user interfaces designed for seamless experiences.",
    icon: uiux1,
  },
  {
    title: "Product Engineering",
    desc: "End-to-end product development from concept to deployment.",
    icon: uiux2,
  },
  {
    title: "Product Strategy",
    desc: "Turn ideas into successful products with user insights and market understanding.",
    icon: uiux3,
  },
  {
    title: "Digital Experience Design",
    desc: "Consistent and accessible experiences across web, mobile, and emerging platforms.",
    icon: uiux4,
  },
  {
    title: "Design Systems",
    desc: "Scalable design systems for consistent and efficient product development.",
    icon: uiux5,
  },
  {
    title: "Product Modernization",
    desc: "Refine and transform existing products with modern design and technology.",
    icon: uiux6,
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand users, business goals, and opportunities.",
    icon: softstep1,
  },
  {
    number: "02",
    title: "Design",
    desc: "Create intuitive experiences and validate with users.",
    icon: softstep2,
  },
  {
    number: "03",
    title: "Develop",
    desc: "Build scalable and high performance solutions.",
    icon: softstep3,
  },
  {
    number: "04",
    title: "Test",
    desc: "Validate usability, performance, and accessibility.",
    icon: softstep4,
  },
  {
    number: "05",
    title: "Deploy & Improve",
    desc: "Launch, measure impact, and continuously enhance.",
    icon: softstep5,
  },
];

const whyPillars = [
  {
    title: "User-Centric Mindset",
    desc: "People at the center of every solution.",
    icon: softicon1,
  },
  {
    title: "Design + Engineering",
    desc: "Seamless collaboration from concept to code.",
    icon: softicon2,
  },
  {
    title: "Business Focused",
    desc: "Products aligned with your business goals.",
    icon: softicon3,
  },
  {
    title: "Long-Term Partnership",
    desc: "Support beyond launch to help you grow.",
    icon: softicon4,
  },
];

export default function UiuxProduct() {
  return (
    <Layout>
      <div className="font-sans bg-white overflow-hidden text-gray-900">
        
        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Our Services", path: "/services" },
            { label: "Software Development", path: "/services/software-development" },
            { label: "UI UX & Product Engineering" },
          ]}
          title="UI UX & Product Engineering"
          description="We design and engineer digital products that are intuitive, accessible, and built for real users — combining design thinking, technology, and business strategy."
          badges={[
            { icon: soft1, title: "User-Centric", desc: "Design for real people" },
            { icon: soft2, title: "End-to-End Support", desc: "From concept to launch" },
          ]}
          image={Uiuxhero}
          imageAlt="UI UX & Product Engineering"
          imageClassName="rounded-2xl"
        />

        {/* Services (What We Do) Section */}

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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UI/UX &amp; Product Engineering Services</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                We help businesses design, build, and scale digital products through user-centered design and engineering.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {uiuxServices.map((service, idx) => (
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">From Insight to Impact</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                A collaborative and iterative approach to create meaningful digital products.
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Design. Engineering. Real Outcomes.</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {whyPillars.map((feature, idx) => (
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Let's Design What's Next</h2>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                  Have a product idea or looking to improve an existing experience? We're here to help you turn it into reality.
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
