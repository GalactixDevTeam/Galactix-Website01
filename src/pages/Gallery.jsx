import React, { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "../components/Layout";

// Video Assets
import videoIncorporation from "../assets/Galactix Incorporation day Video (1).mp4";
import videoFunSaturday from "../assets/Fun saturday video 1.mp4";
import videoRepublicDay from "../assets/Republic Day Celebrations.mp4";
import videoGaneshChaturthi from "../assets/Ganesh Chaturthi video 2025.mp4";

// Photo Assets
import kodemiImg from "../assets/our gallery/kodemi inaugartion.jpg";
import synaptimeshImg from "../assets/our gallery/Synaptimesh inaugaration.jpg";
import culturalProgramsFImg from "../assets/WhatsApp Image 2026-07-31 at 8.43.38 PM.jpeg";
import culturalMImg from "../assets/our gallery/cultural m.jpg";
import incorporationKodemiImg from "../assets/our gallery/Incorporation & Kodemi.png";
import incorporationDayImg from "../assets/our gallery/Incorporation day.png";
import donationImg from "../assets/our gallery/Donation.png";
import industrialVisitImg from "../assets/Industrial visit at Galactix.jpg";
import trainingSessionsImg from "../assets/our gallery/Training sessions.jpg";
import teamOutingImg from "../assets/our gallery/Team outing.png";
import incorporationHitamImg from "../assets/our gallery/Incorporation kodemi hitam team.png";
import trainingSessionsPngImg from "../assets/our gallery/Training sessions.png";
import teamMoments1Img from "../assets/our gallery/WhatsApp Image 2026-09-07 at 16.25.04.jpeg";
import teamMoments2Img from "../assets/our gallery/WhatsApp Image 2026-09-07 at 16.24.48.jpeg";
import ugadiCelebrations1Img from "../assets/our gallery/WhatsApp Image 2026-09-07 at 16.24.56.jpeg";
import ugadiCelebrations2Img from "../assets/our gallery/WhatsApp Image 2026-09-07 at 16.25.13.jpeg";
import ganeshChaturthi2025Img from "../assets/our gallery/ganesh chaturthi 2025.jpeg";
import bappaBlessingsImg from "../assets/1b20fb2d-5dd4-4b6c-9d1d-2254702ab0bf.png";

// Video order:
// 1. Galactix Incorporation Day
// 2. Fun Saturday
// 3. Republic Day Celebrations
// 4. Ganesh Chaturthi 2025
const videoList = [
  {
    id: 1,
    title: "Galactix Incorporation Day",
    src: videoIncorporation,
  },
  {
    id: 2,
    title: "Fun Saturday",
    src: videoFunSaturday,
  },
  {
    id: 3,
    title: "Republic Day Celebrations",
    src: videoRepublicDay,
  },
  {
    id: 4,
    title: "Ganesh Chaturthi 2025",
    src: videoGaneshChaturthi,
  },
];

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const scrollContainerRef = useRef(null);
  const videoRefs = useRef([]);
  const easeOutCubic = [0.22, 1, 0.36, 1];

  const getCardMotion = (staggerIndex = 0) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: {
        duration: 0.6,
        delay: 0.2 + staggerIndex * 0.08,
        ease: easeOutCubic,
      },
    };
  };

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOutCubic },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const sectionReveal = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: easeOutCubic },
    },
  };

  // Scroll checking
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const isOverflowing = scrollWidth - clientWidth > 5;
    setHasOverflow(isOverflowing);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        checkScroll();
      });
      resizeObserver.observe(el);
    }

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const scrollByDistance = (direction) => {
    if (scrollContainerRef.current) {
      const scrollStep = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: direction * scrollStep, behavior: "smooth" });
    }
  };

  // Safe playback helpers
  const playVideo = (videoEl) => {
    if (!videoEl) return;
    try {
      videoEl.muted = true;
      videoEl.playsInline = true;
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video playback prevented:", error);
        });
      }
    } catch (error) {
      console.warn("Video playback error:", error);
    }
  };

  const stopVideo = (videoEl) => {
    if (!videoEl) return;
    try {
      videoEl.pause();
      videoEl.currentTime = 0;
    } catch (error) {
      console.warn("Video pause error:", error);
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach(stopVideo);
    };
  }, []);

  const handleMouseEnter = (idx) => {
    setActiveIndex(idx);

    videoRefs.current.forEach((videoEl, i) => {
      if (videoEl) {
        if (i === idx) {
          playVideo(videoEl);
        } else {
          stopVideo(videoEl);
        }
      }
    });
  };

  const handleMouseLeaveRow = () => {
    setActiveIndex(null);

    videoRefs.current.forEach((videoEl) => {
      if (videoEl) {
        stopVideo(videoEl);
      }
    });
  };

  const handleItemClick = (idx) => {
    const nextActive = activeIndex === idx ? null : idx;
    setActiveIndex(nextActive);

    videoRefs.current.forEach((videoEl, i) => {
      if (videoEl) {
        if (i === nextActive) {
          playVideo(videoEl);
        } else {
          stopVideo(videoEl);
        }
      }
    });
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleItemClick(idx);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-white font-sans">
        {/* ── HERO SECTION ── */}
        <section
          className="w-full py-[55px] sm:py-[60px] lg:py-[65px] px-5 sm:px-8 md:px-12 flex items-center justify-center"
          style={{ backgroundColor: "rgba(233, 239, 250, 1)" }}
        >
          <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center justify-center text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center text-center max-w-[1000px] mx-auto"
            >
              {/* Eyebrow */}
              <motion.span
                variants={fadeUp}
                className="text-sm sm:text-[15px] lg:text-base font-bold mb-5 sm:mb-6 block"
                style={{ color: "rgba(36, 88, 245, 1)" }}
              >
                Our Gallery
              </motion.span>

              {/* Main Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold text-[#0A1731] tracking-tight leading-[1.15] mb-4 sm:mb-5"
              >
                Moments That Define Our Journey
              </motion.h1>



              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base lg:text-[16.5px] font-normal text-[#4B5563] leading-[1.55] max-w-[950px] mx-auto"
              >
                From team celebrations to milestones and achievements, explore the moments that showcase our culture, progress and passion at Galactix.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── VIDEO GALLERY SECTION (SHOW 3 CARDS AT ONCE) ── */}
        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full py-[70px] lg:py-[85px] px-4 sm:px-6 md:px-10 lg:px-12 bg-white"
        >
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Section Header with Clean Navigation Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
              <div className="text-center md:text-left">
                <span
                  className="text-xs sm:text-sm lg:text-[15px] font-bold tracking-wider uppercase block mb-2"
                  style={{ color: "rgba(36, 88, 245, 1)" }}
                >
                  OUR VIDEOS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-[#0A1731] tracking-tight">
                  Stories Behind The Moments
                </h2>
              </div>

              {/* Accessible Navigation Arrow Controls (Shown only if videos overflow the container/screen) */}
              {hasOverflow && (
                <div className="flex items-center justify-center md:justify-end gap-3 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollByDistance(-1)}
                    disabled={!canScrollLeft}
                    aria-label="Previous videos"
                    className={`w-11 h-11 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#0A1731] shadow-sm transition-all duration-200 ${!canScrollLeft
                      ? "opacity-30 cursor-not-allowed border-gray-100"
                      : "hover:bg-[#2458F5] hover:text-white hover:border-[#2458F5] hover:shadow-md active:scale-95 cursor-pointer"
                      }`}
                  >
                    <svg className="w-5 h-5 ml-[-1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollByDistance(1)}
                    disabled={!canScrollRight}
                    aria-label="Next videos"
                    className={`w-11 h-11 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#0A1731] shadow-sm transition-all duration-200 ${!canScrollRight
                      ? "opacity-30 cursor-not-allowed border-gray-100"
                      : "hover:bg-[#2458F5] hover:text-white hover:border-[#2458F5] hover:shadow-md active:scale-95 cursor-pointer"
                      }`}
                  >
                    <svg className="w-5 h-5 mr-[-1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

              {/* Reel Carousel / Grid Container */}
              <div
                ref={scrollContainerRef}
                onMouseLeave={handleMouseLeaveRow}
                className="w-full overflow-x-auto lg:overflow-visible py-4 pb-8 no-scrollbar scroll-smooth"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 min-w-max lg:min-w-0 lg:w-full lg:grid lg:grid-cols-4 pr-6 sm:pr-8 lg:pr-0">
                  {videoList.map((video, idx) => {
                    const isActive = activeIndex === idx;

                    return (
                      <div
                        key={video.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Play ${video.title}`}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onClick={() => handleItemClick(idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className={`relative rounded-[18px] lg:rounded-[22px] overflow-hidden cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.2)] transition-all duration-[500ms] ease-out select-none focus:outline-none focus:ring-2 focus:ring-[#2458F5] flex-shrink-0 lg:flex-shrink aspect-[9/16] w-[70vw] sm:w-[260px] md:w-[280px] lg:w-full ${
                          isActive ? "scale-[1.02] shadow-xl" : "scale-100"
                        }`}
                      >
                        {/* 9:16 Video Element */}
                        <video
                          ref={(el) => (videoRefs.current[idx] = el)}
                          src={video.src}
                          muted
                          playsInline
                          preload="metadata"
                          loop
                          className={`w-full h-full object-cover transition-transform duration-[500ms] ease-out ${isActive ? "scale-[1.02]" : "scale-100"
                            }`}
                        />

                        {/* Subtle Bottom Gradient behind title only */}
                        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                        {/* Centered Play Button (fades out when active) */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isActive ? "opacity-0 scale-90" : "opacity-100 scale-100"
                            }`}
                        >
                          <div className="w-13 h-13 lg:w-16 lg:h-16 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_18px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform duration-250 hover:scale-108 border border-gray-100">
                            <svg
                              className="w-6 h-6 lg:w-7 lg:h-7 text-[#0A1731] ml-0.5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Video Title at bottom-left */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 pointer-events-none">
                          <p className="text-white text-[14px] sm:text-[15px] lg:text-[16px] font-semibold drop-shadow-md truncate leading-snug">
                            {video.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
        </motion.section>

        {/* ── IMAGE GALLERY SECTION (ROW-BY-ROW) ── */}
        <section className="w-full py-[60px] lg:py-[75px] px-4 sm:px-6 md:px-10 lg:px-12 bg-white">
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Section Header */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: easeOutCubic }}
              className="text-center md:text-left mb-8 sm:mb-10 lg:mb-12"
            >
              <span
                className="text-xs sm:text-sm lg:text-[15px] font-bold tracking-wider uppercase block mb-2"
                style={{ color: "rgba(36, 88, 245, 1)" }}
              >
                OUR PHOTOS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-[#0A1731] tracking-tight">
                Capturing Our Journey
              </h2>
            </motion.div>

            {/* Custom Row 1: Left 45% (KodeMi Labs) & Right 55% (SynaptiMesh) */}
            <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-5 w-full">
              {/* Image 1: KodeMi Labs */}
              <motion.div
                {...getCardMotion(0)}
                className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={kodemiImg}
                  alt="Inauguration of KodeMi Labs Project"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Inauguration of KodeMi Labs Project
                </p>
              </motion.div>

              {/* Image 2: SynaptiMesh */}
              <motion.div
                {...getCardMotion(1)}
                className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={synaptimeshImg}
                  alt="Inauguration of SynaptiMesh Project"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Inauguration of SynaptiMesh Project
                </p>
              </motion.div>
            </div>

            {/* Custom Row 2: Asymmetric Left (1.45fr) & Right (1fr) Columns */}
            <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-5 w-full mt-5 items-stretch">
              {/* LEFT COLUMN (2 Cards) */}
              <div className="flex flex-col gap-5 w-full">
                {/* 1. Top-Left: Cultural Programs (Large ~320px) */}
                <motion.div
                  {...getCardMotion(0)}
                  className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
                >
                  <img
                    src={culturalProgramsFImg}
                    alt="Cultural Programs"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: "center 52%" }}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <p className="absolute left-[18px] bottom-[15px] right-[18px] text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                    Ethnic Day
                  </p>
                </motion.div>

                {/* 2. Bottom-Left: Incorporation & KodeMi Launch Event (~275px) */}
                <motion.div
                  {...getCardMotion(1)}
                  className="relative w-full h-[220px] sm:h-[250px] md:h-[275px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
                >
                  <img
                    src={incorporationKodemiImg}
                    alt="KodeMi Launch Event"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <p className="absolute left-[18px] bottom-[15px] right-[18px] text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                    KodeMi Launch Event
                  </p>
                </motion.div>
              </div>

              {/* RIGHT COLUMN (2 Cards) */}
              <div className="flex flex-col gap-5 w-full h-full">
                {/* 3. Top-Right: Cultural Programs (Small ~225px) */}
                <motion.div
                  {...getCardMotion(2)}
                  className="relative w-full h-[180px] sm:h-[200px] md:h-[225px] flex-shrink-0 rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
                >
                  <img
                    src={culturalMImg}
                    alt="Cultural Programs"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-bottom transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <p className="absolute left-[18px] bottom-[15px] right-[18px] text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                    Cultural Programs
                  </p>
                </motion.div>

                {/* 4. Bottom-Right: Incorporation Day (Matches bottom with left column to form exact rectangle) */}
                <motion.div
                  {...getCardMotion(3)}
                  className="relative w-full h-[260px] sm:h-[300px] md:h-[370px] md:flex-1 md:min-h-0 rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
                >
                  <img
                    src={incorporationDayImg}
                    alt="Incorporation Day"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <p className="absolute left-[18px] bottom-[15px] right-[18px] text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                    Incorporation Day
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Custom Row 3: Left 30% (Donation) & Right 70% (Industrial visit at Galactix) */}
            <div className="grid grid-cols-1 md:grid-cols-[30fr_70fr] gap-5 w-full mt-5">
              {/* Image 1: Donation (30%) */}
              <motion.div
                {...getCardMotion(0)}
                className="relative w-full h-[260px] sm:h-[300px] md:h-[330px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={donationImg}
                  alt="Donation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Social Initiative 
                </p>
              </motion.div>

              {/* Image 2: Industrial visit at Galactix (70%) */}
              <motion.div
                {...getCardMotion(1)}
                className="relative w-full h-[260px] sm:h-[300px] md:h-[330px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={industrialVisitImg}
                  alt="HITAM Industrial Visit at Galactix"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: "center 35%" }}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  HITAM Industrial Visit at Galactix
                </p>
              </motion.div>
            </div>

            {/* Custom Row 4: Left 55% (Training sessions) & Right 45% (Team outing) */}
            <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-5 w-full mt-5">
              {/* Image 1: Training Sessions (55%) */}
              <motion.div
                {...getCardMotion(0)}
                className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={trainingSessionsImg}
                  alt="Training Sessions"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Live Project
                </p>
              </motion.div>

              {/* Image 2: Team Outing (45%) */}
              <motion.div
                {...getCardMotion(1)}
                className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={teamOutingImg}
                  alt="Team Outing"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: "center 70%" }}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Sports Event
                </p>
              </motion.div>
            </div>

            {/* Custom Row 5: Left 70% (Incorporation kodemi hitam team) & Right 30% (Training sessions) */}
            <div className="grid grid-cols-1 md:grid-cols-[70fr_30fr] gap-5 w-full mt-5">
              {/* Image 1: Incorporation & KodeMi HITAM Team (70%) */}
              <motion.div
                {...getCardMotion(0)}
                className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={incorporationHitamImg}
                  alt="Incorporation & KodeMi HITAM Team"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Incorporation & KodeMi HITAM Team
                </p>
              </motion.div>

              {/* Image 2: Training Sessions (30%) */}
              <motion.div
                {...getCardMotion(1)}
                className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm group cursor-pointer"
              >
                <img
                  src={trainingSessionsPngImg}
                  alt="Training Sessions"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Training Sessions
                </p>
              </motion.div>
            </div>

            {/* Custom Row 6: Collage (Left 45% & Right 55% merged with no spacing) */}
            <motion.div
              {...getCardMotion(0)}
              className="grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-0 w-full mt-5 rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm"
            >
              {/* Image 1: Left 45% */}
              <div className="relative w-full h-[325px] sm:h-[375px] md:h-[425px] overflow-hidden group cursor-pointer">
                <img
                  src={teamMoments1Img}
                  alt="Ugadi Celebrations"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Ugadi Celebrations
                </p>
              </div>

              {/* Image 2: Right 55% */}
              <div className="relative w-full h-[325px] sm:h-[375px] md:h-[425px] overflow-hidden group cursor-pointer">
                <img
                  src={teamMoments2Img}
                  alt="Ugadi Celebrations"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">

                </p>
              </div>
            </motion.div>

            {/* Custom Row 7: Collage (Left & Right balanced to zoom out / show full width) */}
            <motion.div
              {...getCardMotion(0)}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full mt-5 rounded-[10px] md:rounded-[12px] overflow-hidden shadow-sm"
            >
              {/* Image 1: Left */}
              <div className="relative w-full h-[280px] sm:h-[330px] md:h-[380px] overflow-hidden group cursor-pointer">
                <img
                  src={ganeshChaturthi2025Img}
                  alt="Ganesh Chaturthi Celebrations"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: "center 95%" }}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">
                  Ganesh Chaturthi Celebrations
                </p>
              </div>

              {/* Image 2: Right */}
              <div className="relative w-full h-[280px] sm:h-[330px] md:h-[380px] overflow-hidden group cursor-pointer">
                <img
                  src={bappaBlessingsImg}
                  alt="Ganesh Chaturthi Celebrations"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: "center 20%" }}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <p className="absolute left-5 bottom-4 right-5 text-white text-[15px] sm:text-[16px] md:text-[17px] font-semibold drop-shadow-md pointer-events-none leading-snug">

                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

