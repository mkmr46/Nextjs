import { useRouter } from "next/router";
import React from "react";

export default function index() {
  const router = useRouter();
  const id = router.query.product
  const handleClick = () => {
    console.log("working for other things than",id)
    router.push('/')
  };
  return (
    <>
      <div>
        As Id is passed after directory we must use steps in index and id is :{" "}
        <b>"{id}"</b>
      </div>
      <button onClick={handleClick}>Buy Now Product {id}</button>
    </>
  );
}
