import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion } from "framer-motion";

import "swiper/css/pagination";

import styles from "./main.module.css";

const sampleData = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

export default function FifthScreen() {
  const container = {
    normal: {
      paddingBottom: "0%",
      background: "rgba(0, 0, 0, 0)",
    },
    hover: {
      paddingBottom: "10%",
      background: "rgba(0, 0, 0, 0.4)",
      transition: {
        duration: 0.4,
        delayChildren: 0.7,
      },
    },
  };

  const link = {
    normal: {
      rotateX: 90,
    },
    hover: {
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.7,
      },
    },
  };

  return (
    <div className={styles.main}>
      <div className={styles.headings}>
        <div className={styles.small_heading}>
          •
          <div
            style={{ height: "1px", width: "100px", backgroundColor: "white" }}
          />
          Our Work
        </div>

        <h2 className={styles.large_heading}>Creative Portfolio Designs</h2>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        className={styles.slider}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: "#fifth-screen-slider-pagination",
          bulletElement: "span",
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bullet_active,
        }}
      >
        {sampleData.map((ele, ind) => {
          return (
            <SwiperSlide className={styles.slide} key={ind * Math.random}>
              <motion.div
                variants={container}
                initial={"normal"}
                whileHover={"hover"}
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/2363823/pexels-photo-2363823.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
                  }
                  alt="background-slide"
                  layout="fill"
                />

                <h3>Photography</h3>
                <h1>Bastion Bux</h1>
                <motion.a
                  href="/"
                  variants={link}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  View Case
                </motion.a>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div
        className={styles.pagination}
        id="fifth-screen-slider-pagination"
      ></div>
    </div>
  );
}
