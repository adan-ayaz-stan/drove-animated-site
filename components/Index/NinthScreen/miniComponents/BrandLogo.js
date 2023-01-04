import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { AiOutlinePlus } from "react-icons/ai/index";

import styles from "./brand-logo.module.css";
import { useState } from "react";

export default function BrandLogo({ img }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <a href="/" className={styles.brand}>
      <Image src={img} layout="fill" />

      <motion.div
        initial={{ height: "30px", width: "30px" }}
        whileHover={{
          height: "100%",
          width: "100%",
          transition: {
            duration: 0.4,
            type: "tween",
          },
        }}
        className={styles.content}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {isHovered == false ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AiOutlinePlus style={{ color: "white" }} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            }}
            exit={{ opacity: 0 }}
            className={styles.name_and_link}
          >
            <h2>Google</h2>

            <a href="/" className="link">
              www.google.com
            </a>
          </motion.div>
        )}
      </motion.div>
    </a>
  );
}
