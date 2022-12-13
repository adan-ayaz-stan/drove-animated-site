import { motion, useTransform } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isMenuToggled } from "../../../atoms/menuToggle";
import styles from "./main.module.css";

export default function Curtains() {
  const isMenuToggledValue = useRecoilValue(isMenuToggled);

  const variantLeft = {
    visible: {
      left: "0%",
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      left: "-100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  console.log(isMenuToggledValue);

  return (
    <div className={styles.main}>
      <div className={styles.light}>
        <motion.div
          className={styles.light_left}
          animate={{
            left: isMenuToggledValue ? "0%" : "-100%",
            transition: {
              duration: 0.7,
              type: "just",
            },
          }}
        ></motion.div>
        <motion.div
          animate={{
            left: isMenuToggledValue ? "0%" : "100%",
            transition: {
              duration: 0.7,
              type: "just",
            },
          }}
          className={styles.light_right}
        ></motion.div>
      </div>
      <div className={styles.dark}>
        <motion.div
          animate={{
            left: isMenuToggledValue ? "0%" : "-100%",
            transition: {
              duration: 1,
              type: "just",
              delay: 0.7,
            },
          }}
          className={styles.dark_left}
        ></motion.div>
        <motion.div
          animate={{
            left: isMenuToggledValue ? "0%" : "100%",
            transition: {
              duration: 1,
              type: "just",
              delay: 0.7,
            },
          }}
          className={styles.dark_right}
        ></motion.div>
      </div>
    </div>
  );
}
