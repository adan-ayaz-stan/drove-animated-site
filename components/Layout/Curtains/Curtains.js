import { motion, AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isMenuToggled } from "../../../atoms/menuToggle";
import styles from "./main.module.css";

export default function Curtains() {
  const isMenuToggledValue = useRecoilValue(isMenuToggled);

  const arrayLinks = ["Home", "Work", "About", "Blog", "Contact"];

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
            ease: "easeInOut",
          },
        }}
      >
        <AnimatePresence>
          {isMenuToggledValue && (
            <motion.ul
              className={styles.menu}
              initial={{ opacity: 0, left: "-10px" }}
              animate={{
                opacity: 1,
                left: "0px",
                transition: {
                  delay: 2,
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0 }}
            >
              {arrayLinks.map((ele, ind) => {
                return (
                  <motion.li
                    initial={{
                      opacity: 0,
                      left: "-30px",
                      transform: "scale(0.8)",
                    }}
                    animate={{
                      opacity: 1,
                      left: "20px",
                      transform: "scale(1.1)",
                      transition: {
                        delay: ind * 0.2 + 2,
                        duration: 0.4,
                        ease: "easeInOut",
                      },
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <a href="/">{ele}</a>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className={styles.lright}
        animate={{
          left: isMenuToggledValue ? "50%" : "100%",
          transition: {
            duration: 1,
            delay: isMenuToggledValue ? 0 : 1,
            ease: "easeInOut",
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
            ease: "easeInOut",
          },
        }}
      >
        {isMenuToggledValue && (
          <AnimatePresence>
            <motion.div
              className={styles.contact_info}
              initial={{ rotateY: -90 }}
              animate={{
                rotateY: 0,
                transition: {
                  duration: 1,
                  delay: 3,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <p>Pakistan</p>
              <p>Adan Ayaz</p>
              <p>+923256823910</p>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}
