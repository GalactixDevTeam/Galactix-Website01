import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Layout from "../components/Layout";
import LazyImage from "../components/LazyImage";
import linkedin from "../assets/linkedin.png";
import mapPin from "../assets/mappin.svg";
import contact1 from "../assets/contact1.svg";
import contact2 from "../assets/contact2.svg";
import contact3 from "../assets/contact3.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    privacy_consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Full Name is required";

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      err.email = "Please enter a valid email address";
    }

    if (!form.service) {
      err.service = "Please select a service or inquiry type";
    }

    if (!form.message.trim()) {
      err.message = "Message is required";
    }

    if (!form.privacy_consent) {
      err.privacy_consent = "You must agree to the Privacy Policy before submitting";
    }

    return err;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);

      formData.append(
        "access_key",
        "1e51ca8c-453a-428c-8221-86e0f442f89f"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          privacy_consent: false,
        });
      } else {
        setSubmitError("Something went wrong while submitting your message. Please try again.");
      }
    } catch (error) {
      setSubmitError("Something went wrong while submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="w-full mt-10">
        {/* ── 1. HERO SECTION ── */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-10 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-between h-full space-y-6"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <div className="space-y-4">
                <motion.div variants={fadeUp}>
                  <span className="text-[#0825E8] font-bold text-[16px] tracking-tight">
                    Contact Us
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-[40px] sm:text-[50px] lg:text-[70px] font-bold text-[#000000] tracking-tight leading-[1.15]"
                >
                  Let’s Build Something
                  <br />
                  Intelligent <span className="text-[#16126D]">Together</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-[#000000] text-[16px] max-w-lg leading-relaxed pt-1"
                >
                  Have a project in mind, a question, or just want to say hello?
                  <br />
                  We’d love to hear from you.
                </motion.p>
              </div>

              {/* Quick Info Badges with Dividers */}
              <motion.div
                variants={fadeUp}
                className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0"
              >
                {/* Call Us */}
                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3.5 sm:gap-0 sm:pr-6 lg:pr-8">
                  <div className="w-12 h-12 rounded-[14px] bg-[#EFF6FE] flex items-center justify-center shrink-0">
                    <LazyImage src={contact1} alt="Call Us" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-xs sm:text-[13px] text-gray-500 font-medium sm:mt-3">Call Us</p>
                    <a
                      href="tel:+918019554888"
                      className="text-sm sm:text-[15px] font-bold text-black hover:text-[#0825E8] transition mt-0.5 sm:mt-1"
                    >
                      +91 80195 54888
                    </a>
                  </div>
                </div>

                {/* Vertical Divider 1 */}
                <div className="hidden sm:block w-[1px] h-14 bg-gray-200 mx-2" />

                {/* Email Us */}
                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3.5 sm:gap-0 sm:px-6 lg:px-8">
                  <div className="w-12 h-12 rounded-[14px] bg-[#EFF6FE] flex items-center justify-center shrink-0">
                    <LazyImage src={contact2} alt="Email Us" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-xs sm:text-[13px] text-gray-500 font-medium sm:mt-3">Email Us</p>
                    <a
                      href="mailto:hr@galactixsolutions.com"
                      className="text-sm sm:text-[15px] font-bold text-black hover:text-[#0825E8] transition mt-0.5 sm:mt-1 truncate max-w-[220px]"
                      title="hr@galactixsolutions.com"
                    >
                      hr@galactixsolutions.com
                    </a>
                  </div>
                </div>

                {/* Vertical Divider 2 */}
                <div className="hidden sm:block w-[1px] h-14 bg-gray-200 mx-2" />

                {/* Working Hours */}
                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3.5 sm:gap-0 sm:pl-6 lg:pl-8">
                  <div className="w-12 h-12 rounded-[14px] bg-[#EFF6FE] flex items-center justify-center shrink-0">
                    <LazyImage src={contact3} alt="Working Hours" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-xs sm:text-[13px] text-gray-500 font-medium sm:mt-3">Working Hours</p>
                    <p className="text-sm sm:text-[15px] font-bold text-black mt-0.5 sm:mt-1">
                      Mon-Sat: 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="w-full max-w-[720px] h-[450px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[78px]"
                style={{ borderRadius: "20px 20px 20px 78px" }}
              >
                <LazyImage
                  src="https://res.cloudinary.com/kf1uuvct/image/upload/v1789109262/contact-hero.png"
                  alt="Galactix Solutions Team Discussion"
                  className="w-full h-full object-cover object-center rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[78px]"
                  style={{ borderRadius: "20px 20px 20px 78px" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. FORM & CONTACT INFO SECTION ── */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left — Form Card */}
            <motion.div
              className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h2 className="text-[25px] font-bold text-[#000000] mb-6">
                  Send Us A Message
                </h2>

                {isSuccess ? (
                  <div className="py-12 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Message Submitted!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 max-w-lg leading-relaxed">
                      Thank you for contacting Galactix Solutions. Your message has been successfully submitted. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                        <p className="text-sm font-medium">
                          {submitError}
                        </p>
                      </div>
                    )}

                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-gray-700 mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition ${errors.name
                              ? "border-red-400 focus:ring-red-200"
                              : "border-gray-200 focus:border-[#1E3A8A] focus:ring-blue-100"
                            }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-gray-700 mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your mail address"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition ${errors.email
                              ? "border-red-400 focus:ring-red-200"
                              : "border-gray-200 focus:border-[#1E3A8A] focus:ring-blue-100"
                            }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-medium text-gray-700 mb-1.5"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-[#1E3A8A] focus:ring-blue-100 transition"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-medium text-gray-700 mb-1.5"
                        >
                          Company/ Organization
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Enter your company name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-[#1E3A8A] focus:ring-blue-100 transition"
                        />
                      </div>
                    </div>

                    {/* Row 3: How can we help you? */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-medium text-gray-700 mb-1.5"
                      >
                        How can we help you?
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 transition appearance-none cursor-pointer ${errors.service
                              ? "border-red-400 focus:ring-red-200"
                              : "border-gray-200 focus:border-[#1E3A8A] focus:ring-blue-100"
                            }`}
                        >
                          <option value="" className="text-gray-400">
                            Select a service or inquiry type
                          </option>
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="Web & Portal Development">Web & Portal Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="AI & Intelligent Automation">AI & Intelligent Automation</option>
                          <option value="Cloud & DevOps Services">Cloud & DevOps Services</option>
                          <option value="IT Consulting & Strategy">IT Consulting & Strategy</option>
                          <option value="Other Inquiry">Other Inquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                      {errors.service && (
                        <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                      )}
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-gray-700 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project or requirement..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 resize-none transition ${errors.message
                            ? "border-red-400 focus:ring-red-200"
                            : "border-gray-200 focus:border-[#1E3A8A] focus:ring-blue-100"
                          }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Row 5: Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="privacy_consent"
                          id="privacy_consent"
                          value="agreed"
                          checked={form.privacy_consent}
                          onChange={handleChange}
                          required
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0E1A40] focus:ring-[#0E1A40]"
                        />
                        <span className="text-xs text-gray-600 leading-normal">
                          I agree to the{" "}
                          <a
                            href="/privacy-policy"
                            className="text-gray-900 underline hover:text-[#0284C7] font-medium"
                          >
                            Privacy Policy
                          </a>{" "}
                          and consent to being contacted by Galactix Solutions.
                        </span>
                      </label>
                      {errors.privacy_consent && (
                        <p className="text-red-500 text-xs mt-1">{errors.privacy_consent}</p>
                      )}
                    </div>

                    {/* Row 6: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full sm:w-auto px-8 py-3.5 rounded-xl text-white text-sm font-semibold bg-[#0A1938] hover:bg-[#122858] transition duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                          }`}
                      >
                        <Send className="w-4 h-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right — Contact Information Card */}
            <motion.div
              className="lg:col-span-5 bg-[#EEF4F9] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-start border border-blue-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-7">
                {/* Corporate Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F5] flex items-center justify-center shrink-0 mt-0.5">
                    <LazyImage src={mapPin} alt="Location" className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] text-sm sm:text-base mb-1">
                      Corporate Office
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Plot No. 12, TSIIC, N Heights,
                      <br />
                      3rd Floor, Software Units Layout, Madhapur,
                      <br />
                      Hyderabad - 500081, Telangana, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F5] flex items-center justify-center shrink-0 mt-0.5">
                    <LazyImage src={contact1} alt="Phone" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] text-sm sm:text-base mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+918019554888"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#0284C7] transition block"
                    >
                      +91 80195 54888
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F5] flex items-center justify-center shrink-0 mt-0.5">
                    <LazyImage src={contact2} alt="Email" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] text-sm sm:text-base mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hr@galactixsolutions.com"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#0284C7] transition block break-all"
                    >
                      hr@galactixsolutions.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F5] flex items-center justify-center shrink-0 mt-0.5">
                    <LazyImage src={linkedin} alt="LinkedIn" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] text-sm sm:text-base mb-1">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/company/galactix-solutions-pvt-ltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#0284C7] transition block break-all"
                    >
                      linkedin.com/company/galactix-solutions-pvt-ltd
                    </a>
                  </div>
                </div>
                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F5] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0048e4ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] text-sm sm:text-base mb-1">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/galactix_solutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#0284C7] transition block break-all"
                    >
                      instagram.com/galactix_solutions
                    </a>
                  </div>
                </div>
                {/* X */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F5] flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-[#111827]">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] text-sm sm:text-base mb-1">
                      X
                    </h3>
                    <a
                      href="https://x.com/GalactixGlobal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#0284C7] transition block break-all"
                    >
                      x.com/GalactixGlobal
                    </a>
                  </div>
                </div>


              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 3. MAP SECTION ── */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mb-6">
          <motion.div
            className="w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative bg-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Galactix Solutions Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.576829792672!2d78.3805946!3d17.4374013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935eef86d2fb%3A0xcf650c6984766dc6!2sGalactix%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}


