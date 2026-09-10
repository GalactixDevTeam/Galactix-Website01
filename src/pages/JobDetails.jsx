import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail, Phone, BookOpen } from "lucide-react";

import Layout from "../components/Layout";
import { jobOpenings } from "../data/jobOpenings";

import career14 from "../assets/career14.png";
import career15 from "../assets/career15.png";
import career16 from "../assets/career16.png";
import career17 from "../assets/career17.png";
import career18 from "../assets/career18.png";
import career19 from "../assets/career19.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const JobDetails = () => {
  const { slug } = useParams();
  const job = jobOpenings.find((j) => j.slug === slug);

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

  const targetEmail = job.applicationEmail || "vinaynath@galactixsolutions.com";
  const mailtoHref = `mailto:${targetEmail}?subject=${encodeURIComponent(`Application for ${job.title}`)}&body=${encodeURIComponent(`Hi Galactix Team,\n\nI would like to apply for the ${job.title} position.\n\nPlease find my resume/CV attached.\n\nBest regards,\n`)}`;

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
              to="/careers"
              className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-[#00173A] mb-6 md:mb-10 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Back to careers
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1731] mb-6 md:mb-10">
              {job.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
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

            {/* Single-line Email / Contact Apply Banner */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3.5 sm:p-4 px-4 sm:px-6 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200/90 shadow-sm">
              <div className="flex items-center gap-2.5 text-sm sm:text-base text-[#0A1731] font-medium flex-wrap">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#2458F5] shrink-0" />
                  <span>
                    Mail or drop your resume/CV at{" "}
                    <a
                      href={mailtoHref}
                      className="font-bold text-[#2458F5] hover:underline"
                    >
                      {targetEmail}
                    </a>
                  </span>
                </div>
                {job.phone && (
                  <div className="flex items-center gap-2 sm:border-l sm:border-gray-200 sm:pl-3">
                    <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#2458F5] shrink-0" />
                    <span>
                      Contact:{" "}
                      <a
                        href={`tel:${job.phone}`}
                        className="font-bold text-[#2458F5] hover:underline"
                      >
                        {job.phone}
                      </a>
                    </span>
                  </div>
                )}
              </div>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 bg-[#0A1731] hover:bg-[#152955] transition-colors text-white font-semibold py-2 px-4 sm:py-2.5 sm:px-5 rounded-lg text-sm shadow whitespace-nowrap self-start sm:self-auto sm:ml-2"
              >
                Send Email <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* CONTENT SECTION */}
        <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="max-w-[1440px] mx-auto space-y-12 md:space-y-16"
          >
            {/* About */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1731] mb-4 sm:mb-6">
                About the Role
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0F4F8] rounded-lg flex items-center justify-center shrink-0">
                  <img src={career17} alt="Responsibilities" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1731]">
                  Key Responsibilities
                </h2>
              </div>
              <ul className="space-y-4">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-[#0A1731] mt-2 shrink-0"></span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Provided (if present) */}
            {job.trainingProvided && job.trainingProvided.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0F4F8] rounded-lg flex items-center justify-center shrink-0">
                    <img src={career18} alt="Training Provided" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1731]">
                    Training Provided
                  </h2>
                </div>
                <ul className="space-y-4">
                  {job.trainingProvided.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-[#0A1731] mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Qualifications / Eligibility */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0F4F8] rounded-lg flex items-center justify-center shrink-0">
                  <img src={career18} alt="Eligibility" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1731]">
                  {job.trainingProvided ? "Eligibility" : "Qualifications"}
                </h2>
              </div>
              <ul className="space-y-4">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-[#0A1731] mt-2 shrink-0"></span>
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Banner */}
            <div className="bg-[#EAF3FA] rounded-xl sm:rounded-2xl py-6 px-6 sm:py-8 sm:px-10 lg:py-8 lg:px-16 -mx-2 sm:-mx-6 lg:-mx-12 mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 md:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#9BCAFC] rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <img src={career19} alt="Contact" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                </div>
                <div className="pt-1 sm:pt-2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1731] mb-1 sm:mb-2">
                    Ready to Build the Future with Us?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Mail or drop your resume/CV at{" "}
                    <a
                      href={mailtoHref}
                      className="font-semibold text-[#2458F5] hover:underline"
                    >
                      {targetEmail}
                    </a>
                    {job.phone && (
                      <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">
                        or call{" "}
                        <a
                          href={`tel:${job.phone}`}
                          className="font-semibold text-[#2458F5] hover:underline"
                        >
                          {job.phone}
                        </a>
                      </span>
                    )}
                  </p>
                </div>
              </div>
              
              <a
                href={mailtoHref}
                className="shrink-0 inline-flex items-center gap-2 bg-[#0A1731] hover:bg-[#152955] transition-colors text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-8 rounded-lg text-sm sm:text-base shadow-lg whitespace-nowrap"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> Mail Resume
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default JobDetails;
