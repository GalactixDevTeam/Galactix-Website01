import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
import LazyImage from "../components/LazyImage";

// Hero Assets
import us1 from "../assets/us Training/us1.svg";
import us2 from "../assets/us Training/us2.png";
import us3 from "../assets/us Training/us3.svg";
import us4 from "../assets/us Training/us4.svg";

// Expertise Assets
import us6 from "../assets/us Training/us6.svg";
import us7 from "../assets/us Training/us7.svg";
import us8 from "../assets/us Training/us8.svg";
import us9 from "../assets/us Training/us9.svg";

// Live Sessions Assets
import us10 from "../assets/us Training/us10.png";
import us11 from "../assets/us Training/us11.png";
import us12 from "../assets/us Training/us12.png";
import us13 from "../assets/us Training/us13.png";

// Counsellor & Why Choose Assets
import us14 from "../assets/us Training/us14.svg";
import us15 from "../assets/us Training/us15.svg";
import us16 from "../assets/us Training/us16.svg";
import us17 from "../assets/us Training/us17.svg";
import us18 from "../assets/us Training/us18.svg";
import us19 from "../assets/us Training/us19.svg";
import us20 from "../assets/us Training/us20.svg";
import us21 from "../assets/us Training/us21.svg";
import us22 from "../assets/us Training/us22.png";
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

const expertiseList = [
  {
    title: "Cybersecurity",
    desc: "Build practical cybersecurity skills with industry-focused training in Okta, IAM, Saviynt, PingFederate, SailPoint, and CyberArk.",
    icon: us6,
    items: [
      "Identity & Access Management",
      "Okta, Saviynt & PingFederate",
      "SailPoint & Identity Governance",
      "CyberArk",
    ],
  },
  {
    title: "CrowdStrike",
    desc: "Get hands-on experience with CrowdStrike for modern endpoint protection and threat detection.",
    icon: us7,
    items: ["Endpoint Security", "Threat Hunting", "Incident Response", "Real-world Use Cases"],
  },
  {
    title: "DevOps",
    desc: "Learn modern DevOps practices, tools, and cloud platforms to build, deploy, and manage applications at scale.",
    icon: us8,
    items: ["CI/CD Pipelines", "AWS / Azure Integration", "Containerization (Docker, Kubernetes)", "Infrastructure as Code"],
  },
  {
    title: "Networking",
    desc: "Build a strong foundation in networking concepts, configuration, and troubleshooting for enterprise environments.",
    icon: us9,
    items: ["Network Fundamentals", "Routing & Switching", "Security & VPN", "Real-world Lab Practice"],
  }
];

const guidanceList = [
  { title: "Get Program Guidance", desc: "Understand course details and career paths", icon: us15 },
  { title: "Plan Your Learning", desc: "Get help with schedules and enrollment", icon: us16 },
  { title: "Ask Your Questions", desc: "One-on-one support from our training counsellor", icon: us17 },
  { title: "Ongoing Support", desc: "From enrollment to completion", icon: us18 },
];

const whyFeatures = [
  { title: "Industry-Relevant Skills", desc: "Learn technologies that employers value", icon: us21 },
  { title: "Expert-Led Training", desc: "Live sessions with real-world experts", icon: us20 },
  { title: "Hands-On Experience", desc: "Work on projects and practical labs", icon: us1 },
  { title: "Career Advancement", desc: "Build a strong foundation for internships and global opportunities", icon: us4 },
];

export default function USTrainings() {
  return (
    <Layout>
      <div className="w-full bg-white text-gray-900 font-sans overflow-x-hidden">

        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Our Services", path: "/services" },
            { label: "Training & Development", path: "/services/training-development" },
            { label: "US Trainings" },
          ]}
          title="US Training Programs"
          description="Specialized training programs for US-based students, focusing on in-demand technologies, hands-on learning, and real-world applications."
          badges={[
            { icon: us1, title: "Industry-Relevant Curriculum", desc: "Aligned with US job market needs" },
            { icon: us3, title: "Live Interactive Sessions", desc: "Learn from experts" },
            { icon: us4, title: "Hands-On Projects", desc: "Support for job opportunities" },
          ]}
          image={us2}
          imageAlt="US Training Programs"
          imageClassName="rounded-2xl"
        />

        {/* 2. OUR EXPERTISE */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutCubic }}
            className="text-center mb-12 md:mb-16"
          >
            <h3 className="text-sm md:text-[15px] text-[#2458F5] font-bold uppercase tracking-[0.1em] mb-4">Our Expertise</h3>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 mb-6">Specialized Training in In-Demand Technologies</h2>
            <p className="text-base md:text-[19px] text-gray-600 max-w-4xl mx-auto">
              Integrated hardware and software expertise to bring intelligent ideas to life.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {expertiseList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-sm cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-[#F4F7FF] flex items-center justify-center mb-6">
                  <LazyImage src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#EEF4FF] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#2458F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-[14px] leading-snug">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. LIVE TRAINING SESSIONS */}
        <section className="bg-[#F8FBFF] py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutCubic }}
            className="text-center mb-12 md:mb-16"
          >
            <h3 className="text-sm md:text-[15px] text-[#2458F5] font-bold uppercase tracking-[0.1em] mb-4">Real Learning. Real Sessions.</h3>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 mb-6">Glimpses from Our Live Training Sessions</h2>
            <p className="text-base md:text-[19px] text-gray-600 max-w-4xl mx-auto">
              Interactive online sessions with expert trainers and real-time learning environments.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[us10, us11, us12].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="flex items-center justify-center h-full min-h-[220px] cursor-pointer"
              >
                <LazyImage src={imgSrc} alt="Live Training Session" className="w-full h-auto object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4. TRAINING COUNSELLOR */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: easeOutCubic }}
              className="xl:w-7/12 w-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 sm:gap-10"
            >
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 flex items-center justify-center">
                <LazyImage src={us22} alt="Sony Priya Adepu" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-center sm:items-start pt-2 flex-grow">
                <span className="text-[#2458F5] text-[13px] font-bold uppercase tracking-wider mb-2 block">Training Counsellor</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Sony Priya Adepu</h2>
                <h3 className="text-[17px] font-semibold text-gray-800 mb-3">Your Guide to a Successful Learning Journey</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-5">
                  Get personalized guidance on training programs, schedules, prerequisites, and career opportunities. Sony Priya is here to help you choose the right path and make the most of your learning experience.
                </p>

                {/* Contact Information */}
                <div className="flex flex-col gap-2.5 mb-6 text-sm">
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <Phone className="w-4 h-4 text-[#0852F6] shrink-0" />
                    <div className="flex items-center flex-wrap gap-1.5 font-medium">
                      <a href="tel:+919966119494" className="hover:text-[#0852F6] transition-colors">
                        +91- 9966119494
                      </a>
                      <span className="text-gray-400">|</span>
                      <a href="tel:+18186653346" className="hover:text-[#0852F6] transition-colors">
                        (818) 665-3346
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-700">
                    <Mail className="w-4 h-4 text-[#0852F6] shrink-0" />
                    <a
                      href="mailto:sonypriya@galactixsolutions.com"
                      className="font-medium hover:text-[#0852F6] transition-colors"
                    >
                      sonypriya@galactixsolutions.com
                    </a>
                  </div>
                </div>

                <a href="mailto:sonypriya@galactixsolutions.com" className="bg-[#0852F6] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-all active:scale-95 shadow-md w-fit">
                  Connect with Sony Priya <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: easeOutCubic }}
              className="xl:w-5/12 w-full bg-[#F8FBFF] rounded-3xl p-8 sm:p-10"
            >
              <div className="grid grid-cols-1 gap-8">
                {guidanceList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 flex items-center justify-center">
                      <LazyImage src={item.icon} alt={item.title} className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[16px] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-[14px] leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. WHY CHOOSE OUR US TRAINING */}
        <section className="bg-white py-8 pb-20 px-4 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: easeOutCubic }}
            className="text-center mb-16"
          >
            <h3 className="text-sm md:text-[14px] text-[#2458F5] font-bold uppercase tracking-[0.1em] mb-4">Why Choose Our US Training Programs</h3>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900">Designed For Your Success</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
          >
            {whyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4F7FF] flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-300">
                  <LazyImage src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-[19px] font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed max-w-[240px]">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 6. CTA BANNER */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 pb-16">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, ease: easeOutCubic }}
              className="bg-[#07144F] rounded-[32px] p-8 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left shadow-xl"
            >
              <div className="w-full md:w-2/3">
                <h3 className="text-[#93C5FD] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-4 block">Let's Build What's Next</h3>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mb-5 leading-tight">Join Our US Training Programs</h2>
                <p className="text-blue-100 text-base md:text-lg max-w-xl mx-auto md:mx-0">
                  Build in-demand skills, gain real-world experience, and accelerate your career in the global technology landscape.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <Link
                  to="/contact"
                  className="bg-white text-[#07144F] font-bold py-3.5 px-8 rounded-xl hover:bg-gray-50 transition-all active:scale-95 whitespace-nowrap shadow-lg flex items-center gap-2 text-[15px]"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
