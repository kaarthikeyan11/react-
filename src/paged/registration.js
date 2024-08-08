import '../../src/App.css';
import React,{useState,useRef,onclick} from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
export default function Registration(){


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
      // <div  style={{backgroundColor: "lightblue"}}>
        <div>
        
        <form onSubmit={handleSubmit}>
      <div style={{ textAlign: 'center', fontSize:'30px' }}>Registration Form
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