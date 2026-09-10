import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { jobOpenings } from "../data/jobOpenings";

// Images
import career1 from "../assets/career1.png";
import career2 from "../assets/career2.png";
import career3 from "../assets/career3.png";
import career4 from "../assets/career4.png";
import career5 from "../assets/career5.png";
import career6 from "../assets/career6.png";
import career7 from "../assets/career7.png";
import career8 from "../assets/career8.png";
import career9 from "../assets/career9.png";
import career10 from "../assets/career10.png";
import career11 from "../assets/career11.png";
import career12 from "../assets/career12.png";
import career13 from "../assets/career13.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 80 },
  }),
};

const culture = [
  {
    icon: career2,
    title: "Innovate Boldly",
    desc: "Work on cutting-edge AI, cloud, and engineering solutions that solve complex challenges.",
  },
  {
    icon: career3,
    title: "Learn Continuously",
    desc: "Access mentorship, training, certifications, and a culture of continuous learning.",
  },
  {
    icon: career4,
    title: "Make an Impact",
    desc: "Your ideas and work create measurable impact across industries and communities.",
  },
  {
    icon: career5,
    title: "Collaborate & Grow",
    desc: "Collaborate with passionate experts and grow together as one team.",
  },
  {
    icon: career6,
    title: "Care & Balance",
    desc: "We care for your well-being with great benefits and a supportive environment.",
  },
];

const Career = () => {
  const scrollToPositions = () => {
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <div className="bg-white font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 xl:gap-20 2xl:gap-24"
        >
          <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
            <h3 className="font-semibold text-base sm:text-lg md:text-xl xl:text-2xl tracking-wide uppercase" style={{ color: "#0825E8" }}>
              Careers At Galactix
            </h3>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-[4rem] font-bold text-gray-900 leading-tight">
              Build Your Career. <br />
              <span style={{ color: "#144EF7" }}>
                Shape the Future.
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At Galactix Solutions, we build more than technology — we build
              people, ideas, and impact. Join a team where innovation thrives,
              growth is continuous, and your work creates real-world value.
            </p>

            <button
              onClick={scrollToPositions}
              className="mt-8 px-8 py-3.5 sm:py-4 rounded-xl text-white font-medium hover:opacity-90 transition-opacity shadow-lg text-sm sm:text-base xl:text-lg cursor-pointer"
              style={{ backgroundColor: "#16126D" }}
            >
              View Open Positions
            </button>
          </div>
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <img src={career13} alt="Careers at Galactix" className="w-full h-auto rounded-2xl md:rounded-3xl object-cover shadow-xl" />
          </div>
        </motion.div>
      </section>

      {/* CULTURE */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-[1440px] mx-auto">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-widest uppercase mb-3 sm:mb-4" style={{ color: "#0825E8" }}>
              WHY JOIN GALACTIX?
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-gray-900 mb-10 md:mb-14 xl:mb-20">
              A Place to Innovate, Grow & Make an Impact
            </h2>

            {/* Grid layout for responsiveness across all devices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-gray-200 border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {culture.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={index}
                  className="bg-white p-6 sm:p-8 xl:p-10 flex flex-col items-center text-center hover:bg-gray-50 transition-colors"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-blue-50 mb-5 sm:mb-6 p-3 shadow-sm border border-blue-100">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>

                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* JOB LISTINGS */}
      <section id="open-positions" className="bg-white pb-16 sm:pb-20 md:pb-24 xl:pb-32 px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-widest uppercase mb-3 sm:mb-4" style={{ color: "#0825E8" }}>
              OPEN POSITIONS
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-10 md:mb-14 xl:mb-16">
              Find Your Next Opportunity
            </h2>

            <div className="space-y-4 md:space-y-5">
              {jobOpenings.map((job, index) => (
                <Link key={job.slug} to={`/careers/${job.slug}`} className="block">
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={index}
                    className="group border border-gray-200 rounded-xl p-5 sm:p-6 lg:p-8 bg-white text-left hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12"
                  >
                    {/* Title & Dept */}
                    <div className="flex-[2] xl:flex-[3]">
                      <h3 className="font-bold text-lg md:text-xl xl:text-2xl text-gray-900 group-hover:text-blue-700 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 mt-1">
                        {job.dept}
                      </p>
                    </div>

                    {/* Meta Group (Location & Type) */}
                    <div className="flex-[2] grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <span className="text-sm md:text-base text-gray-700 font-medium">{job.location}, India</span>
                        <span className="text-xs md:text-sm text-gray-400 mt-0.5">On-site</span>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm md:text-base text-gray-700 font-medium">{job.type}</span>
                        <span className="text-xs md:text-sm text-gray-400 mt-0.5">Employment</span>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-2 md:mt-0 flex justify-start md:justify-end flex-1">
                      <div
                        className="inline-flex items-center gap-2 border px-4 py-2 md:px-5 md:py-2.5 xl:px-6 xl:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors group-hover:bg-blue-50 whitespace-nowrap"
                        style={{ color: "#2249F1", borderColor: "#2249F1" }}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* LIFE AT GALACTIX */}
      <section className="py-10 pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1440px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 md:p-12 lg:p-16 xl:py-20 xl:px-8 2xl:px-12 flex flex-col xl:flex-row items-center gap-8 lg:gap-10 xl:gap-12 relative"
          style={{ backgroundColor: "#030637" }}
        >
          {/* Subtle horizontal lines as seen in screenshot */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-blue-900/30 hidden md:block"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-blue-900/30 hidden md:block"></div>

          {/* Left Text */}
          <div className="w-full xl:w-[25%] 2xl:w-[25%] text-center xl:text-left relative z-10 flex-shrink-0">
            <h3 className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-white/70 uppercase mb-4 sm:mb-6 border-b border-blue-800/50 pb-2 sm:pb-3 inline-block">
              LIFE AT GALACTIX
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
              We're More Than Colleagues, We're a Community
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto xl:mx-0">
              We celebrate ideas, diversity, and collaboration. From hackathons to team outings, every moment here is an opportunity to connect and grow.
            </p>
          </div>

          {/* Right Images */}
          <div className="w-full xl:w-[75%] 2xl:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 relative z-10">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 flex flex-col">
              <img src={career7} alt="Collaborate" className="w-full h-40 sm:h-44 xl:h-48 object-cover" />
              <div className="p-4 sm:p-5 flex items-center justify-center lg:justify-start gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <img src={career10} alt="Icon" className="w-4  h-4 object-contain" />
                </div>
                <span className="font-bold text-gray-800 text-sm md:text-base">Collaborate</span>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 flex flex-col">
              <img src={career1} alt="Innovate" className="w-full h-40 sm:h-44 xl:h-48 object-cover" />
              <div className="p-4 sm:p-5 flex items-center justify-center lg:justify-start gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <img src={career11} alt="Icon" className="w-4 h-4 object-contain" />
                </div>
                <span className="font-bold text-gray-800 text-sm md:text-base">Innovate</span>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1 flex flex-col">
              <img src={career9} alt="Have Fun" className="w-full h-40 sm:h-44 xl:h-48 object-cover" />
              <div className="p-4 sm:p-5 flex items-center justify-center lg:justify-start gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <img src={career12} alt="Icon" className="w-4 h-4 object-contain" />
                </div>
                <span className="font-bold text-gray-800 text-sm md:text-base">Have Fun</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      </div>
    </Layout>
  );
};

export default Career;