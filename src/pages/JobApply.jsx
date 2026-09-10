import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Layout from "../components/Layout";
import { jobOpenings } from "../data/jobOpenings";

import career14 from "../assets/career14.png";
import career15 from "../assets/career15.png";
import career16 from "../assets/career16.png";
import apply1 from "../assets/apply1.png";
import apply2 from "../assets/apply2.png";
import apply3 from "../assets/apply3.png";
import apply4 from "../assets/apply4.png";

const JobApply = () => {
  const { slug } = useParams();
  const job = jobOpenings.find((j) => j.slug === slug);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    currentJobTitle: "",
    totalExperience: "",
    currentCompany: "",
    interestReason: "",
    noticePeriod: "",
    expectedSalary: "",
    confirmTruth: false,
  });

  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  if (!job) {
    return (
      <Layout>
        <div className="bg-[#F4F7FC] min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Position Not Found</h1>
            <Link to="/careers" className="text-blue-600 font-bold hover:underline">
              Back to Careers
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    if (!formData.confirmTruth) {
      alert("Please confirm the information provided is true.");
      return;
    }

    console.log("Form Data:", formData);
    console.log("Resume:", resumeFile);
    alert("Application submitted successfully!");
  };

  return (
    <Layout>
      <div className="bg-white font-sans overflow-x-hidden">
        {/* HERO SECTION */}
      <section className="bg-[#F0F4F8] pt-12 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1440px] mx-auto"
        >
          <Link
            to={`/careers/${job.slug}`}
            className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-[#00173A] mb-6 md:mb-10 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back to job details
          </Link>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1731] mb-6 md:mb-10">
            Apply for {job.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-[#0A1731] font-medium text-sm sm:text-base">
              <img src={career14} alt="Location" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-[#0A1731] font-medium text-sm sm:text-base">
              <img src={career15} alt="Type" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-[#0A1731] font-medium text-sm sm:text-base">
              <img src={career16} alt="Experience" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
              <span>{job.experience}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <form onSubmit={handleSubmit} className="border border-gray-100 rounded-[2rem] p-6 sm:p-10 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-12">
            
            {/* PERSONAL INFORMATION */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-[#F0F4F8] rounded-lg flex items-center justify-center">
                  <img src={apply1} alt="Personal Info" className="w-5 h-5 object-contain" />
                </div>
                <h2 className="text-xl font-bold text-[#0A1731]">Personal Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Current Location <span className="text-red-500">*</span></label>
                  <input required name="location" value={formData.location} onChange={handleChange} placeholder="Enter your current location" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">LinkedIn Profile <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
                  <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://www.linkedin.com/in/yourprofile" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Portfolio / GitHub / Website <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
                  <input name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Enter portfolio, GitHub or website link" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
              </div>
            </div>

            {/* PROFESSIONAL INFORMATION */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-[#F0F4F8] rounded-lg flex items-center justify-center">
                  <img src={apply2} alt="Professional Info" className="w-5 h-5 object-contain" />
                </div>
                <h2 className="text-xl font-bold text-[#0A1731]">Professional Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Current Job Title</label>
                  <input name="currentJobTitle" value={formData.currentJobTitle} onChange={handleChange} placeholder="Enter your current job title" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Total Experience (Years) <span className="text-red-500">*</span></label>
                  <select required name="totalExperience" value={formData.totalExperience} onChange={handleChange} className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]">
                    <option value="" disabled>Select your total experience</option>
                    <option value="0-1">0-1 Years</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5-8">5-8 Years</option>
                    <option value="8+">8+ Years</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Current Company</label>
                  <input name="currentCompany" value={formData.currentCompany} onChange={handleChange} placeholder="Enter your current company name" className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700" />
                </div>
              </div>
            </div>

            {/* APPLICATION DETAILS */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-[#F0F4F8] rounded-lg flex items-center justify-center">
                  <img src={apply3} alt="Application Details" className="w-5 h-5 object-contain" />
                </div>
                <h2 className="text-xl font-bold text-[#0A1731]">Application Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Why are you interested in this role? <span className="text-red-500">*</span></label>
                  <textarea required name="interestReason" value={formData.interestReason} onChange={handleChange} placeholder="Tell us why you are interested in this role and how you can contribute to Galactix." rows={4} className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700 resize-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Notice Period <span className="text-red-500">*</span></label>
                  <select required name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]">
                    <option value="" disabled>Select your notice period</option>
                    <option value="Immediate">Immediate</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                    <option value="60 Days">60 Days</option>
                    <option value="90+ Days">90+ Days</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] sm:text-xs font-bold text-[#0A1731] uppercase tracking-wider">Expected Salary (CTC) <span className="text-red-500">*</span></label>
                  <select required name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]">
                    <option value="" disabled>Select your expected salary</option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Standard Industry Hike">Standard Industry Hike</option>
                    <option value="Specific Expectation">Specific Expectation (mention in email)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* UPLOAD RESUME */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-[#F0F4F8] rounded-lg flex items-center justify-center">
                  <img src={apply4} alt="Upload Resume" className="w-5 h-5 object-contain" />
                </div>
                <h2 className="text-xl font-bold text-[#0A1731]">Upload Your Resume</h2>
              </div>
              
              <div 
                className="w-full border-2 border-dashed border-[#9BCAFC] rounded-2xl py-12 px-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#F0F4F8] transition-colors"
                onClick={() => fileInputRef.current.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <div className="w-12 h-12 mb-3">
                  <img src={apply4} alt="Upload" className="w-full h-full object-contain" />
                </div>
                <p className="text-[#0A1731] font-medium text-sm sm:text-base mb-1">
                  Drag & drop your resume here or <span className="text-blue-600 hover:underline">browse</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {resumeFile ? resumeFile.name : "Supported formats: PDF, DOC, DOCX (Max 5MB)"}
                </p>
              </div>
            </div>

            {/* CHECKBOX & SUBMIT */}
            <div className="space-y-8 pt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="confirmTruth" 
                  checked={formData.confirmTruth} 
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  I confirm that the information provided is true to the best of my knowledge. <span className="text-red-500">*</span>
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#0A1731] hover:bg-[#152955] transition-colors text-white font-semibold py-3 px-8 sm:py-3.5 rounded-lg text-sm sm:text-base shadow-lg whitespace-nowrap"
              >
                Submit Application <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            
          </form>
        </div>
      </section>

      </div>
    </Layout>
  );
};

export default JobApply;