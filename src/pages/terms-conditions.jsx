import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import terms1 from "../assets/terms1.png";
import terms2 from "../assets/terms2.png";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("section-1");

  const sections = [
    {
      id: "section-1",
      title: "Introduction",
      content: [
        "Welcome to Galactix Solutions Pvt Ltd. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.",
        "These terms apply to all clients, visitors, and users who access or engage with our services. If you disagree with any part of these terms, you may not access our services.",
        "We recommend reviewing these terms periodically to stay informed of any updates. Your continued use of our platform constitutes acceptance of any modifications."
      ]
    },
    {
      id: "section-2",
      title: "Services",
      content: [
        "Galactix Solutions provides custom software development, web and mobile application development, IT consulting, cloud & DevOps services, and related technology solutions.",
        "The scope, timeline, and deliverables for each project will be defined in a separate Statement of Work (SOW) or service agreement. Any changes to the agreed scope must be documented and approved by both parties. We reserve the right to subcontract certain tasks to qualified third-party vendors, while maintaining full responsibility for the quality and delivery of the final product.",
        "All estimates provided are based on the information available at the time and may be subject to revision as the project progresses and requirements evolve."
      ]
    },
    {
      id: "section-3",
      title: "Intellectual Property",
      content: [
        "All intellectual property rights in the deliverables created under a project shall be transferred to the client upon full payment, unless otherwise agreed in writing.",
        "Galactix Solutions retains the right to use general knowledge, skills, experience, and methodologies acquired during the project for future engagements.",
        "Pre-existing intellectual property, including proprietary frameworks, libraries, and tools used in the development process, remains the property of Galactix Solutions. The client is granted a non-exclusive license to use such components within the delivered solution.",
        "The client warrants that all materials provided for the project (logos, content, data) do not infringe upon any third-party intellectual property rights."
      ]
    },
    {
      id: "section-4",
      title: "Confidentiality",
      content: [
        "Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of engagement. This obligation survives the termination of the agreement.",
        "Confidential information includes, but is not limited to, business plans, technical specifications, customer data, pricing strategies, and any information marked as confidential.",
        "Each party shall implement reasonable security measures to protect the other party's confidential information from unauthorized access, disclosure, or use.",
        "The confidentiality obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law or regulatory authority."
      ]
    },
    {
      id: "section-5",
      title: "Payment Terms",
      content: [
        "Payment terms will be outlined in the project agreement or invoice. Unless otherwise stated, invoices are due within 15 days of issuance.",
        "Late payments may incur an interest charge of 1.5% per month on the outstanding balance, or the maximum rate permitted by applicable law, whichever is lower.",
        "For milestone-based projects, payment is due upon completion and approval of each milestone. Work on subsequent milestones may be paused until outstanding payments are received.",
        "All fees are exclusive of applicable taxes, which will be charged in addition to the agreed fees as required by law. The client is responsible for any withholding taxes applicable in their jurisdiction."
      ]
    },
    {
      id: "section-6",
      title: "Warranties & Liability",
      content: [
        "Galactix Solutions warrants that services will be performed in a professional and workmanlike manner consistent with industry standards.",
        "We provide a 30-day warranty period after project delivery, during which any defects or bugs directly related to the delivered scope will be fixed at no additional cost.",
        "Our total liability shall not exceed the fees paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, special, or consequential damages.",
        "The client acknowledges that software development inherently involves risks and that Galactix Solutions does not guarantee uninterrupted or error-free operation of the delivered software."
      ]
    },
    {
      id: "section-7",
      title: "Termination",
      content: [
        "Either party may terminate the engagement with 30 days' written notice. Upon termination, the client shall pay for all work completed up to the termination date.",
        "In the event of a material breach by either party, the non-breaching party may terminate the agreement immediately upon written notice if the breach is not cured within 15 days.",
        "Upon termination, Galactix Solutions will deliver all completed work products and assist with a reasonable transition period to ensure continuity of the client's operations.",
        "Termination does not affect any rights or obligations that have accrued prior to the termination date, including payment obligations and confidentiality requirements."
      ]
    },
    {
      id: "section-8",
      title: "Governing Law",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of India.",
        "Any disputes arising out of or in connection with these terms shall first be attempted to be resolved through good-faith negotiation between the parties.",
        "If negotiation fails, disputes shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Hyderabad, Telangana.",
        "The courts in Hyderabad, Telangana shall have exclusive jurisdiction over any legal proceedings that cannot be resolved through arbitration."
      ]
    },
    {
      id: "section-9",
      title: "Changes to Terms",
      content: [
        "Galactix Solutions reserves the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms.",
        "Material changes will be communicated to active clients via email at least 15 days before they take effect. Minor or clarifying changes may be made without prior notice.",
        "We encourage all users to review these terms periodically. The 'Last updated' date at the bottom of this page indicates the most recent revision."
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
                Terms & Conditions
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1731] mb-6">
                Terms & Conditions
              </h1>
              <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                Welcome to Galactix Solutions Pvt. Ltd. Please read these Terms & Conditions carefully before using our website or engaging with our services. By accessing our website or services, you agree to be bound by these terms.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center md:justify-end relative z-10"
            >
              <img src={terms1} alt="Terms and Conditions" className="w-full max-w-[500px] object-contain drop-shadow-xl" />
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
                            <span className="text-left">{sec.title}</span>
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
                    If you have any questions about these Terms & Conditions, please reach out to us.
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
                    {sec.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {paragraph}
                      </p>
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
