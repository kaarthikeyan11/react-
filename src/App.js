import logo from './logo.svg';
import './App.css';
import React,{useState,useRef,onclick} from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// const  App=()=>{

  
//   const[pass,setpass]=useState(0);
//   const[elements,setelements]=useState({name:"",last_name:""});
//   const increament=()=>{
//     for(let i=0;i<5;i++){
//       setpass(pre=>pre+1);
      
//     }
//   }
//   useEffect(()=>{
//     console.log("kjkjj");
//     console.log("kaarthikeyan");
  
  
//   },[pass,elements])
  
//   return(
//     <div>
//       <button onClick={()=>{setpass(pass+1)}}>This Button</button>
//       <div className='flex-justify-center bg-gray'>
//       <input type='text' onChange={(r)=>setelements({...elements,name:r.target.value})}/>
//       <input type='text' onChange={(r)=>setelements({...elements,last_name:r.target.value})}/></div>
//       <p>My name:{elements.name}</p>
//       <p>My last_name :{elements.last_name}</p>
//       <p>{pass}</p>
//       <button onClick={()=>increament()} >click for five </button>
//       <p>{pass}</p>
      
//     </div>
//   )
// }
// export default App;









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




// export default function App() {
//   return<div><h2>kaarthikeyan</h2></div>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);



// function Car(props) {
//   return <h2>I am a { props.brand.name +"     "+ props.brand.kaarthi }!</h2>;
// }

// export default function App() {
//   const carInfo = { name: "Ford", model: "Mustang",kaarthi:"ok"};
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car brand={ carInfo } />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

export default function App(){


  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');

 

  const handleClear = () => {
    setName('');
    setAge('');
    setAddress('');
    setQualification('');
    setExperience('');
  };







  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    alert("Form submitted successfully!"); 
  };
  return(
    <div >
      <form onSubmit={handleSubmit}>
    <div style={{ textAlign: 'center', fontSize:'30px' }}>Registeration Form
 </div>
    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <label style={{ marginRight: '30px' }}>Name</label>
        <input placeholder='Enter your Name' value={name}
        onChange={(e)=>setName(e.target.setName)}></input>
    </div>
    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
      <label style={{ marginRight: '30px' }}>Age</label>
      <input type='number' placeholder='Enter your Age' value={age}
      onChange={(e)=>setAge(e.target.value)}></input>
    </div>
    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
      <label style={{ marginRight: '30px' }}>
        Address
      </label>
      <textarea
       placeholder='Enter your Address' value={address} onChange={(e)=>setAddress(e.target.value)}>
      </textarea>
    </div>
    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
      <label style={{ marginRight: '30px' }}>
        Qualification
      </label>
      <input placeholder='Enter your Qualification' value={qualification} onChange={(e)=>setQualification(e.target.value)}></input>
    </div>
    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
      <label style={{ marginRight: '30px' }}>
         Experience in Year
      </label>
      <input type='number' placeholder='Enter experience in Year' value={experience} onChange={(e)=>setExperience(e.target.value)}>
      </input>
    </div>
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <button style={{width:'100px',height:'30px',marginRight: '20px'}} type='Submit'>
      Submit
      </button>
      <button style={{width:'100px',height:'30px'}} type='button' onClick={handleClear}>
        clear</button>
    </div>
    </form>
</div>
  )
}