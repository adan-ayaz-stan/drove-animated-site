import Image from "next/image";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectCreative, Navigation } from "swiper";
import { Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/thumbs";
// Import Icons
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md/index";

import styles from "./main.module.css";

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

  return (
    <div className={styles.main}>
      <Swiper
        className={styles.slider}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(slide) => {
          console.log(slide);
          const index = slide.activeIndex;
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
        {sampleArray.map((ele, ind) => {
          return (
            <SwiperSlide
              className={styles.slide}
              key={ind * Math.random() + 152}
            >
              <Image src={ele.img} alt="image" layout="fill" loading="lazy" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.current_slide_and_thumb_slider}>
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
                <SwiperSlide className={styles.thumb_slide}>
                  <Image
                    src={ele.img}
                    alt="image"
                    layout="fill"
                    loading="lazy"
                  />
                  <h3>{"0" + (+ind + 1)}</h3>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className={styles.navigation}>
        <div className={styles.nav_prev} id="slider-prev-el">
          <MdNavigateBefore />
        </div>
        <div className={styles.nav_next} id="slider-next-el">
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
}
