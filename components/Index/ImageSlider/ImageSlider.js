import Image from "next/image";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper";
import { Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/thumbs";
// Import Icons
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md/index";
import { AiFillRightCircle } from "react-icons/ai/index";
// Import Framer Motion
import { motion } from "framer-motion";

import styles from "./main.module.css";
import SocialsLink from "./miniComponents/SocialsLink";
import Navbar from "../Navbar/Navbar";

const sampleArray = [
  {
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
];
const thumbArray = [
  {
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1280&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1280&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1280&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1280&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1280&h=750&dpr=1",
  },
];

export default function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const variants = {
    visible: (ind) => ({
      left: "0px",
      opacity: 1,
      transition: {
        delay: ind * 0.1 + 0.7,
      },
    }),
    hidden: { opacity: 0, left: "-50px" },
  };

  return (
    <div className={styles.main}>
      <div style={{ position: "absolute", top: "0", left: "0", width: "100%" }}>
        <Navbar />
      </div>
      <Swiper
        className={styles.slider}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(slide) => {
          console.log(slide);
          const index = slide.activeIndex;
          document.getElementById("slide-number").innerText = "0" + (index + 1);
          thumbsSwiper.slideTo(index);
        }}
        slideToClickedSlide={true}
        navigation={{
          prevEl: "#slider-prev-el",
          nextEl: "#slider-next-el",
        }}
        grabCursor={false}
        effect={"creative"}
        speed={1500}
        modules={[EffectCreative, Thumbs, Navigation]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        <h1 id="slide-number" className={styles.slide_number}>
          01
        </h1>
        {sampleArray.map((ele, ind) => {
          const h1str = "Time Tag Watch";
          const strArray = h1str.split("");

          return (
            <SwiperSlide
              className={styles.slide}
              key={ind * Math.random() + 152}
            >
              <Image src={ele.img} alt="image" layout="fill" loading="lazy" />
              <div className={styles.slide_content_wrapper}>
                <div className={styles.slide_content}>
                  <div className={styles.slide_content__category}>
                    <motion.div
                      initial={{ width: "0px" }}
                      whileInView={{
                        width: "100px",
                        transition: {
                          delay: 0.7,
                          duration: 1,
                          ease: "easeInOut",
                          type: "spring",
                        },
                      }}
                    />
                    <h3>Brands</h3>
                  </div>

                  <h1 className="link">
                    {strArray.map((ele, i) => {
                      return (
                        <motion.span
                          custom={i}
                          style={{
                            position: "relative",
                            transition: "all ease .1s",
                          }}
                          variants={variants}
                          initial={"hidden"}
                          whileInView={"visible"}
                          key={i * Math.random() * 2.54}
                        >
                          {ele}
                        </motion.span>
                      );
                    })}
                  </h1>

                  <p>
                    Sometimes, we need to check the time, wondering when our
                    work or meeting will finish, without getting caught by
                    others.
                  </p>

                  <a href="/">
                    {" "}
                    <AiFillRightCircle style={{ fontSize: "2.5em" }} /> View
                    Case
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.thumb_slider_container}>
        <Swiper
          className={styles.thumb_slider}
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
            swiper.slides[`${swiper.activeIndex}`].style.left = "0px";
          }}
          onSlideChange={(slide) => {
            // console.log(slide);
            //
            slide.slides.forEach((slidex) => {
              slidex.style.left = "-100px";
            });
            // slide.clickedSlide.style.left = "0px";
            slide.slides[`${slide.activeIndex}`].style.left = "0px";
          }}
          spaceBetween={10}
          slidesPerView={3}
          direction={"vertical"}
          slideToClickedSlide={true}
          allowTouchMove={false}
          initialSlide={0}
          centeredSlides={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
        >
          {thumbArray.map((ele, ind) => {
            return (
              <SwiperSlide
                className={styles.thumb_slide}
                key={ind * Math.random()}
              >
                <Image src={ele.img} alt="image" layout="fill" loading="lazy" />
                <h3>{"0" + (+ind + 1)}</h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={styles.navigation}>
        <motion.div
          className={styles.nav_prev}
          id="slider-prev-el"
          whileHover={{
            left: "-5px",
            boxShadow: "0 0 10px 3px #000",
            transition: {
              duration: 0.4,
            },
          }}
        >
          <MdNavigateBefore />
        </motion.div>
        <motion.div
          className={styles.nav_next}
          id="slider-next-el"
          whileHover={{
            left: "5px",
            boxShadow: "0 0 10px 3px #000",
            transition: {
              duration: 0.4,
            },
          }}
        >
          <MdNavigateNext />
        </motion.div>
      </div>

      <SocialsLink />
    </div>
  );
}
