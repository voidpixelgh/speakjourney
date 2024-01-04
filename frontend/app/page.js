import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nature from "../assets/images/Speakjourney_Map1.png";
import styles from "./Home.module.css";

export default function Home() {
  return (
  <>
    <div className={styles["nature-image"]}>
      <Image src={Nature} layout="fill" objectFit="cover" quality={100} />

      <div className="col-12 mx-auto text-center">
        <h1
          className="text-dark"
          style={{ fontFamily: "cursive", fontWeight: 1000, fontSize: 50 }}
        >
          Your Language Odyssey begins here!
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-11 mx-auto mt-lg-5"
            style={{
              backgroundColor: "white",
              position: "relative",
              zIndex: 2,
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h4
              style={{ fontFamily: "cursive", fontWeight: 1000, fontSize: 20 }}
            >
              <i className="text-center">
                A web3 language learning Game: become fluent in your target
                language with the assistance of an AI teacher for a more
                personalized and fun experience.
              </i>
            </h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Link
            href="/about"
            style={{ textDecoration: "none"}}
          >
            <div
              className="col-4 mx-auto mt-5 text-center"
              style={{
                backgroundColor: "#E3987F",
                position: "relative",
                zIndex: 2,
                borderRadius: "30px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <h4
                style={{
                  fontFamily: "cursive",
                  fontWeight: 1000,
                  fontSize: 20,
                }}
              >
                <i className="text-white">Learn More</i>
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div className={styles["nature-image"]}>
      <Image src={Nature} layout="fill" objectFit="cover" quality={100} />

      <div className="col-12 mx-auto text-center">
        <h1
          className="text-dark"
          style={{ fontFamily: "cursive", fontWeight: 1000, fontSize: 50 }}
        >
          Your Language Odyssey begins here!
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-11 mx-auto mt-lg-5"
            style={{
              backgroundColor: "white",
              position: "relative",
              zIndex: 2,
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h4
              style={{ fontFamily: "cursive", fontWeight: 1000, fontSize: 20 }}
            >
              <i className="text-center">
                A web3 language learning Game: become fluent in your target
                language with the assistance of an AI teacher for a more
                personalized and fun experience.
              </i>
            </h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Link
            href="/about"
            style={{ textDecoration: "none"}}
          >
            <div
              className="col-4 mx-auto mt-5 text-center"
              style={{
                backgroundColor: "#E3987F",
                position: "relative",
                zIndex: 2,
                borderRadius: "30px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <h4
                style={{
                  fontFamily: "cursive",
                  fontWeight: 1000,
                  fontSize: 20,
                }}
              >
                <i className="text-white">Learn More</i>
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}
