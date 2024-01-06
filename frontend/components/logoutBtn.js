import { signOut } from "next-auth/react";
import React from "react";

const logoutBtn = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export default logoutBtn;
