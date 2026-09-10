import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "../components/Layout";
import ServiceHero from "../components/ServiceHero";
import LazyImage from "../components/LazyImage";
import trainingHero from "../assets/image 2044.png";
import graduationIcon from "../assets/lucide_graduation-cap.svg";
import codeIcon from "../assets/boxicons_code.svg";
import warRoomIcon from "../assets/war rooms.svg";
import practicalIcon from "../assets/80-20.svg";

import technicalSkillsIcon from "../assets/technical preference.svg";
import handsOnIcon from "../assets/handsondevelopment.svg";
import problemSolvingIcon from "../assets/problemsolving.svg";
import teamCollabIcon from "../assets/team collaboration.svg";
import industryPracticesIcon from "../assets/industrypractice.svg";
import projectDeliveryIcon from "../assets/project delivery.svg";

import learnIcon from "../assets/learn.svg";
import practiceIcon from "../assets/design pencil.svg";
import buildIcon from "../assets/carbon_build-image.svg";
import collaborateIcon from "../assets/collaborate.svg";
import deliverIcon from "../assets/softstep5.svg";
import arrowIcon from "../assets/cloud/Arrow.svg";

import industryAlignedIcon from "../assets/enterprise/iconenter1.svg";
import handsOnExpIcon from "../assets/enterprise/iconenter2.svg";
import projectExposureIcon from "../assets/enterprise/iconenter3.svg";
import collaborationIcon from "../assets/enterprise/iconenter4.svg";

const whatWeDoCards = [
  {
    title: "Industry-Oriented Training",
    desc: "Structured training programs focused on technologies, tools, and skills aligned with current industry requirements.",
    icon: graduationIcon,
  },
  {
    title: "Live Project-Based Learning",
    desc: "Move beyond theory by working on real-world projects and solving practical technical challenges.",
    icon: codeIcon,
  },
  {
    title: "War Room Collaboration",
    desc: "Learn through intensive team-based environments that encourage collaboration, problem-solving, communication, and decision-making.",
    icon: warRoomIcon,
  },
  {
    title: "80/20 Practical Learning Model",
    desc: "A learner-first approach with 80% practical execution and hands-on experience supported by 20% focused theoretical learning",
    icon: practicalIcon,
  },
];

const learningFocusItems = [
  {
    title: "Technical Skills",
    icon: technicalSkillsIcon,
  },
  {
    title: "Hands-On Development",
    icon: handsOnIcon,
  },
  {
    title: "Problem Solving",
    icon: problemSolvingIcon,
  },
  {
    title: "Team Collaboration",
    icon: teamCollabIcon,
  },
  {
    title: "Industry Practices",
    icon: industryPracticesIcon,
  },
  {
    title: "Project Delivery",
    icon: projectDeliveryIcon,
  },
];

const ourApproachSteps = [
  {
    number: "01",
    title: "Learn",
    desc: "Build strong foundations through focused, industry-relevant concepts.",
    icon: learnIcon,
  },
  {
    number: "02",
    title: "Practice",
    desc: "Apply knowledge through hands-on exercises and technical challenges.",
    icon: practiceIcon,
  },
  {
    number: "03",
    title: "Build",
    desc: "Work on live projects and develop practical solutions.",
    icon: buildIcon,
  },
  {
    number: "04",
    title: "Collaborate",
    desc: "Work in teams through War Room environments and real-world scenarios.",
    icon: collaborateIcon,
  },
  {
    number: "05",
    title: "Deliver",
    desc: "Build confidence in solving problems and delivering industry-ready outcomes.",
    icon: deliverIcon,
  },
];

const whyGalactixFeatures = [
  {
    title: "Industry-Aligned Learning",
    desc: "Training is designed around practical technologies, tools, and industry requirements.",
    icon: industryAlignedIcon,
  },
  {
    title: "Hands-On Experience",
    desc: "Learners spend more time building, testing, and solving than simply studying theory.",
    icon: handsOnExpIcon,
  },
  {
    title: "Real Project Exposure",
    desc: "Live projects provide experience with real development workflows and challenges.",
    icon: projectExposureIcon,
  },
  {
    title: "Collaborative Environment",
    desc: "War Room-based learning encourages teamwork, communication, and practical problem-solving.",
    icon: collaborationIcon,
  },
];

export default function TrainingDevelopment() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const easeOut = [0.16, 1, 0.3, 1];

  const leftContentVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const rightImageVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : 0.1,
        ease: easeOut,
      },
    },
  };

  const sectionHeadingVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOut,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOut,
      },
    },
  };

  const focusContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  };

  const focusItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOut,
      },
    },
  };

  const approachContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const approachItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOut,
      },
    },
  };

  const whyContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const whyItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOut,
      },
    },
  };

  return (
    <Layout>
      <div className="font-sans bg-white overflow-hidden text-gray-900">
        {/* ── 1. HERO SECTION ── */}
        <ServiceHero
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Our Services", path: "/services" },
            { label: "Training & Development" },
          ]}
          title="Training & Development"
          description="Industry-focused training designed to bridge the gap between academic learning and real-world technology, helping learners build practical skills, work on live projects, and become industry-ready."
          cta={{
            text: "Start Your Learning Journey →",
            path: "/services/training-development/us-trainings",
            className: "mt-4 sm:mt-5 md:mt-6",
          }}
          image={trainingHero}
          imageAlt="Training & Development"
          imageClassName="rounded-2xl drop-shadow-sm"
        />

        {/* ── 2. WHAT WE DO SECTION ── */}
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            {/* Centered Section Header */}
            <motion.div
              variants={sectionHeadingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3">
                WHAT WE DO
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4 md:mb-6">
                Training &amp; Development Programs
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                A practical, industry-aligned learning ecosystem designed to transform
                learners into confident technology professionals.
              </p>
            </motion.div>

            {/* 2 x 2 Cards Grid */}
            <motion.div
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-[1440px] mx-auto"
            >
              {whatWeDoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardItemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200/80 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-2xl bg-[#EBF3FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <LazyImage
                      src={card.icon}
                      alt={card.title}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col items-start text-left flex-1 min-w-0">
                    <h3 className="text-lg sm:text-[19px] md:text-xl font-bold text-gray-900 tracking-tight mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 3. LEARNING FOCUS SECTION ── */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            {/* Centered Section Header */}
            <motion.div
              variants={sectionHeadingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3">
                LEARNING FOCUS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4 md:mb-6">
                Learn. Build. Collaborate. Deliver.
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our training methodology focuses on developing both technical capability
                and professional confidence.
              </p>
            </motion.div>

            {/* 6 Focus Items Grid */}
            <motion.div
              variants={focusContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 justify-items-center max-w-[1440px] mx-auto"
            >
              {learningFocusItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={focusItemVariants}
                  className="flex flex-col items-center text-center group cursor-default p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full"
                >
                  {/* Icon above title */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EBF3FF] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <LazyImage
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 leading-snug group-hover:text-[#0825E8] transition-colors duration-250">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 4. OUR APPROACH SECTION ── */}
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            {/* Centered Section Header */}
            <motion.div
              variants={sectionHeadingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4 md:mb-6">
                From Learning to Industry Readiness
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                A structured learning journey designed to turn knowledge into practical capability.
              </p>
            </motion.div>

            {/* 5-Step Journey Horizontal Flow */}
            <div className="relative max-w-[1440px] mx-auto">
              <motion.div
                variants={approachContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 relative z-10"
              >
                {ourApproachSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={approachItemVariants}
                    className="flex flex-col items-center text-center relative group px-2"
                  >
                    {/* Connector Arrow (Desktop between step items) */}
                    {idx < 4 && (
                      <div className="hidden lg:flex absolute top-12 -right-[15%] xl:-right-[20%] w-8 lg:w-12 xl:w-16 items-center justify-center z-0 pointer-events-none opacity-60">
                        <LazyImage
                          src={arrowIcon}
                          alt=""
                          aria-hidden="true"
                          className="w-full object-contain"
                        />
                      </div>
                    )}

                    {/* Step Number */}
                    <span className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {step.number}
                    </span>

                    {/* Step Icon Container */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-4 sm:mb-6 ring-8 ring-white relative z-10 transition-transform duration-300 hover:scale-105 shadow-sm">
                      <LazyImage
                        src={step.icon}
                        alt={step.title}
                        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#0825E8] transition-colors duration-250">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto font-normal">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 5. WHY GALACTIX SECTION ── */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-100">
          <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            {/* Centered Section Header */}
            <motion.div
              variants={sectionHeadingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#0825E8] tracking-widest uppercase block mb-2 sm:mb-3">
                WHY GALACTIX
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4 md:mb-6">
                Training Designed Around Real-World Experience
              </h2>
            </motion.div>

            {/* 4 Feature Items Grid */}
            <motion.div
              variants={whyContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-[1440px] mx-auto"
            >
              {whyGalactixFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={whyItemVariants}
                  className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Icon inside circular container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D2E4FE] flex items-center justify-center mb-5 sm:mb-6 shrink-0 hover:scale-105 transition-transform duration-300">
                    <LazyImage
                      src={item.icon}
                      alt={item.title}
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-[#0825E8] transition-colors duration-250">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 6. US TRAINING PROGRAMS CTA SECTION ── */}
        <section className="bg-white w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left shadow-xl"
            style={{
              background: "linear-gradient(90deg, #01123E 0%, #052B8D 100%)",
            }}
          >
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <span className="text-xs sm:text-sm font-semibold text-[#60A5FA] tracking-wider uppercase block mb-2 sm:mb-3">
                US TRAINING PROGRAMS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
                Global Learning Opportunities
              </h2>
              <p className="text-[#D8E6FE] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Specialized training programs designed for US-based students, focusing on
                emerging technologies, practical learning, and real-world commercial
                applications.
              </p>
            </div>

            {/* Right CTA Button Area */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-2 lg:mt-0">
              <button
                type="button"
                onClick={() => navigate("/services/training-development/us-trainings")}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-[#01123E] font-bold text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer shadow-md whitespace-nowrap w-full sm:w-auto"
              >
                <span>Explore US Training Programs</span>
                <span className="font-extrabold text-base sm:text-lg inline-block leading-none">→</span>
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
