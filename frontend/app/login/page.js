import React from "react";
import classes from "./signup/Signup.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={classes.container}>
      <div className={classes["form_area"]}>
        <p className={classes.title}>LOG IN</p>
        <form action="">
          <div className={classes["form_group"]}>
            <label className={classes["sub_title"]} htmlFor="email">
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
            <label className={classes["sub_title"]} htmlFor="password">
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
            <button className={classes.btn}>LOG IN</button>
            <p>
              Don't have an Account?
              <Link className={classes.link} href="/login/signup">
                SignUp Here!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
