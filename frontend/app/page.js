import React from "react";
import Image from "next/image";
import Nature from "../assets/images/Speakjourney_Map1.png";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles["nature-image"]}>
      <Image src={Nature} layout="fill" objectFit="cover" quality={100} />
      
      <div className="container mt-lg-5">
        <div className="row">
          <div className="col">
          <h1 className="text-dark" style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
          Your Language Odyssey begins here!
        </h1>
          </div>
        </div>
      </div>
<br />
      <div className="container">
        <div className="row">
          <div className="col-lg-8" style={{ backgroundColor: "white", position: "relative", zIndex: 2 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corrupti repellendus cupiditate quibusdam in officia assumenda quod ea nisi provident harum at iste praesentium qui quia, obcaecati, odio maxime eos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
