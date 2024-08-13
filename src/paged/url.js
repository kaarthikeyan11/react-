import { useState } from "react";
import Usefetch from "./cutom";
const H=()=>{
    const [arr] = Usefetch("https://jsonplaceholder.typicode.com/todos");
   

  return (
    <>
      {arr &&
        arr.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}
export default H;