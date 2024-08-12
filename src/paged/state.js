import { useState,useEffect,useRef } from "react"
export default function  LIirst(){
    const [count, setCount]=useState([]);
    const [add,setAdd]=useState(1);
    const [inputValue, setInputValue] = useState("");
    function Adding(){
        const ak="list"+ add;
        setCount((previous)=>{return[...previous,ak]})
        setAdd((previous)=>{return previous+1})
    }
    console.log("bjbbjnmbbnbbnbnbnbbmbnbmbmn",count[0]);
    console.log("input Values:",inputValue)
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
      const counts = useRef(0);

  useEffect(() => {
    counts.current = counts.current + 1;

  });
    return(
    <>
        <h1>My List
        </h1>
        <button onClick={Adding} style={myStyle}>ok</button>
        <ul>
            {count.map((e,index)=>  <li key={index}>{e}</li>)}
        </ul>
        <input
        type="text" onChange={(e)=>setInputValue(e.target.value)}></input>
        <p>{counts.current}</p>
    </>)
}
