import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "../components/Layout";
import LazyImage from "../components/LazyImage";
import { articlesData } from "../data/articlesData";

import articlesHero from "../assets/articleshero.png";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

export default function Articles() {
    const scrollToArticles = () => {
        const element = document.getElementById("latest-articles");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Layout>
            <div className="w-full bg-white text-gray-900 font-sans overflow-x-hidden">

                {/* ── 1. HERO SECTION ── */}
                <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

                        {/* Left — Text */}
                        <motion.div
                            className="flex flex-col justify-center items-start order-2 lg:order-1"
                            initial="hidden"
                            animate="show"
                            variants={stagger}
                        >
                            <motion.div variants={fadeUp} className="mb-3 sm:mb-4">
                                <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#0825E8] block">
                                    Insights & Articles
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] font-bold text-[#000000] tracking-tight leading-[1.12] mb-4 sm:mb-5 lg:mb-6"
                            >
                                Ideas. Perspectives.
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                Real-World Impact.
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="text-[15px] sm:text-[16px] lg:text-[18px] text-[#000000] font-normal leading-relaxed mb-6 sm:mb-8 max-w-xs sm:max-w-sm lg:max-w-lg"
                            >
                                Thoughts, stories and expert insights on technology, innovation, and the future.
                            </motion.p>

                            <motion.div variants={fadeUp}>
                                <button
                                    onClick={scrollToArticles}
                                    className="bg-[#16126D] hover:bg-[#120e5c] text-white px-6 py-3 sm:px-7 sm:py-3 lg:px-8 lg:py-3.5 rounded-[10px] font-semibold text-[14px] sm:text-[15px] shadow-sm transition-all active:scale-95 cursor-pointer"
                                >
                                    Explore Articles
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Right — Hero Image */}
                        <motion.div
                            className="flex justify-center lg:justify-end order-1 lg:order-2"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div
                                className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[700px] xl:max-w-[780px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                                style={{ borderRadius: "24px 24px 24px 80px" }}
                            >
                                <img
                                    src={articlesHero}
                                    alt="Articles - Ideas, insights, and perspectives on the future of AI"
                                    loading="lazy"
                                    className="w-full h-auto block object-cover"
                                    style={{ borderRadius: "24px 24px 24px 80px" }}
                                />
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* ── 2. LATEST ARTICLES SECTION ── */}
                <section id="latest-articles" className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20">

                    {/* Header */}
                    <div className="mb-8 sm:mb-10 lg:mb-14">
                        <span className="text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-[0.16em] text-[#0825E8] uppercase block mb-3 sm:mb-4">
                            LATEST ARTICLES
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#000000] tracking-tight leading-tight">
                            Explore Our Latest Insights
                        </h2>
                        <div className="w-14 sm:w-16 h-[2.5px] bg-[#0825E8] rounded-full mt-3"></div>
                    </div>

                    {/* Article Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {articlesData.map((article) => (
                            <motion.div
                                key={article.id}
                                variants={fadeUp}
                                className="h-full"
                            >
                                <Link
                                    to={`/articles/${article.id}`}
                                    className="h-full bg-white border border-[#E5E7EB] rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 lg:p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between block"
                                >
                                    <div>
                                        {/* Banner Image */}
                                        <div className="w-full rounded-[12px] sm:rounded-[16px] overflow-hidden mb-4 sm:mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
                                            <LazyImage
                                                src={article.image}
                                                alt={article.cardTitle}
                                                className="w-full h-auto block object-contain"
                                            />
                                        </div>

                                        {/* Title & Arrow */}
                                        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                                            <h3 className="text-[16px] sm:text-[17px] lg:text-[19px] font-bold text-[#201367] leading-snug">
                                                {article.cardTitle}
                                            </h3>
                                            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#156399] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-all shadow-sm">
                                                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#000000] leading-relaxed line-clamp-4 font-normal">
                                            {article.cardDesc}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                </section>

            </div>
        </Layout>
    );
}
