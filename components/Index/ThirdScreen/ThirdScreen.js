import styles from "./main.module.css";

import bulbSvg from "../../../cms/svgs/bulb.svg";
import vectorSvg from "../../../cms/svgs/vector.svg";
import stackSvg from "../../../cms/svgs/stack.svg";
import Image from "next/image";

export default function ThirdScreen() {
  const sampleArray = [
    {
      img: bulbSvg,
      heading: "Digital Products",
      description:
        "Web design encompasses many different skills and disciplines in the production of all web.",
    },
    {
      img: vectorSvg,
      heading: "UI-UX Design",
      description:
        "Web design encompasses many different skills and disciplines in the production of all web.",
    },
    {
      img: stackSvg,
      heading: "Web Development",
      description:
        "Web design encompasses many different skills and disciplines in the production of all web.",
    },
  ];

  return (
    <div className={styles.main}>
      <h4 className={styles.small_heading}>
        {"•"}
        <div
          style={{ height: "1px", width: "100px", backgroundColor: "black" }}
        />
        Our Services
      </h4>

      <h1 className={styles.large_heading}>New Branding Agency</h1>

      <div className={styles.cards_container}>
        {sampleArray.map((ele, ind) => {
          return (
            <div
              className={styles.card}
              style={ind == 1 ? { backgroundColor: "rgb(10, 10, 10)" } : {}}
            >
              <div className={styles.card_image}>
                <Image src={ele.img} alt="card-image" layout="fill" />
              </div>
              <h2>{ele.heading}</h2>
              <p>{ele.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
