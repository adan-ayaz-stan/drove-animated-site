import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai/index";

import styles from "./main.module.css";
import BrandLogo from "./miniComponents/BrandLogo";

const sampleData = [
  {
    img: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/5965324/pexels-photo-5965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/8449324/pexels-photo-8449324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/5965324/pexels-photo-5965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/8449324/pexels-photo-8449324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

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
        {sampleData.map((ele) => {
          return <BrandLogo img={ele.img} />;
        })}
      </div>
    </div>
  );
}
