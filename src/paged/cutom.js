import { useState, useEffect } from "react";

const Usefetch= (url)=> {
    const[array,setArray]=useState(null)
useEffect(()=>{
    fetch(url)
    .then((r)=>r.json())
    .then((d)=>setArray(d))
},[url]);
  return [array]
};
export default Usefetch;