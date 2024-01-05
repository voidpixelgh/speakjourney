import React, { useRef } from "react";
import classes from "./Signup.module.css";
import Link from "next/link";

export default function page() {
  return (
    <div className={classes.container}>
      <div className={classes["form_area"]}>
        <p className={classes.title}>SIGN UP</p>
        <form action="">
          <div className={classes["form_group"]}>
            <label className={classes["sub_title"]} for="name">
              Name
            </label>
            <input
              placeholder="Enter your full name"
              className={classes["form_style"]}
              type="text"
            />
          </div>
          <div className={classes["form_group"]}>
            <label className={classes["sub_title"]} for="email">
              Email
            </label>
            <input
              placeholder="Enter your email"
              id="email"
              className={classes["form_style"]}
              type="email"
            />
          </div>
          <div className={classes["form_group"]}>
            <label className={classes["sub_title"]} for="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              id="password"
              className={classes["form_style"]}
              type="password"
            />
          </div>
          <div>
            <button className={classes.btn}>SIGN UP</button>
            <p>
              Have an Account?
              <Link className={classes.link} href="/login">
                Login Here!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
