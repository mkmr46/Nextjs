import React from "react";
import Link from "next/link";
export default function index() {
  return (
    <>
      <Link href={"/"}>
        <h1>HOME</h1>
      </Link>
      <div>Blog page</div>
    </>
  );
}
