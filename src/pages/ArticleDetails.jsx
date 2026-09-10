import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import Layout from "../components/Layout";
import LazyImage from "../components/LazyImage";
import { articlesData } from "../data/articlesData";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ArticleDetails() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = articlesData.find((a) => a.id === slug) || articlesData[0];

  let relatedArticles = [];
  if (article.relatedIds && article.relatedIds.length > 0) {
    relatedArticles = article.relatedIds
      .map((id) => articlesData.find((a) => a.id === id))
      .filter(Boolean);
  } else {
    relatedArticles = articlesData.filter((a) => a.id !== article.id).slice(0, 3);
  }

  return (
    <Layout>
      <div className="w-full bg-white text-gray-900 font-sans overflow-x-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20">

          {/* ── 1. ARTICLE HEADER / HERO ── */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center pb-8 sm:pb-10 lg:pb-12"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {/* Left — Text */}
            <motion.div variants={fadeUp} className="flex flex-col justify-center order-2 lg:order-1">

              {/* Breadcrumbs */}
              <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-[14px] lg:text-[15px] font-medium text-[#2563EB] mb-4 sm:mb-5 lg:mb-6">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="font-bold">&gt;</span>
                <Link to="/articles" className="hover:underline">Articles</Link>
                <span className="font-bold">&gt;</span>
                <span className="font-bold line-clamp-1">{article.title}</span>
              </div>

              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block bg-[#EFF6FF] text-[#2563EB] text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-[6px] tracking-wide uppercase">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#000000] tracking-tight leading-[1.15] mb-4 sm:mb-5">
                {article.title}
              </h1>

              {/* Subtitle */}
              <h2 className="text-base sm:text-lg lg:text-[21px] font-bold text-[#334155] leading-snug mb-4 sm:mb-5">
                {article.subtitle}
              </h2>

              {/* Tagline */}
              <p className="text-[13.5px] sm:text-[15px] lg:text-[16px] text-[#475569] font-normal mb-4 sm:mb-5">
                {article.tagline}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-[13px] text-[#000000] font-medium">
                <span>{article.author}</span>
              </div>
            </motion.div>

            {/* Right — Hero Image */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-full rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
                <LazyImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto block object-contain"
                />
              </div>
            </motion.div>
          </motion.div>


          {/* ── 2. ARTICLE CONTENT SECTIONS ── */}
          <motion.div
            className="w-full space-y-7 sm:space-y-8 lg:space-y-9 pt-2 pb-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            {article.sections?.map((section, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <h3 className="text-[17px] sm:text-[19px] lg:text-[21px] font-bold text-[#07144F] mb-2 sm:mb-3">
                  {section.heading}
                </h3>

                {section.type === "bullets" && (
                  <ul className="space-y-1.5 list-none pl-1">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 sm:gap-2.5 text-[13px] sm:text-[14px] lg:text-[15px] text-[#334155] font-normal">
                        <span className="text-[#07144F] text-base leading-none select-none shrink-0 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.type === "mixed" && (
                  <div className="space-y-3">
                    {section.intro && (
                      <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#475569] leading-[1.75] font-normal">
                        {section.intro}
                      </p>
                    )}
                    {section.bullets && (
                      <ul className="space-y-1.5 list-none pl-1">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 sm:gap-2.5 text-[13px] sm:text-[14px] lg:text-[15px] text-[#334155] font-normal">
                            <span className="text-[#07144F] text-base leading-none select-none shrink-0 mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {(!section.type || section.type === "paragraphs") && (
                  <div className="space-y-3">
                    {section.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx} className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#475569] leading-[1.75] font-normal">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>


          {/* ── 3. GALACTIX PERSPECTIVE CALLOUT BOX ── */}
          {article.perspective && (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="bg-[#EFF6FF] border border-[#BFDBFE80] rounded-[16px] sm:rounded-[18px] lg:rounded-[22px] p-5 sm:p-6 lg:p-8 mt-10 sm:mt-12 mb-12 sm:mb-16"
            >
              {/* Badge & Icon */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 mb-4 sm:mb-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] bg-[#1D63EE] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 sm:mt-0">
                  <Zap className="w-4 h-4 fill-white text-white" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#1D63EE] uppercase tracking-[0.06em]">
                    {article.perspective.badge}
                  </span>
                  <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#07144F] leading-tight">
                    {article.perspective.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px] sm:text-[13.5px] lg:text-[14.5px] text-[#475569] leading-relaxed mb-3 sm:mb-4">
                {article.perspective.content}
              </p>

              {/* Footer */}
              <p className="text-[12.5px] sm:text-[13px] lg:text-[14px] font-semibold text-[#1D63EE]">
                {article.perspective.footerLink}
              </p>
            </motion.div>
          )}


          {/* ── 4. RELATED ARTICLES ── */}
          <section className="mt-12 sm:mt-16 pt-2 sm:pt-4">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#07144F] tracking-tight mb-6 sm:mb-8">
              Explore Our Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  to={`/articles/${item.id}`}
                  className="bg-white border border-[#E5E7EB] rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="w-full rounded-[12px] sm:rounded-[16px] overflow-hidden mb-4 sm:mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto block object-contain"
                      />
                    </div>

                    {/* Title & Arrow */}
                    <div className="flex items-start justify-between gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3">
                      <h3 className="text-[15px] sm:text-[17px] lg:text-[18px] font-bold text-[#07144F] leading-snug">
                        {item.cardTitle || item.title}
                      </h3>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#156399] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-all shadow-sm">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[12.5px] sm:text-[13.5px] lg:text-[14px] text-[#000000] leading-relaxed line-clamp-3 font-normal">
                      {item.cardDesc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}