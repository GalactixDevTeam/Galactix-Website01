import { motion } from "framer-motion";

const SectionHeading = ({ tag, title, description, center = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}
    >
      {tag && (
        <span className="inline-block mb-3 rounded-full border border-blue-300 bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
          {tag}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-gray-500 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;