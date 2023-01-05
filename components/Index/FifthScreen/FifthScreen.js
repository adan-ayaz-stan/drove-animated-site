import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion } from "framer-motion";

import "swiper/css/pagination";

import styles from "./main.module.css";

const sampleData = [
  {
    img: "https://images.pexels.com/photos/14535943/pexels-photo-14535943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/426976/pexels-photo-426976.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/3750717/pexels-photo-3750717.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/2118483/pexels-photo-2118483.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/1874675/pexels-photo-1874675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
];

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
    <motion.div
      whileInView={() => {
        document.documentElement.setAttribute("data-theme", "dark");
      }}
      viewport={{
        amount: 0.5,
      }}
      className={styles.main}
    >
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
          Our Work
        </div>

        <h2 className={styles.large_heading}>Creative Portfolio Designs</h2>
      </motion.div>

      <Swiper
        spaceBetween={100}
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
        loop={true}
        initialSlide={3}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.75,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1012: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
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
                <Image src={ele.img} alt="background-slide" layout="fill" />

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
    </motion.div>
  );
}
