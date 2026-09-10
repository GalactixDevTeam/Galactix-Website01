import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Standardized Master ServiceHero Component
 * Single source of truth for breadcrumb, heading, description, badges/CTA, and image layout
 * across all service pages.
 */
export default function ServiceHero({
  breadcrumbs = [],
  title,
  description,
  cta,
  badges,
  children,
  image,
  imageAlt,
  imageClassName = "",
  imageStyle = {},
  className = "",
}) {
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

  return (
    <section
      className={`w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pt-8 sm:pt-10 md:pt-11 lg:pt-[50px] pb-14 sm:pb-16 md:pb-20 lg:pb-[75px] min-h-[470px] ${className}`}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 xl:gap-14">
        
        {/* Left Content (approx 52%) - TOP ALIGNED */}
        <motion.div
          className="w-full lg:w-[52%] flex flex-col items-start text-left self-start"
          variants={leftContentVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb - Aligns with top of hero image */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              aria-label="Breadcrumb"
              variants={itemVariants}
              className="text-[13px] font-medium leading-[1.4] mt-0 mb-6 flex flex-wrap items-center gap-2"
            >
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-gray-400 select-none">&gt;</span>}
                    {isLast || !crumb.path ? (
                      <span className="font-semibold text-[#0825E8]">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        to={crumb.path}
                        className="hover:underline text-gray-600 hover:text-[#0825E8] transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </motion.nav>
          )}

          {/* Main Heading - Large hero heading scale (54–56px) with natural wrapping */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[48px] lg:text-[54px] xl:text-[56px] font-bold text-gray-900 tracking-tight leading-[1.08] sm:leading-[1.1] max-w-[660px] mb-5 sm:mb-6"
          >
            {title}
          </motion.h1>

          {/* Description - Comfortable 17–18px font with line-height 1.6 */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-[16px] sm:text-[17px] lg:text-[18px] text-gray-700 leading-[1.6] max-w-[640px] mb-9 sm:mb-10 lg:mb-11 font-normal"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Button */}
          {cta && (
            <motion.div variants={itemVariants} className={`mb-2 mt-2 sm:mt-3 md:mt-4 ${cta.className || ""}`}>
              <button
                type="button"
                onClick={cta.onClick || (() => navigate(cta.path || "/contact"))}
                style={{ backgroundColor: "rgba(5, 73, 177, 1)" }}
                className={`inline-flex items-center justify-center px-8 sm:px-9 py-4 rounded-xl text-white font-semibold text-base sm:text-lg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer group ${cta.buttonClassName || ""}`}
              >
                <span>{cta.text}</span>
              </button>
            </motion.div>
          )}

          {/* Feature Highlights / Badges Row (38–45px margin-top via description spacing) */}
          {badges && badges.length > 0 && (
            <motion.div
              variants={itemVariants}
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                badges.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
              } gap-6 sm:gap-7 lg:gap-8 w-full`}
            >
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F0FF] flex items-center justify-center shrink-0 p-2.5">
                    {badge.icon && (
                      typeof badge.icon === "string" ? (
                        <img
                          src={badge.icon}
                          alt={badge.title || ""}
                          loading="lazy"
                          decoding="async"
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        React.createElement(badge.icon, {
                          className: "w-6 h-6 text-[#2458F5]",
                          strokeWidth: 2,
                        })
                      )
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px] sm:text-[16px] leading-tight mb-1">
                      {badge.title}
                    </h3>
                    {(badge.subtitle || badge.desc) && (
                      <p className="text-[13px] text-gray-500 leading-snug">
                        {badge.subtitle || badge.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Custom Slot / Children */}
          {children && (
            <motion.div variants={itemVariants} className="w-full">
              {children}
            </motion.div>
          )}
        </motion.div>

        {/* Right Hero Image (approx 48%) - Large, prominent, top-aligned with breadcrumb and shifted further right */}
        {image && (
          <motion.div
            className="w-full lg:w-[48%] flex items-start justify-center lg:justify-end self-start"
            variants={rightImageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full max-w-[580px] xl:max-w-[600px] flex items-start justify-center lg:justify-end lg:translate-x-12 xl:translate-x-16">
              <img
                src={image}
                alt={imageAlt || (typeof title === "string" ? title : "Service Hero")}
                loading="lazy"
                decoding="async"
                style={imageStyle}
                className={`w-full h-auto object-contain max-h-[480px] ${imageClassName}`}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
