import { useNavigate } from "react-router-dom";
import logo from "../assets/footergalactix logo.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import maps from "../assets/maps.png";
import phone from "../assets/phone.png";

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const ourPolicies = [
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  const ChevronIcon = () => (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
      <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <footer className="w-full bg-[#01123E] text-white pt-16 pb-8">
      <div className="max-w-[1620px] mx-auto px-4 md:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16 mb-16">

          {/* COLUMN 1: Logo and About */}
          <div>
            <img src={logo} alt="Galactix Solutions" className="h-14 mb-6 cursor-pointer" onClick={() => navigate("/")} />
            <p className="text-gray-300 text-[15px] leading-relaxed mb-8 max-w-[280px]">
              Engineering tommorow through innovation, research and technology
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Connect with us:</span>
              <a
                href="https://x.com/GalactixGlobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center justify-center text-white"
                aria-label="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 fill-white"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/galactix_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={instagram} alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a
                href="https://www.linkedin.com/company/galactix-solutions-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-5 h-5 object-contain brightness-0 invert"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="w-full flex items-center justify-between py-3 pr-12 text-gray-300 hover:text-white transition-colors text-left"
                  >
                    <span className="text-[15px]">{link.name}</span>
                    <ChevronIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Policies */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Policies</h3>
            <ul className="flex flex-col">
              {ourPolicies.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="w-full flex items-center justify-between py-3 pr-12 text-gray-300 hover:text-white transition-colors text-left"
                  >
                    <span className="text-[15px]">{link.name}</span>
                    <ChevronIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="flex flex-col gap-6">

              <div className="flex items-start gap-6">
                <img src={maps} alt="Address" className="w-5 h-5 mt-1 flex-shrink-0 object-contain" />
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  N Heights , Plot No 12, TSIIC,<br />
                  Software Units Layout, Madhapur,<br />
                  Hyderabad, Telangana 500081.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img src={phone} alt="Phone" className="w-4 h-4 flex-shrink-0 object-contain" />
                <a
                  href="tel:+918019554888"
                  className="text-gray-300 text-[15px] hover:text-white transition-colors"
                >
                  +91 8019554888
                </a>
              </div>

              <div className="flex items-center gap-6">
                <img src={mail} alt="Email" className="w-4 h-4 flex-shrink-0 object-contain" />
                <a
                  href="mailto:hr@galactixsolutions.com"
                  className="text-gray-300 text-[15px] hover:text-white transition-colors"
                >
                  hr@galactixsolutions.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM SECTION (Copyright) */}
        <div className="border-t border-white/10 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Galactix Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}