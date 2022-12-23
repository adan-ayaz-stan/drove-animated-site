import Image from "next/image";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

import { AiFillRightCircle } from "react-icons/ai/index";

import styles from "./main.module.css";

export default function SixthScreen() {
  const parallex = useParallax({
    speed: -5,
  });

  return (
    <motion.div
      className={styles.main}
      whileInView={() => {
        document.documentElement.setAttribute("data-theme", "light");
      }}
      viewport={{
        amount: 0.5,
      }}
    >
      <div className={styles.image}>
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          <Image
            ref={parallex.ref}
            src={
              "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
            }
            alt="a lot of watches"
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.content}>
        <motion.h1
          initial={{
            top: "50px",
            opacity: 0,
          }}
          whileInView={{
            top: "0px",
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          Time Tag Watch
        </motion.h1>
        <motion.h3
          initial={{
            top: "50px",
            opacity: 0,
          }}
          whileInView={{
            top: "0px",
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          Sometimes, we need to check the time, wondering when our work or
          meeting will finish, without getting caught by others.
        </motion.h3>
        <motion.p
          initial={{
            top: "50px",
            opacity: 0,
          }}
          whileInView={{
            top: "0px",
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          To avoid your boss’s staring eye, you should not roll your eyes to
          check the time. The Time Tag Watch is a consummately appropriate for
          it. Those tags do the role of the hands of the watch. By rotating the
          face of the watch not the hands, it gets harder to be damaged. It
          provides you with experience to feel the time at the end of your
          finger without damaging your watch.
        </motion.p>
        <motion.a
          href="/"
          initial={{
            top: "50px",
            opacity: 0,
          }}
          whileInView={{
            top: "0px",
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          {" "}
          <AiFillRightCircle style={{ fontSize: "2.5em" }} /> Learn More
        </motion.a>
      </div>
    </motion.div>
  );
}
