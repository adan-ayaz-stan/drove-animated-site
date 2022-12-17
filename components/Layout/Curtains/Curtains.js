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
      <motion.div
        className={styles.lleft}
        animate={{
          left: isMenuToggledValue ? "0%" : "-50%",
          transition: {
            duration: 1,
            delay: isMenuToggledValue ? 0 : 1,
          },
        }}
      ></motion.div>
      <motion.div
        className={styles.dleft}
        animate={{
          left: isMenuToggledValue ? "0%" : "-50%",
          transition: {
            duration: 1,
            delay: isMenuToggledValue ? 1 : 0,
          },
        }}
      ></motion.div>
      <motion.div
        className={styles.lright}
        animate={{
          left: isMenuToggledValue ? "50%" : "100%",
          transition: {
            duration: 1,
            delay: isMenuToggledValue ? 0 : 1,
          },
        }}
      ></motion.div>
      <motion.div
        className={styles.dright}
        animate={{
          left: isMenuToggledValue ? "50%" : "100%",
          transition: {
            duration: 1,
            delay: isMenuToggledValue ? 1 : 0,
          },
        }}
      ></motion.div>
    </div>
  );
}
