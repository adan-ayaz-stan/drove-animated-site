import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";

import styles from "./main.module.css";
import "swiper/css/effect-fade";

export default function SeventhScreen() {
  return (
    <div className={styles.main}>
      <div className={styles.comment_container}>
        <Parallax speed={2}>
          <h1>Feedback from our clients.</h1>
        </Parallax>

        <div className={styles.slider_container}>
          <Swiper
            className={styles.slider}
            slidesPerView={1}
            modules={[Pagination, EffectFade]}
            effect="fade"
            pagination={{
              clickable: true,
              el: "#seventh-screen-slider-pagination",
              bulletElement: "span",
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bullet_active,
            }}
          >
            {/*  */}
            <SwiperSlide className={styles.slide}>
              <p className={styles.comment}>
                "The Briefs Team has been sincerely committed to designing great
                communication around our projects. They are creative and our
                clients love their creative work - and so do we!"
              </p>

              <div className={styles.comment_author}>
                <Image
                  src={
                    "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="comment-author"
                  height={65}
                  width={65}
                />
                <p>- Helen Hesanburg, CEO of Treasure Trove</p>
              </div>
            </SwiperSlide>
            {/*  */}

            {/*  */}
            <SwiperSlide className={styles.slide}>
              <p className={styles.comment}>
                "The Briefs Team has been sincerely committed to designing great
                communication around our projects. They are creative and our
                clients love their creative work - and so do we!"
              </p>

              <div className={styles.comment_author}>
                <Image
                  src={
                    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="comment-author"
                  height={65}
                  width={65}
                />
                <p>- Helen Hesanburg, CEO of Treasure Trove</p>
              </div>
            </SwiperSlide>
            {/*  */}

            {/*  */}
            <SwiperSlide className={styles.slide}>
              <p className={styles.comment}>
                "The Briefs Team has been sincerely committed to designing great
                communication around our projects. They are creative and our
                clients love their creative work - and so do we!"
              </p>

              <div className={styles.comment_author}>
                <Image
                  src={
                    "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="comment-author"
                  height={65}
                  width={65}
                />
                <p>- Helen Hesanburg, CEO of Treasure Trove</p>
              </div>
            </SwiperSlide>
            {/*  */}
          </Swiper>

          <div
            className={styles.pagination}
            id="seventh-screen-slider-pagination"
          ></div>
        </div>

        <div className={styles.commas}>,,</div>
      </div>
    </div>
  );
}
