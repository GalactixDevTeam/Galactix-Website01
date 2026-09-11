import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import terms2 from "../assets/terms2.png";

export default function Disclaimer() {
  const [activeSection, setActiveSection] = useState("section-1");

  const sections = [
    {
      id: "section-1",
      title: "General Information",
      content: [
        "The content available on this website is provided to help visitors understand Galactix Solutions, our capabilities, services, solutions, technologies, projects, and areas of expertise.",
        "The information should not be considered a guarantee, promise, or representation that a particular service, solution, technology, or outcome will be suitable for your specific business requirements.",
        "Actual project scope, timelines, pricing, deliverables, technical specifications, and results may vary depending on individual requirements and will be defined through applicable proposals, Statements of Work (SOWs), service agreements, or other written arrangements."
      ]
    },
    {
      id: "section-2",
      title: "Accuracy of Information",
      content: [
        "We make reasonable efforts to maintain accurate and current information on our website. However, errors, omissions, outdated information, or inaccuracies may occasionally occur.",
        "Galactix Solutions reserves the right to:",
        [
          "Correct errors or inaccuracies",
          "Update or modify website content",
          "Add or remove information",
          "Change service descriptions",
          "Modify project or technology information",
          "Update website functionality",
          "Make changes without prior notice"
        ],
        "We do not guarantee that all information available on the website will always be complete, accurate, or current."
      ]
    },
    {
      id: "section-3",
      title: "Services & Project Outcomes",
      content: [
        "Information about our services, solutions, technologies, and capabilities is provided for general informational purposes.",
        "While Galactix Solutions strives to deliver high-quality technology solutions, actual results depend on various factors, including:",
        [
          "Client requirements",
          "Available data and resources",
          "Existing technology infrastructure",
          "Third-party platforms and integrations",
          "Project scope",
          "Implementation environment",
          "Client participation and approvals",
          "Changes in requirements or technology"
        ],
        "Therefore, examples, case studies, project descriptions, or statements regarding potential benefits should not be interpreted as guarantees of specific results."
      ]
    },
    {
      id: "section-4",
      title: "Technology & AI Disclaimer",
      content: [
        "Galactix Solutions may provide or develop solutions involving Artificial Intelligence, Machine Learning, automation, analytics, cloud technologies, software systems, and other emerging technologies.",
        "Technology outputs may depend on the quality of data, configurations, third-party services, algorithms, models, infrastructure, and other external factors.",
        "AI-generated or automated outputs may contain errors or inaccuracies and should be appropriately reviewed and validated before being relied upon for important decisions.",
        "Where technology solutions are used in sensitive or regulated environments, clients are responsible for ensuring that their implementation complies with applicable laws, regulations, policies, and industry requirements."
      ]
    },
    {
      id: "section-5",
      title: "No Professional Advice",
      content: [
        "The information provided through this website does not constitute professional advice, including:",
        [
          "Legal advice",
          "Financial advice",
          "Tax advice",
          "Accounting advice",
          "Medical advice",
          "Investment advice",
          "Cybersecurity or compliance certification"
        ],
        "Visitors and clients should consult appropriately qualified professionals where specialized advice is required."
      ]
    },
    {
      id: "section-6",
      title: "External Links",
      content: [
        "Our website may contain links to third-party websites, platforms, applications, or resources.",
        "These links are provided for convenience and informational purposes.",
        "Galactix Solutions does not control or guarantee the:",
        [
          "Accuracy of third-party content",
          "Availability of external websites",
          "Security of third-party platforms",
          "Privacy practices of third parties",
          "Products or services offered by third parties"
        ],
        "Visiting or using third-party websites is at your own discretion and risk. We recommend reviewing the applicable terms and privacy policies of those websites."
      ]
    },
    {
      id: "section-7",
      title: "Third-Party Technologies & Services",
      content: [
        "Certain solutions or features provided by Galactix Solutions may depend on third-party technologies, APIs, cloud platforms, software libraries, hosting providers, or other external services.",
        "The availability and performance of these third-party services may be outside our direct control.",
        "Changes, interruptions, limitations, security incidents, pricing changes, or discontinuation of third-party services may affect the functionality of dependent solutions.",
        "Where applicable, such dependencies will be identified and addressed within the relevant project agreement or service documentation."
      ]
    },
    {
      id: "section-8",
      title: "Website Availability & Security",
      content: [
        "We make reasonable efforts to maintain the availability, security, and functionality of our website.",
        "However, we do not guarantee that the website will:",
        [
          "Always be available",
          "Operate without interruption",
          "Be completely error-free",
          "Be free from security vulnerabilities",
          "Be free from viruses or other harmful components",
          "Always be compatible with every device or browser"
        ],
        "Website availability may be affected by maintenance, technical issues, hosting problems, network interruptions, security incidents, or circumstances beyond our reasonable control."
      ]
    },
    {
      id: "section-9",
      title: "Intellectual Property",
      content: [
        "Unless otherwise stated, the content available on this website, including text, graphics, branding, logos, designs, images, software, and other materials, belongs to Galactix Solutions Pvt Ltd or its respective licensors.",
        "You may not reproduce, modify, distribute, publish, transmit, or commercially exploit website content without appropriate authorization.",
        "Third-party trademarks, logos, names, and materials displayed on this website remain the property of their respective owners."
      ]
    },
    {
      id: "section-10",
      title: "Testimonials & Project Information",
      content: [
        "Any testimonials, project descriptions, case studies, statistics, achievements, or examples presented on our website are provided for informational purposes.",
        "Past performance or project outcomes should not be interpreted as a guarantee that similar results will be achieved in future engagements.",
        "Individual project results may vary depending on business requirements, implementation conditions, resources, and other factors."
      ]
    },
    {
      id: "section-11",
      title: "Limitation of Responsibility",
      content: [
        "To the maximum extent permitted by applicable law, Galactix Solutions Pvt Ltd shall not be responsible for any direct, indirect, incidental, special, consequential, or other losses arising from reliance on information available through this website.",
        "This includes, but is not limited to, losses resulting from:",
        [
          "Reliance on website information",
          "Website interruptions",
          "Technical errors",
          "Third-party links or services",
          "Inaccurate or outdated information",
          "Loss of data",
          "Business interruption",
          "Decisions made based on website content"
        ],
        "Nothing in this Disclaimer is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law."
      ]
    },
    {
      id: "section-12",
      title: "Use at Your Own Risk",
      content: [
        "Your use of this website and reliance on information provided through it is at your own discretion and risk.",
        "You are responsible for independently evaluating information before making business, technical, financial, legal, or other decisions based on content available on the website.",
        "For specific projects or engagements, the applicable contract, proposal, Statement of Work, or service agreement will govern the relationship between Galactix Solutions and the client."
      ]
    },
    {
      id: "section-13",
      title: "Changes to This Disclaimer",
      content: [
        "Galactix Solutions reserves the right to update or modify this Disclaimer from time to time.",
        "Changes may be made to reflect:",
        [
          "Changes in our services",
          "Changes in technology",
          "Changes in applicable laws",
          "Changes in our business practices",
          "Improvements to our website"
        ],
        "When changes are made, we will update the “Last Updated” date displayed on this page.",
        "We encourage visitors to periodically review this Disclaimer."
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
              <h4 className="text-blue-600 font-bold mb-3 text-base sm:text-lg tracking-wide">
                Disclaimer
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1731] mb-2">
                Disclaimer
              </h1>
              <p className="text-gray-500 font-medium text-lg sm:text-xl mb-6">
                From concept to reality
              </p>
              <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                The information provided by Galactix Solutions Pvt Ltd on this website is intended for general informational and business purposes only. While we make reasonable efforts to ensure that the information presented is accurate and up to date, we do not guarantee its completeness, accuracy, reliability, or suitability for any particular purpose.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center md:justify-end relative z-10"
            >
              <img
                src="https://res.cloudinary.com/kf1uuvct/image/upload/v1789114027/835483e87292e68758b4243cc28e40150c520a90.png"
                alt="Disclaimer"
                className="w-full max-w-[500px] object-contain drop-shadow-xl"
              />
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
                            className={`flex items-center gap-4 text-sm font-semibold transition-colors w-full text-left ${isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                              }`}
                          >
                            <span className="w-6 font-medium shrink-0">
                              {String(index + 1).padStart(2, "0")}.
                            </span>
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
                    If you have any questions about this Disclaimer, please reach out to us.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full bg-[#0A1731] hover:bg-[#152955] transition-colors text-white font-semibold py-3.5 px-6 rounded-xl text-sm shadow-md text-center"
                  >
                    Contact Us
                  </Link>
                </div>

            </aside>

            {/* RIGHT CONTENT */}
            <div className="flex-1 min-w-0 space-y-16 lg:pt-2">
              {sections.map((sec, index) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-32 border-b border-gray-100 pb-16 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-10 bg-[#EAF3FA] text-blue-600 font-bold text-lg rounded-xl flex items-center justify-center shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1731]">
                      {sec.title}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {sec.content.map((item, pIndex) =>
                      Array.isArray(item) ? (
                        <ul
                          key={pIndex}
                          className="list-disc pl-5 space-y-2 text-gray-600 text-base md:text-lg leading-relaxed marker:text-gray-400"
                        >
                          {item.map((listItem, lIndex) => (
                            <li key={lIndex} className="pl-2">
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p
                          key={pIndex}
                          className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line"
                        >
                          {item}
                        </p>
                      )
                    )}
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


