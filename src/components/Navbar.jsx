import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Galactix.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const servicesList = [
    {
      name: "Software Development",
      path: "/services/software-development",
      anchor: "service-software-development",
      subItems: [
        { name: "Web & Mobile Application Development", path: "/services/software-development/web-mobile-application-development" },
        { name: "Enterprise Applications", path: "/services/software-development/enterprise-applications" },
        { name: "AI & Agentic AI Solutions", path: "/services/software-development/ai-agentic-ai-solutions" },
        { name: "UI/UX & Product Engineering", path: "/services/software-development/ui-ux-design" },
        { name: "Cloud & Digital Infrastructure", path: "/services/software-development/cloud-infrastructure" },
      ],
    },
    { name: "Cybersecurity & Security Operations", path: "/services/cybersecurity-security-operations", anchor: "service-cybersecurity" },
    {
      name: "Labs & Smart Infrastructure",
      path: "/services/labs-smart-infrastructure",
      anchor: "service-labs-smart-infrastructure",
      subItems: [
        { name: "Electronics Labs", path: "/services/labs-smart-infrastructure", anchor: "labs-what-we-do" },
        { name: "Simulation Labs", path: "/services/labs-smart-infrastructure", anchor: "labs-what-we-do" },
        { name: "Tech Studios", path: "/services/labs-smart-infrastructure", anchor: "labs-what-we-do" },
        { name: "Virtual Labs", path: "/services/labs-smart-infrastructure", anchor: "labs-what-we-do" },
        { name: "AI Labs", path: "/services/labs-smart-infrastructure", anchor: "labs-what-we-do" },
        { name: "War Rooms", path: "/services/labs-smart-infrastructure", anchor: "labs-what-we-do" },
      ],
    },
    {
      name: "Research & Innovation",
      path: "/services/research-innovation",
      subItems: [
        { name: "GPS Tracking Systems", path: "/services/research-innovation" },
        { name: "Underwater Sensing", path: "/services/research-innovation" },
        { name: "Device Automation & Bio-Electronics", path: "/services/research-innovation" },
        { name: "Multi-Cam Security Systems", path: "/services/research-innovation" },
      ],
    },
    {
      name: "VLSI, IoT & Embedded",
      path: "/services/vlsi-iot-embedded",
      anchor: "service-vlsi-iot-embedded",
      subItems: [
        { name: "VLSI Design & Development", path: "/services/vlsi-iot-embedded", anchor: "vlsi-what-we-do" },
        { name: "IoT Solutions", path: "/services/vlsi-iot-embedded", anchor: "vlsi-what-we-do" },
        { name: "Embedded Systems", path: "/services/vlsi-iot-embedded", anchor: "vlsi-what-we-do" },
        { name: "Electronics / Hardware Engineering", path: "/services/vlsi-iot-embedded", anchor: "vlsi-what-we-do" },
      ],
    },
    {
      name: "Training & Development",
      path: "/services/training-development",
      subItems: [
        { name: "Industry-Oriented Training", path: "/services/training-development" },
        { name: "Live Project-Based Learning", path: "/services/training-development" },
        { name: "War Room Collaboration", path: "/services/training-development" },
        { name: "80/20 Practical Learning Model", path: "/services/training-development" },
        { name: "US Training programs", path: "/services/training-development/us-trainings" },
      ],
    },
  ];

  // Hover handlers with debounce hysteresis to prevent flickering
  const handleMenuEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMenuLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setActiveSubMenu(null);
    }, 130);
  };

  const handleItemEnter = (service) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (service.subItems && service.subItems.length > 0) {
      setActiveSubMenu(service.name);
    } else {
      setActiveSubMenu(null);
    }
  };

  const mobileDropdownRef = useRef(null);

  // Close dropdown on outside click and cleanup timer
  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideDesktop = dropdownRef.current && !dropdownRef.current.contains(event.target);
      const clickedOutsideMobile = mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target);
      
      if (clickedOutsideDesktop && clickedOutsideMobile) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setServicesDropdownOpen(false);
        setActiveSubMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleServiceClick = (service) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(false);
    setActiveSubMenu(null);
    setMobileSubMenuOpen(null);
    setOpen(false);

    if (service.path && service.anchor) {
      if (location.pathname === service.path) {
        const element = document.getElementById(service.anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(service.path);
        setTimeout(() => {
          const element = document.getElementById(service.anchor);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 250);
      }
    } else if (service.path) {
      navigate(service.path);
    } else if (service.anchor) {
      if (location.pathname === "/") {
        const element = document.getElementById(service.anchor) || document.getElementById("our-core-services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(service.anchor) || document.getElementById("our-core-services");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      }
    }
  };

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <nav className="w-full bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="max-w-[1620px] mx-auto px-4 md:px-8 flex items-center justify-between h-[80px]">
        
        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Galactix Solutions" className="h-8 md:h-10 2xl:h-10 w-auto object-contain transition-all" />
        </div>

        {/* DESKTOP NAV LINKS (CENTERED & ORDERED) */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-4">
          <ul className="flex items-center gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 font-medium text-[15px]">
            
            {/* 1. Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative group transition-colors duration-200 cursor-pointer pb-1 ${
                  isActive ? "text-[#1885AA] font-semibold" : "text-gray-700 hover:text-[#1885AA]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive ? (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1885AA] rounded-full"></span>
                  ) : (
                    <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#1885AA] rounded-full transition-all duration-250"></span>
                  )}
                </>
              )}
            </NavLink>

            {/* 2. About Us */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative group transition-colors duration-200 cursor-pointer pb-1 ${
                  isActive ? "text-[#1885AA] font-semibold" : "text-gray-700 hover:text-[#1885AA]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About Us
                  {isActive ? (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1885AA] rounded-full"></span>
                  ) : (
                    <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#1885AA] rounded-full transition-all duration-250"></span>
                  )}
                </>
              )}
            </NavLink>

            {/* 3. Our Services with Hover Dropdown */}
            <li
              ref={dropdownRef}
              className="relative group py-2"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <NavLink
                to="/services"
                onClick={() => {
                  setServicesDropdownOpen(false);
                  setActiveSubMenu(null);
                }}
                onFocus={handleMenuEnter}
                className={() =>
                  `relative group transition-colors duration-200 cursor-pointer pb-1 font-medium text-[15px] flex items-center gap-1 ${
                    isServicesActive ? "text-[#1885AA] font-semibold" : "text-gray-700 hover:text-[#1885AA]"
                  }`
                }
              >
                {() => (
                  <>
                    <span>Our Services</span>
                    {isServicesActive ? (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1885AA] rounded-full"></span>
                    ) : (
                      <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#1885AA] rounded-full transition-all duration-250"></span>
                    )}
                  </>
                )}
              </NavLink>

              {/* DROPDOWN MENU */}
              {servicesDropdownOpen && (
                <div
                  className={`absolute top-full left-0 pt-2 z-50 animate-dropdown-in transition-[width] duration-250 ease-out ${
                    activeSubMenu ? "w-[700px]" : "w-[340px]"
                  } max-w-[calc(100vw-32px)]`}
                  onMouseEnter={handleMenuEnter}
                  onMouseLeave={handleMenuLeave}
                >
                  <div
                    className="rounded-[16px] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex relative overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar"
                    style={{
                      backgroundColor: "rgba(5, 30, 63, 1)",
                      boxShadow: "0px -5px 10.8px 0px rgba(1, 124, 238, 1) inset, 0 16px 36px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {/* LEFT COLUMN - Main Services */}
                    <div className={`flex flex-col gap-1 py-1 w-[316px] flex-shrink-0 transition-all duration-200 ${activeSubMenu ? "pr-3 border-r border-white/10" : ""}`}>
                      {servicesList.map((service, index) => {
                        const isSelected = activeSubMenu === service.name;
                        return (
                          <button
                            key={index}
                            onMouseEnter={() => handleItemEnter(service)}
                            onFocus={() => handleItemEnter(service)}
                            onClick={() => handleServiceClick(service)}
                            className={`text-left px-3.5 py-2.5 text-[14px] rounded-[8px] transition-all duration-150 font-medium tracking-wide w-full cursor-pointer flex items-center justify-between group ${
                              isSelected
                                ? "text-white bg-[#017CEE]/25 pl-4"
                                : "text-gray-300 hover:text-white hover:bg-[#017CEE]/15 hover:pl-4"
                            }`}
                          >
                            <span>{service.name}</span>
                            {service.subItems && service.subItems.length > 0 && (
                              <svg
                                className={`w-3.5 h-3.5 ml-2 transition-all shrink-0 ${
                                  isSelected
                                    ? "text-white opacity-100 translate-x-0.5"
                                    : "text-gray-400 opacity-60 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-0.5"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* RIGHT COLUMN - Submenu Items (ONLY RENDERED WHEN activeSubMenu IS PRESENT) */}
                    {activeSubMenu && (
                      <div
                        key={activeSubMenu}
                        className="w-[360px] flex-shrink-0 flex flex-col justify-start gap-1 pl-3 py-1 animate-submenu-in"
                      >
                        {(() => {
                          const currentService = servicesList.find((s) => s.name === activeSubMenu);
                          const items = currentService?.subItems || [];

                          return items.map((sub, subIdx) => (
                            <button
                              key={subIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleServiceClick(sub);
                              }}
                              className="text-left px-4 py-2.5 text-[13.5px] text-gray-200 hover:text-white hover:bg-[#017CEE]/20 hover:pl-5 rounded-[8px] transition-all duration-150 font-medium tracking-wide w-full cursor-pointer flex items-center justify-between border-b border-white/5 last:border-b-0 group"
                            >
                              <span>{sub.name}</span>
                              <svg
                                className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          ));
                        })()}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>

            {/* 4. Our Gallery */}
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `relative group transition-colors duration-200 cursor-pointer pb-1 ${
                  isActive ? "text-[#1885AA] font-semibold" : "text-gray-700 hover:text-[#1885AA]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Our Gallery
                  {isActive ? (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1885AA] rounded-full"></span>
                  ) : (
                    <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#1885AA] rounded-full transition-all duration-250"></span>
                  )}
                </>
              )}
            </NavLink>

            {/* 5. Articles */}
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `relative group transition-colors duration-200 cursor-pointer pb-1 ${
                  isActive ? "text-[#1885AA] font-semibold" : "text-gray-700 hover:text-[#1885AA]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Articles
                  {isActive ? (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1885AA] rounded-full"></span>
                  ) : (
                    <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#1885AA] rounded-full transition-all duration-250"></span>
                  )}
                </>
              )}
            </NavLink>

            {/* 6. Careers */}
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `relative group transition-colors duration-200 cursor-pointer pb-1 ${
                  isActive ? "text-[#1885AA] font-semibold" : "text-gray-700 hover:text-[#1885AA]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Careers
                  {isActive ? (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1885AA] rounded-full"></span>
                  ) : (
                    <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#1885AA] rounded-full transition-all duration-250"></span>
                  )}
                </>
              )}
            </NavLink>

          </ul>
        </div>

        {/* RIGHT SIDE (CONTACT CTA BUTTON) */}
        <div className="hidden lg:flex flex-shrink-0">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2.5 rounded-full text-[15px] font-semibold text-white bg-[#1885AA] hover:bg-[#136B8D] transition-all shadow-md cursor-pointer active:scale-95"
          >
            Contact Us
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="relative w-5 h-3.5 sm:w-7 sm:h-5 md:w-5 md:h-3.5 flex flex-col justify-between focus:outline-none">
            <span className={`block h-[2px] w-full bg-gray-800 transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px] sm:translate-y-[9px] md:translate-y-[6px]' : ''}`}></span>
            <span className={`block h-[2px] w-full bg-gray-800 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-full bg-gray-800 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px] sm:-translate-y-[9px] md:-translate-y-[6px]' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white border-t border-gray-100 ${open ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 py-4 space-y-3 font-medium">
          
          {/* 1. Home */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#1885AA] font-semibold" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>

          {/* 2. About Us */}
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#1885AA] font-semibold" : "text-gray-700"
              }`
            }
          >
            About Us
          </NavLink>

          {/* 3. Our Services Expandable */}
          <div ref={mobileDropdownRef}>
            <div className="w-full flex items-center justify-between py-1">
              <NavLink
                to="/services"
                onClick={() => setOpen(false)}
                className={() =>
                  `transition-colors font-medium ${
                    isServicesActive ? "text-[#1885AA] font-semibold" : "text-gray-700"
                  }`
                }
              >
                Our Services
              </NavLink>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                className="p-1 focus:outline-none cursor-pointer"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#1885AA]" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {servicesDropdownOpen && (
              <div
                className="mt-2 rounded-[10px] p-2"
                style={{
                  backgroundColor: "rgba(5, 30, 63, 1)",
                  boxShadow: "0px -5px 10.8px 0px rgba(1, 124, 238, 1) inset",
                }}
              >
                {servicesList.map((service, index) => (
                  <div key={index} className="w-full">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleServiceClick(service)}
                        className="flex-1 text-left px-3 py-2 text-[13px] text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors block cursor-pointer"
                      >
                        {service.name}
                      </button>
                      {service.subItems && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileSubMenuOpen(mobileSubMenuOpen === service.name ? null : service.name);
                          }}
                          className="p-2 text-gray-300 hover:text-white focus:outline-none"
                        >
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              mobileSubMenuOpen === service.name ? "rotate-180 text-[#1885AA]" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu Accordion */}
                    {service.subItems && mobileSubMenuOpen === service.name && (
                      <div className="pl-4 pr-1 py-1 flex flex-col gap-1 border-l border-blue-400/30 ml-3 my-1">
                        {service.subItems.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleServiceClick(sub)}
                            className="text-left px-2 py-1.5 text-[12px] text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors block cursor-pointer"
                          >
                            • {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 4. Our Gallery */}
          <NavLink
            to="/gallery"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#1885AA] font-semibold" : "text-gray-700"
              }`
            }
          >
            Our Gallery
          </NavLink>

          {/* 5. Articles */}
          <NavLink
            to="/articles"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#1885AA] font-semibold" : "text-gray-700"
              }`
            }
          >
            Articles
          </NavLink>

          {/* 6. Careers */}
          <NavLink
            to="/careers"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#1885AA] font-semibold" : "text-gray-700"
              }`
            }
          >
            Careers
          </NavLink>


          <li className="pt-2">
            <button
              onClick={() => {
                navigate("/contact");
                setOpen(false);
              }}
              className="w-full text-center px-6 py-3 rounded-md text-[15px] font-semibold text-white bg-[#1885AA] cursor-pointer"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}