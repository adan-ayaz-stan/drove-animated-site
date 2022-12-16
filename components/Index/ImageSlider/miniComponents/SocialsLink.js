// Import framer motion
import { motion } from "framer-motion";

// Import icons
import { TbSocial } from "react-icons/tb/index";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si/index";

import styles from "./socials-link.module.css";
import { useState } from "react";

export default function SocialsLink() {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.socials_container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        width: isHovered ? "300px" : "30px",
        transition: {
          duration: 1,
        },
      }}
    >
      <div className={styles.wrapper_div}>
        <TbSocial style={{ fontSize: "1.5em" }} />
        <motion.div
          className={styles.hr}
          initial={{ width: "0px" }}
          animate={{
            width: isHovered ? "100px" : "0px",
            transition: {
              duration: 1,
            },
          }}
        />
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: {
              duration: 0.4,
              delay: isHovered ? 1 : 0,
            },
          }}
        >
          <SiGithub style={{ color: "#fff" }} />
        </motion.a>
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: {
              duration: 0.4,
              delay: isHovered ? 1.4 : 0,
            },
          }}
        >
          <SiLinkedin style={{ color: "#fff" }} />
        </motion.a>
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: {
              duration: 0.4,
              delay: isHovered ? 1.8 : 0,
            },
          }}
        >
          <SiTwitter style={{ color: "#fff" }} />
        </motion.a>
      </div>
    </motion.div>
  );
}
