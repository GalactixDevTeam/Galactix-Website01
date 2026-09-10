import { useState, useEffect, useRef } from "react";

export default function LazyImage({ src, alt, className = "", style = {}, ...props }) {
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "80px" } // Triggers only when within 80px of viewport while scrolling
      );

      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setInView(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={inView ? src : undefined}
      alt={alt}
      loading="lazy"
      className={className}
      style={style}
      {...props}
    />
  );
}
