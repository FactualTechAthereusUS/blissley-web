"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function SplitWords({ text, className, style, delay = 0 }: Props) {
  const words = text.split(" ");

  return (
    <span className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span style={{ display: "inline-block" }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
