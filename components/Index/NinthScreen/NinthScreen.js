import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai/index";

import styles from "./main.module.css";

export default function NinthScreen() {
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.headings}
        initial={{
          top: "50px",
          opacity: 0,
        }}
        whileInView={{
          top: "0px",
          opacity: 1,
          transition: {
            delay: 0.7,
            duration: 0.7,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true }}
      >
        <div className={styles.small_heading}>
          •
          <div
            style={{ height: "1px", width: "100px", backgroundColor: "white" }}
          />
          Our Clients
        </div>

        <h2 className={styles.large_heading}>Your success, our reputation</h2>
      </motion.div>

      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele) => {
          return (
            <div className={styles.brand}>
              <Image
                src={
                  "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                layout="fill"
              />

              <motion.div
                initial={{ height: "50px", width: "50px" }}
                whileHover={{ height: "100%", width: "100%" }}
                className={styles.content}
              >
                <AiOutlinePlus style={{ color: "white" }} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
