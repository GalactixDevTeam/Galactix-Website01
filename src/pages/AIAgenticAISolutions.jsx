import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
const heroImg = "https://res.cloudinary.com/kf1uuvct/image/upload/v1789111965/4d9b47febc284c7ab0bbd97fc632e4096acf18af.png";
import businessImpactIcon from "../assets/business impact.svg";
import responsibleAiIcon from "../assets/responsible ai.svg";
import domainExpertiseIcon from "../assets/domain expertise.svg";

import aiStrategyIcon from "../assets/ai startegy.svg";
import intelligentAutomationIcon from "../assets/intelligent automation.svg";
import agenticAiSolutionIcon from "../assets/agentic ai solution.svg";
import dataAndAiIcon from "../assets/data and ai.svg";
import customAiIcon from "../assets/custom ai.svg";
import aiCloudIcon from "../assets/ai cloud.svg";

import intelligentAssistantIcon from "../assets/intelligent assistant.svg";
import documentIntelligenceIcon from "../assets/document intelligence.svg";
import customerIcon from "../assets/CUSTOMER.svg";

import discoverIcon from "../assets/discover.svg";
import designIcon from "../assets/design.svg";
import developIcon from "../assets/develop.svg";
import validateIcon from "../assets/validate.svg";
import deployIcon from "../assets/deploy.svg";
import Arrow from "../assets/cloud/Arrow.svg";

import practicalSolutionIcon from "../assets/practictal solution.svg";

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

export default function AIAgenticAISolutions() {
  const valuePoints = [
    {
      icon: businessImpactIcon,
      title: "Real Business Impact",
      desc: "From pilots to production",
    },
    {
      icon: responsibleAiIcon,
      title: "Responsible AI",
      desc: "Secure and ethical by design",
    },
    {
      icon: domainExpertiseIcon,
      title: "Domain Expertise",
      desc: "Across industries",
    },
  ];

  const whatWeDoServices = [
    {
      title: "AI Strategy & Consulting",
      desc: "Assess opportunities, define use cases, and build a roadmap for AI adoption.",
      icon: aiStrategyIcon,
    },
    {
      title: "Intelligent Automation",
      desc: "Automate complex processes using AI, machine learning, and agentic workflows.",
      icon: intelligentAutomationIcon,
    },
    {
      title: "Agentic AI Solutions",
      desc: "Design and deploy autonomous AI agents that can plan, reason, and take action.",
      icon: agenticAiSolutionIcon,
    },
    {
      title: "Data & AI Platforms",
      desc: "Build scalable data pipelines, AI infrastructure, and analytics platforms.",
      icon: dataAndAiIcon,
    },
    {
      title: "Custom AI/ML Solutions",
      desc: "Develop tailored machine learning and generative AI solutions for your business.",
      icon: customAiIcon,
    },
    {
      title: "AI Integration & Modernization",
      desc: "Integrate AI into existing systems and modernize legacy applications with intelligent capabilities.",
      icon: aiCloudIcon,
    },
  ];

  const keyUseCases = [
    {
      title: "Process Automation",
      icon: intelligentAutomationIcon,
    },
    {
      title: "Intelligent Assistants",
      icon: intelligentAssistantIcon,
    },
    {
      title: "Predictive Analytics",
      icon: businessImpactIcon,
    },
    {
      title: "Document Intelligence",
      icon: documentIntelligenceIcon,
    },
    {
      title: "Fraud Detection & Risk Analysis",
      icon: responsibleAiIcon,
    },
    {
      title: "Autonomous Agents",
      icon: customerIcon,
    },
  ];

  const ourApproachSteps = [
    {
      number: "01",
      title: "Discover",
      desc: "Understand your goals, data, and opportunities.",
      icon: discoverIcon,
    },
    {
      number: "02",
      title: "Design",
      desc: "Define the solution, architecture, and success metrics.",
      icon: designIcon,
    },
    {
      number: "03",
      title: "Develop",
      desc: "Build and train models or agents with your data.",
      icon: developIcon,
    },
    {
      number: "04",
      title: "Validate",
      desc: "Test for accuracy, safety, and business value.",
      icon: validateIcon,
    },
    {
      number: "05",
      title: "Deploy",
      desc: "Integrate into your environment with continuous monitoring.",
      icon: deployIcon,
    },
  ];

  const whyGalactixPoints = [
    {
      title: "Practical Solutions",
      desc: "Focused on real business outcomes.",
      icon: practicalSolutionIcon,
    },
    {
      title: "Responsible AI",
      desc: "Built with security, privacy, and ethics in mind.",
      icon: responsibleAiIcon,
    },
    {
      title: "Cross-Functional Expertise",
      desc: "AI, data, cloud and domain knowledge under one roof.",
      icon: customerIcon,
    },
    {
      title: "Long-Term Partnership",
      desc: "From initial use cases to enterprise-wide adoption.",
      icon: businessImpactIcon,
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
            { label: "AI & Agentic AI Solutions" },
          ]}
          title="AI & Agentic AI Solutions"
          description="From automation to autonomous agents, we build AI-powered solutions that help you operate smarter, move faster, and achieve measurable outcomes."
          badges={valuePoints}
          image={heroImg}
          imageAlt="AI & Agentic AI Solutions"
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI &amp; Agentic AI Services</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                End-to-end AI solutions designed to solve real business problems and create measurable value.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {whatWeDoServices.map((service, idx) => (
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

        {/* Key Use Cases Section */}
        <section className="py-20">
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOutCubic }}
              className="text-center mb-12 md:mb-16"
            >
              <h3 className="text-base md:text-lg text-blue-600 font-bold uppercase tracking-wider mb-2">Key Use Cases</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Solving Real-World Business Challenges</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                We help organizations across industries unlock value with practical AI applications.
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">From Possibilities to Real Impact</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
                A structured and pragmatic approach to ensure successful AI adoption.
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
                {ourApproachSteps.map((step, idx) => (
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">A Partner for Your AI Journey</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {whyGalactixPoints.map((feature, idx) => (
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
                <h3 className="text-blue-300 font-medium uppercase tracking-wider text-xs mb-3">Let's Build What's Next</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Turn AI into Real Business Value</h2>
                <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                  Explore how Galactix can help you design, build, and scale AI-driven solutions for your organization.
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
