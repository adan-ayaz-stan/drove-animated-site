import { useState } from "react";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { Squeeze as Hamburger } from "hamburger-react";

import { isMenuToggled } from "../../../atoms/menuToggle";

import styles from "./main.module.css";

export default function Navbar() {
  const [isHovered, setHovered] = useState(false);
  const [menuToggled, setMenuToggled] = useRecoilState(isMenuToggled);

  return (
    <motion.div
      className={styles.main}
      animate={{
        color: menuToggled ? "#fff" : "#000",
        transition: {
          duration: 0.7,
        },
      }}
    >
      <div className={`${styles.logo} link`}>DROVE</div>
      <div
        className={`${styles.menu} link`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setMenuToggled(!menuToggled)}
      >
        <Hamburger
          size={20}
          duration={0.4}
          toggled={menuToggled}
          onToggle={(toggle) => {
            if (toggle) {
              setMenuToggled(true);
            } else {
              setMenuToggled(false);
            }
          }}
          distance={isHovered ? "sm" : "lg"}
          easing={"ease-in"}
          hideOutline={false}
        />
        <div className={styles.menu_text}>
          <div>
            <motion.span
              style={{ position: "relative" }}
              animate={{
                opacity: isHovered ? 0 : 1,
                transition: {
                  delay: isHovered ? 0.2 : 0.5,
                  duration: 0.5,
                },
              }}
            >
              Menu
            </motion.span>
          </div>
          <div>
            <motion.span
              animate={{
                opacity: !isHovered ? 0 : 1,
                transition: {
                  delay: isHovered ? 0.5 : 0.2,
                  duration: 0.5,
                },
              }}
            >
              {menuToggled ? "Close" : "Open"}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
