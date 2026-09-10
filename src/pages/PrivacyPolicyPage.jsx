import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import privacypolicy from "../assets/privacypolicy.png";
import terms2 from "../assets/terms2.png";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("section-1");

  const sections = [
    {
      id: "section-1",
      title: "Information We Collect",
      content: [
        "We may collect information that you voluntarily provide when you interact with our website, contact us, request information, or engage our services.",
        "Personal Information\nDepending on how you interact with us, we may collect:",
        [
          "Full name",
          "Email address",
          "Phone number",
          "Company or organization name",
          "Job title or designation",
          "Business requirements and project information",
          "Information submitted through contact or enquiry forms",
          "Any other information you voluntarily provide to us"
        ],
        "This information helps us understand how visitors use our website and improve its functionality and performance."
      ]
    },
    {
      id: "section-2",
      title: "How We Use Your Information",
      content: [
        "Galactix Solutions may use the information we collect for the following purposes:",
        [
          "To respond to your inquiries and requests",
          "To provide information about our services",
          "To understand and evaluate project requirements",
          "To communicate with clients and prospective clients",
          "To provide and improve our services",
          "To manage client and business relationships",
          "To personalize and improve your website experience",
          "To maintain website security and prevent unauthorized activity",
          "To analyze website usage and performance",
          "To comply with applicable legal and regulatory requirements"
        ],
        "We will only use personal information for legitimate business purposes and in accordance with applicable laws."
      ]
    },
    {
      id: "section-3",
      title: "Information Sharing & Disclosure",
      content: [
        "We do not sell, rent, or trade your personal information for monetary gain.\nWe may share information with trusted third parties when necessary to operate our business and provide our services. This may include:",
        [
          "Technology and hosting providers",
          "Cloud service providers",
          "Analytics and website service providers",
          "Professional advisors and consultants",
          "Authorized subcontractors or service providers",
          "Government authorities or regulatory bodies where legally required"
        ],
        "Third-party service providers are expected to handle information responsibly and only for the purposes for which it is shared.\nWe may also disclose information when necessary to protect our legal rights, enforce our agreements, prevent fraud, or protect the safety and security of our users and services."
      ]
    },
    {
      id: "section-4",
      title: "Cookies & Tracking Technologies",
      content: [
        "Our website may use cookies and similar technologies to improve functionality, understand website usage, and enhance user experience.\nCookies may help us:",
        [
          "Remember user preferences",
          "Understand website traffic and usage patterns",
          "Improve website performance",
          "Analyze visitor behavior",
          "Provide a better browsing experience"
        ],
        "You can control or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of some parts of the website."
      ]
    },
    {
      id: "section-5",
      title: "Third-Party Services & Links",
      content: [
        "Our website may contain links to third-party websites, platforms, or services.\nThese third parties may have their own privacy policies and practices. Galactix Solutions does not control and is not responsible for the privacy practices, content, security, or policies of third-party websites.\nWe recommend reviewing the privacy policies of any third-party websites you visit."
      ]
    },
    {
      id: "section-6",
      title: "Data Security",
      content: [
        "We take reasonable technical and organizational measures to protect personal information against:",
        [
          "Unauthorized access",
          "Unauthorized disclosure",
          "Accidental loss",
          "Misuse",
          "Alteration",
          "Destruction"
        ],
        "However, no method of transmitting information over the internet or storing information electronically can be guaranteed to be completely secure.\nTherefore, while we make reasonable efforts to protect your information, we cannot guarantee absolute security."
      ]
    },
    {
      id: "section-7",
      title: "Data Retention",
      content: [
        "We retain personal information only for as long as reasonably necessary to:",
        [
          "Fulfill the purposes for which it was collected",
          "Provide our services",
          "Maintain business and contractual records",
          "Resolve disputes",
          "Comply with legal and regulatory obligations",
          "Enforce our agreements"
        ],
        "When personal information is no longer required, we may securely delete or anonymize it in accordance with applicable requirements."
      ]
    },
    {
      id: "section-8",
      title: "Your Privacy Rights",
      content: [
        "Depending on applicable laws, you may have certain rights regarding your personal information.\nThese may include the right to:",
        [
          "Request access to personal information we hold about you",
          "Request correction of inaccurate or incomplete information",
          "Request deletion of personal information where legally permitted",
          "Withdraw consent where processing is based on consent",
          "Request information about how your data is being used",
          "Object to certain types of processing",
          "Request restriction of processing where applicable"
        ],
        "To exercise any applicable privacy rights, you may contact us using the details provided below.\nWe may need to verify your identity before processing certain requests."
      ]
    },
    {
      id: "section-9",
      title: "Children's Privacy",
      content: [
        "Our website and services are not intended for individuals under the age of 18.\nWe do not knowingly collect personal information from children under 18.\nIf you believe that a child has provided personal information to us, please contact us so that we can take appropriate steps to remove the information."
      ]
    },
    {
      id: "section-10",
      title: "International Data Transfers",
      content: [
        "Galactix Solutions may work with clients, partners, technology providers, and service providers located in different countries.\nAs a result, personal information may be processed or stored outside your country of residence.\nWhere required, we will take reasonable steps to ensure that such transfers are handled in accordance with applicable data protection and privacy laws."
      ]
    },
    {
      id: "section-11",
      title: "Confidentiality of Business Information",
      content: [
        "During the course of a project or business engagement, clients may provide confidential business, technical, financial, or operational information.\nSuch information will be handled in accordance with the applicable project agreement, Statement of Work (SOW), confidentiality agreement, or other contractual arrangements between the parties.\nThis Privacy Policy does not replace specific confidentiality obligations established through separate agreements."
      ]
    },
    {
      id: "section-12",
      title: "Changes to This Privacy Policy",
      content: [
        "Galactix Solutions reserves the right to update or modify this Privacy Policy from time to time.\nWhen we make changes, we will update the \"Last Updated\" date at the beginning of this page.\nFor material changes, we may provide additional notice where appropriate or required by applicable law.\nWe encourage you to periodically review this Privacy Policy to remain informed about how we protect your information.\nYour continued use of our website after changes to this Privacy Policy take effect constitutes your acknowledgment of the updated policy."
      ]
    }
  ];

  useEffect(() => {
    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const intersectingIds = sections
          .map((s) => s.id)
          .filter((id) => visibleSections.has(id));

        if (intersectingIds.length > 0) {
          setActiveSection(intersectingIds[intersectingIds.length - 1]);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -65% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      <div className="bg-white font-sans">
        {/* HERO SECTION */}
        <section className="bg-[#F0F4F8] pt-16 pb-20 md:pt-20 md:pb-28 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex-1 max-w-2xl relative z-10"
            >
              <h4 className="text-blue-600 font-bold mb-4 text-base sm:text-lg tracking-wide">
                Privacy & Policy
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1731] mb-6">
                Privacy & Policy
              </h1>
              <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                Galactix Solutions Pvt Ltd ("Galactix Solutions", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or interact with our services.
                <br /><br />
                By accessing or using our website and services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center md:justify-end relative z-10"
            >
              <img src={privacypolicy} alt="Privacy Policy" className="w-full max-w-[500px] object-contain drop-shadow-xl" />
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 xl:gap-24 relative items-start">

            {/* LEFT SIDEBAR (Sticky) */}
            <aside className="w-full lg:w-[320px] shrink-0 sticky top-28 self-start space-y-8">

                {/* On This Page Nav */}
                <div className="bg-[#F9FAFB] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-6">
                    ON THIS PAGE
                  </h3>
                  <ul className="space-y-4">
                    {sections.map((sec, index) => {
                      const isActive = activeSection === sec.id;
                      return (
                        <li key={sec.id}>
                          <button
                            onClick={() => scrollToSection(sec.id)}
                            className={`flex items-center gap-4 text-sm font-semibold transition-colors ${isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                              }`}
                          >
                            <span className="w-6 font-medium">{String(index + 1).padStart(2, "0")}.</span>
                            <span className="text-left leading-tight">{sec.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Need Help Box */}
                <div className="bg-[#F4F7FC] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <img src={terms2} alt="Help" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1731] mb-3">Need Help?</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    If you have any questions about this Privacy Policy, please reach out to us.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full bg-[#0A1731] hover:bg-[#152955] transition-colors text-white font-semibold py-3.5 px-6 rounded-xl text-sm shadow-md"
                  >
                    Contact Us
                  </Link>
                </div>

            </aside>

            {/* RIGHT CONTENT */}
            <div className="flex-1 min-w-0 space-y-16 lg:pt-2">
              {sections.map((sec, index) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-32 border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-10 bg-[#EAF3FA] text-blue-600 font-bold text-lg rounded-xl flex items-center justify-center shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1731]">
                      {sec.title}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {sec.content.map((item, pIndex) => (
                      Array.isArray(item) ? (
                        <ul key={pIndex} className="list-disc pl-5 space-y-2 text-gray-600 text-base md:text-lg leading-relaxed marker:text-gray-400">
                          {item.map((listItem, lIndex) => (
                            <li key={lIndex} className="pl-2">{listItem}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={pIndex} className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                          {item}
                        </p>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
}

