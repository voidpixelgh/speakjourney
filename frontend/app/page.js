import React from "react";
import Image from "next/image";
import Nature from "../assets/images/Speakjourney_Map1.png";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles["nature-image"]}>
      <Image src={Nature} layout="fill" objectFit="cover" quality={100} />
      <h1 className="text-dark" style={{fontFamily : "cursive"}}>Your Language Odyssey begins here!</h1>
    </div>
  );
}
