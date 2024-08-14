import { useState } from "react";
export default function Formsstar(){
    const[data,setData]=useState({phone:'91'})
    function handleSubmit(e){
        e.preventDefault();
        console.log("Created Data are:",data);
    }
    function handleStart(e){
        const name=e.target.name;
        const value=e.target.value;
        setData((per)=>{return{...per,[name]:value}})
    }    

    return(
        <>
            <h1 style={{textAlign:"center"}}>Registration Form</h1>
            <form onSubmit={handleSubmit}>
            <label>Enter the Name:<input type="text" name="name"onChange={handleStart}/> </label><br/>
            <label>Enter the Age:<input type="number" name="age" onChange={handleStart}/></label><br/>
            <label> Enter the Address:<textarea name="address" onChange={handleStart}/></label><br/>
            <label> Enter the phone Number:<input type="text"  name="phone" value={data.phone} onChange={handleStart}/></label><br/>
            <label> Select the Country:<select name="country" onChange={handleStart}>
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="Usa">USA</option>
                <option value="Canada">Canada</option>
            </select></label><br/>
            <input type="submit" value="submit the Form"/>
            </form>
        </>
    )
}