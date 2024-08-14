// import React, { useState } from "react";
// export default function That(){
//     const[value,setValue]=useState({});
//     // const[age,setAge]=useState("");
//     // const[address,setAddress]=useState("");
//     console.log("Hello",value);

//     function handleSubmit(ev){
//         ev.preventDefault()
//         console.log("nmknmnm");
//         console.log("my Name:",value);
//     }

//     return(
//         <>
        
//         <form onSubmit={handleSubmit}>
//             <label >Enter the name :
//                 <input type="text" onChange={(e)=>{setValue( (previous)=>{return{...previous,name:e.target.value}})}}/>
//                 </label> 
//                 <label >Enter the age:
//                 <input type="text" onChange={(e)=>{setValue((previous)=>{return{...previous,age:e.target.value}})}}/>
//                 </label> 
//                 <label >Enter the Address:
//                 <input type="text" onChange={(e)=>{setValue((previous)=>{return{...previous,address:e.target.value}})}}/>
//                 </label> 
//                 <input type="submit" values="submit the form"/>
//         </form>
//         </>
//     )
// }

import React, { useState } from "react";
export default function That(){
    const[value,setValue]=useState({phone:"91"
    });
    // const[age,setAge]=useState("");
    // const[address,setAddress]=useState("");
    console.log("Hello",value);

    function handleSubmit(ev){
        ev.preventDefault()
        console.log("nmknmnm");
        console.log("my Name:",value);
    }
    function handleStart(e){
     const name=e.target.name;
     const value=e.target.value;
     setValue((pre)=>{return {...pre,[name]:value}})
    }

    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <label >Enter the name :
                <input type="text" name="name" onChange={handleStart}/>
                </label> 
                <label >Enter the age:
                <input type="text" name="age" onChange={handleStart}/>
                </label> 
                <label >Enter the Address:
                <input type="text" name="address" onChange={handleStart}/>
                </label> 
                <label >Enter the phone:
                <input type="text" name="phone" onChange={handleStart} value={value.phone}/>
                </label>
                <label >Enter your Country:
                <select name="country" onChange={handleStart} >
                    <option value="">select</option>
                    <option value="USA">usa</option>
                    <option value="india">india</option>
                    </select>
                </label>  
                <label >Enter the place:
                <textarea  name="place" onChange={handleStart} />
                </label>
                <input type="submit" values="submit the form"/>
        </form>
        </>
    )
}


