import { motion } from "framer-motion";

import {
  AiFillBehanceCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai/index";

import styles from "./main.module.css";

export default function Footer() {
  return (
    <div className={styles.main}>
      <motion.div
        initial={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 0%)",
          WebkitTextStroke: "1px white",
          color: "rbga(255, 255, 255, 0)",
        }}
        whileHover={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(10,10,10,1) 100%)",
          WebkitTextStroke: "1px white",
          color: "rbga(255, 255, 255, 1)",
          transition: {
            duration: 0.7,
            delay: 0.2,
            ease: "easeInOut",
          },
        }}
        className={styles.top_section}
      >
        <a href="/">
          <h1 className="link">We are hiring</h1>
        </a>
        <p className="link">Dare and contact us immediately!</p>
      </motion.div>

      <div className={styles.bottom_section}>
        <div>
          <a href="/">
            <h1>Drove</h1>
          </a>
          <div className={styles.social_links}>
            <motion.a
              href="/"
              initial={{ rotateZ: 0 }}
              whileHover={{
                rotateZ: 350,
                transition: {
                  type: "tween",
                  duration: 0.2,
                },
              }}
            >
              <AiOutlineInstagram />
            </motion.a>
            <motion.a
              href="/"
              initial={{ rotateZ: 0 }}
              whileHover={{
                rotateZ: 370,
                transition: {
                  type: "tween",
                  duration: 0.2,
                },
              }}
            >
              <AiFillFacebook />
            </motion.a>
            <motion.a
              href="/"
              initial={{ rotateZ: 0 }}
              whileHover={{
                rotateZ: 350,
                transition: {
                  type: "tween",
                  duration: 0.2,
                },
              }}
            >
              <AiFillTwitterCircle />
            </motion.a>
            <motion.a
              href="/"
              initial={{ rotateZ: 0 }}
              whileHover={{
                rotateZ: 370,
                transition: {
                  type: "tween",
                  duration: 0.2,
                },
              }}
            >
              <AiFillBehanceCircle />
            </motion.a>
          </div>
        </div>

        <div>
          <h2>Navigation</h2>
          <div className={styles.hr} />

          <div className={styles.bottom_section__links}>
            <a href="/">Portfolio</a>
            <a href="/">About</a>
            <a href="/">News</a>
            <a href="/">Contact</a>
          </div>
        </div>

        <div>
          <h2>Contact</h2>
          <div className={styles.hr} />

          <div className={styles.bottom_section__links}>
            <p>
              <strong style={{ color: "white" }}>E</strong> : info@dsngrid.com
            </p>
            <p>
              <strong style={{ color: "white" }}>E</strong> : info@dsngrid.com
            </p>
            <p>
              <strong style={{ color: "white" }}>E</strong> : info@dsngrid.com
            </p>
          </div>
        </div>

        <div>
          <h2>Address</h2>
          <div className={styles.hr} />

          <div className={styles.bottom_section__links}>
            <p>123 Address Street Dimitri</p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "2px",
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(134,134,134,1) 29%, rgba(9,9,9,1) 73%)",
          margin: "0 auto",
        }}
      />

      <div className={styles.footer}>
        <p>2023 Drove Digital Agency</p>
        <p>
          Designed by <span style={{ color: "white" }}>DROVE DRIVE</span>
        </p>
      </div>
    </div>
  );
}
