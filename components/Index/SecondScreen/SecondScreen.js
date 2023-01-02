import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./main.module.css";
import { useEffect, useState } from "react";

export default function SecondScreen() {
  const [isDesignerHovered, setDesignerHovered] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      document.getElementById("second-screen-image").style.backgroundSize =
        88 + window.pageYOffset / 35 + "%";
    });
  }, []);

  return (
    <div className={styles.main}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.8,
            duration: 0.4,
          },
        }}
        // viewport={{ once: true }}
        className={styles.heading}
      >
        Hello, we are Drove Drive
      </motion.h1>

      <div className={styles.container}>
        <div className={styles.text_content}>
          <motion.p>
            {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`
              .split(" ")
              .map((ele, ind) => {
                return (
                  <motion.span
                    initial={{ opacity: 0, top: "10px" }}
                    whileInView={{
                      opacity: 1,
                      top: "0px",
                      transition: {
                        delay: ind * 0.03 + 1.2,
                        duration: 0.1,
                      },
                    }}
                    viewport={{ once: true }}
                  >{` ${ele}`}</motion.span>
                );
              })}
          </motion.p>

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
            <motion.span
              style={{ fontSize: "5em", position: "relative" }}
              initial={{
                opacity: 0,
                top: "10px",
              }}
              whileInView={{
                opacity: 1,
                top: "0px",
                transition: {
                  delay: 0.3,
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
            >
              25
            </motion.span>{" "}
            <motion.span
              style={{
                position: "relative",
                marginTop: "35px",
                width: "250px",
                fontFamily: "Daikon Light",
              }}
              initial={{
                opacity: 0,
                top: "10px",
              }}
              whileInView={{
                opacity: 1,
                top: "0px",
                transition: {
                  delay: 0.6,
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
            >
              years of digital experience
            </motion.span>
          </div>
        </div>
        <div className={styles.image_content}>
          <div
            className={styles.image_container}
            style={{
              background:
                'url("https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1")',
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
            id="second-screen-image"
          >
            {/* <Image
              src={
                "https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
              }
              alt="table-top-image"
              layout="fill"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
