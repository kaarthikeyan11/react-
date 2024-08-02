import logo from './logo.svg';
import './App.css';
import React,{useState,useRef} from 'react';
import { useEffect } from 'react';


const  App=()=>{

  
  const[pass,setpass]=useState(0);
  const[elements,setelements]=useState({name:"",last_name:""});
  const increament=()=>{
    for(let i=0;i<5;i++){
      setpass(pre=>pre+1);
      
    }
  }
  useEffect(()=>{
    console.log("kjkjj");
    console.log("kaarthikeyan");
  
  
  },[pass,elements])
  
  return(
    <div>
      <button onClick={()=>{setpass(pass+1)}}>This Button</button>
      <div className='flex-justify-center bg-gray'>
      <input type='text' onChange={(r)=>setelements({...elements,name:r.target.value})}/>
      <input type='text' onChange={(r)=>setelements({...elements,last_name:r.target.value})}/></div>
      <p>My name:{elements.name}</p>
      <p>My last_name :{elements.last_name}</p>
      <p>{pass}</p>
      <button onClick={()=>increament()} >click for five </button>
      <p>{pass}</p>
      
    </div>
  )
}
export default App;
// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         Start
//       </button>
//       <button onClick={handleStop}>
//         Stop
//       </button>
//     </>
//   );
// }
