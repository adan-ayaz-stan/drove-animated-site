import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import styles from "./main.module.css";
import Image from "next/image";

const sampleData = [
  {
    img: "https://images.pexels.com/photos/14686142/pexels-photo-14686142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/14887465/pexels-photo-14887465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/11717399/pexels-photo-11717399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function EighthScreen() {
  return (
    <motion.div
      className={styles.main}
      whileInView={() => {
        document.documentElement.setAttribute("data-theme", "dark");
      }}
      viewport={{
        amount: 0.5,
      }}
    >
      <motion.div
        style={{ position: "relative", paddingLeft: "10%" }}
        initial={{ opacity: 0, top: "40px" }}
        whileInView={{
          opacity: 1,
          top: "0px",
          transition: {
            delay: 0.7,
            duration: 0.7,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true }}
      >
        <h4 className={styles.small_heading}>
          {"•"}
          <div
            style={{
              height: "1px",
              width: "100px",
              backgroundColor: "var(--text-color)",
            }}
          />
          Latest News
        </h4>

        <h1 className={styles.large_heading}>Latest and greatest post</h1>
      </motion.div>

      <div className={styles.container}>
        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          className={styles.slider}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: "#eighth-screen-slider-pagination",
            bulletElement: "span",
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bullet_active,
          }}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1.15,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.75,
              spaceBetween: 50,
            },
            1012: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
          }}
        >
          {sampleData.map((ele) => {
            return (
              <SwiperSlide className={styles.slide}>
                <div className={styles.slide_img}>
                  <Image src={ele.img} alt="post" layout="fill" />
                </div>

                <div className={styles.slide_content}>
                  <h3>Web, Brand</h3>
                  <h2>Digital Photography Tips</h2>
                  <p>
                    Simple point-and-shoot digital cameras can give surprising
                    quality when they have the right lenses and sensors.
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          className={styles.pagination}
          id="eighth-screen-slider-pagination"
        ></div>
      </div>
    </motion.div>
  );
}
