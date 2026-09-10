import React from "react";
import { Link } from "react-router-dom";
import { Shield, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import LazyImage from "../components/LazyImage";
import ServiceHero from "../components/ServiceHero";
import cybersecurityHero from "../assets/cybersecurityhero.png";

// SVG Icons for WHAT WE DO section
import securityAssessmentIcon from "../assets/securit assessment.svg";
import securityArchitectureIcon from "../assets/security architecture.svg";
import siemIcon from "../assets/siem.svg";
import threatMonitoringIcon from "../assets/threat monitoring.svg";
import securityOperationsIcon from "../assets/secuirty operations.svg";
import complianceIcon from "../assets/compailance.svg";

// SVG Icons for OUR APPROACH section
import assessIcon from "../assets/search.svg";
import designIcon from "../assets/design pencil.svg";
import implementIcon from "../assets/implement.svg";
import monitorIcon from "../assets/carbon_satellite-radar.svg";
import respondIcon from "../assets/bi_lightning.svg";
import Arrow from "../assets/cloud/Arrow.svg";

// SVG Icons for KEY CAPABILITIES section
import deploymentIcon from "../assets/cloud deployment.svg";
import integrationIcon from "../assets/integration.svg";
import securityOperationsCapIcon from "../assets/Security Operations.svg";
import incidentResponseIcon from "../assets/Incident Response.svg";
import trainingIcon from "../assets/Training.svg";
import documentationIcon from "../assets/Documentation.svg";
import managedSupportIcon from "../assets/Managed Support.svg";

// SVG Icons for WHY GALACTIX section
import provenExpertiseIcon from "../assets/soft1.svg";
import tailoredSolutionsIcon from "../assets/softicon3.svg";
import proactiveApproachIcon from "../assets/softicon1.svg";
import longTermPartnershipIcon from "../assets/PARTNERSHIP.svg";

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

export default function CybersecuritySecurityOperations() {
  const heroFeatures = [
    {
      title: "Stronger Security Posture",
      desc: "Reduce risk and stay compliant",
      icon: Shield,
    },
    {
      title: "Proactive Protection",
      desc: "Detect and prevent threats",
      icon: Settings,
    },
    {
      title: "Trusted Expertise",
      desc: "Across industries",
      icon: Users,
    },
  ];

  const whatWeDoServices = [
    {
      title: "Security Assessment & Consulting",
      desc: "Assess current security posture, identify gaps, and build a roadmap for stronger defenses.",
      icon: securityAssessmentIcon,
    },
    {
      title: "Security Architecture & Design",
      desc: "Design secure and resilient infrastructure, networks, and security workflows.",
      icon: securityArchitectureIcon,
    },
    {
      title: "SIEM / EDR / NDR",
      desc: "Implement advanced monitoring and threat detection using leading security technologies.",
      icon: siemIcon,
    },
    {
      title: "Threat Monitoring & Incident Response",
      desc: "24×7 monitoring, threat hunting, incident triage, and rapid response.",
      icon: threatMonitoringIcon,
    },
    {
      title: "Security Operations Management",
      desc: "Managed security services to ensure continuous protection and operational efficiency.",
      icon: securityOperationsIcon,
    },
    {
      title: "Compliance & Governance",
      desc: "Support for regulatory compliance, risk management, and security governance.",
      icon: complianceIcon,
    },
  ];

  const ourApproachSteps = [
    {
      number: "01",
      title: "Assess",
      desc: "Understand your current security posture and risks.",
      icon: assessIcon,
    },
    {
      number: "02",
      title: "Design",
      desc: "Define the security architecture and use cases.",
      icon: designIcon,
    },
    {
      number: "03",
      title: "Implement",
      desc: "Deploy technologies and configure solutions.",
      icon: implementIcon,
    },
    {
      number: "04",
      title: "Monitor",
      desc: "24×7 monitoring and threat detection.",
      icon: monitorIcon,
    },
    {
      number: "05",
      title: "Respond",
      desc: "Investigate and respond to incidents quickly.",
      icon: respondIcon,
    },
  ];

  const keyCapabilities = [
    {
      title: "Deployment",
      icon: deploymentIcon,
      iconClass: "w-10 h-10 object-contain",
    },
    {
      title: "Integration",
      icon: integrationIcon,
      iconClass: "w-8 h-8 object-contain",
    },
    {
      title: "Security Operations",
      icon: securityOperationsCapIcon,
      iconClass: "w-8 h-8 object-contain",
    },
    {
      title: "Incident Response",
      icon: incidentResponseIcon,
      iconClass: "w-7 h-7 object-contain",
    },
    {
      title: "Training",
      icon: trainingIcon,
      iconClass: "w-8 h-8 object-contain",
    },
    {
      title: "Documentation",
      icon: documentationIcon,
      iconClass: "w-8 h-8 object-contain",
    },
    {
      title: "Managed Support",
      icon: managedSupportIcon,
      iconClass: "w-8 h-8 object-contain",
    },
  ];

  const whyGalactixPoints = [
    {
      title: "Proven Expertise",
      desc: "Experience across government and enterprise environments.",
      icon: provenExpertiseIcon,
    },
    {
      title: "Tailored Solutions",
      desc: "Designed around your unique business needs.",
      icon: tailoredSolutionsIcon,
    },
    {
      title: "Proactive Approach",
      desc: "Focus on prevention, detection, and continuous improvement.",
      icon: proactiveApproachIcon,
    },
    {
      title: "Long-Term Partnership",
      desc: "Ongoing support to keep your organization secure and resilient.",
      icon: longTermPartnershipIcon,
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
            { label: "Cybersecurity & Security Operations" },
          ]}
          title="Cybersecurity & Security Operations"
          description="Enterprise-grade cybersecurity solutions designed to protect what matters. We help you identify risks, strengthen defenses, and respond to threats with confidence."
          badges={heroFeatures}
          image={cybersecurityHero}
          imageAlt="Cybersecurity & Security Operations"
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
                Cybersecurity &amp; Security Operations Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive security solutions to detect, respond, and protect your organization.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
            >
              {whatWeDoServices.map((service, idx) => (
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
                A Structured Path to Stronger Security
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A proven approach to build, implement, and manage your security operations.
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
                {ourApproachSteps.map((step, idx) => (
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

        {/* Key Capabilities Section */}
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
                Key Capabilities
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">
                End-to-End Security Operations
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From technology deployment to ongoing managed support, we cover the full security lifecycle.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 justify-items-center"
            >
              {keyCapabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white transition-colors duration-200 w-full max-w-[150px]"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 hover:scale-105 shrink-0">
                    <LazyImage
                      src={item.icon}
                      alt={item.title}
                      className={item.iconClass || "w-7 h-7 sm:w-8 sm:h-8 object-contain"}
                    />
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
                A Trusted Partner in Cybersecurity
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {whyGalactixPoints.map((feature, idx) => (
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
                Let's Build A Safer Tomorrow
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                Strengthen Your Security Posture
              </h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get in touch with our team to discuss your cybersecurity needs and explore how we can help protect your organization.
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
