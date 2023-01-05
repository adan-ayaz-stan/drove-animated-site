import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import { AiFillRightCircle } from "react-icons/ai/index";

import styles from "./main.module.css";
import { useEffect, useRef, useState } from "react";

export default function FourthScreen() {
  const [progress, setProgress] = useState(0);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.onChange((y) => {
      setProgress(y);
    });
  }, []);

  return (
    <div className={styles.main} ref={ref}>
      <motion.div className={styles.bg} style={{ scale: 2.0 - +progress }}>
        <Image
          src={
            "https://images.pexels.com/photos/333513/pexels-photo-333513.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
          }
          alt="insence-image"
          layout="fill"
        />
      </motion.div>

      <div className={styles.banner}>
        <h2>How is your visual identity?</h2>
        <p>
          A system that young people around the world with a club culture and
          techno enthusiasts feel identified. We generated a simple logo that is
          the basis for generating a geometric and liquid system.
        </p>
      </div>
    </div>
  );
}
