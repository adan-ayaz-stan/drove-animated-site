import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./main.module.css";
import { useState } from "react";

export default function SecondScreen() {
  const [isDesignerHovered, setDesignerHovered] = useState(false);

  return (
    <div className={styles.main}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.4,
          },
        }}
        className={styles.heading}
      >
        Hello, we are Drove Drive
      </motion.h1>

      <div className={styles.container}>
        <div className={styles.text_content}>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>

          <div
            className={`${styles.designer_name} link`}
            onMouseEnter={() => setDesignerHovered(true)}
            onMouseLeave={() => setDesignerHovered(false)}
          >
            <span style={{ textTransform: "uppercase" }}>Salvadr Wilhelm</span>
            <motion.div
              initial={{ width: "0px" }}
              animate={{
                width: isDesignerHovered ? "80px" : "0px",
                transition: {
                  duration: 0.7,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.span
              style={{ color: "#aeaeae" }}
              animate={{
                opacity: isDesignerHovered ? 1 : 0,
                transition: {
                  delay: isDesignerHovered ? 0.7 : 0,
                  duration: 0.4,
                },
              }}
            >
              • Digital Artist
            </motion.span>
          </div>

          <div className={styles.experience}>
            <span style={{ fontSize: "5em" }}>25</span>{" "}
            <span
              style={{
                marginTop: "35px",
                width: "250px",
                fontFamily: "Daikon Light",
              }}
            >
              years of digital experience
            </span>
          </div>
        </div>
        <div className={styles.image_content}>
          <div className={styles.image_container}>
            <Image
              src={
                "https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
              }
              alt="table-top-image"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
