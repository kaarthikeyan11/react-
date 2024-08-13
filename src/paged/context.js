import { useState,createContext,useContext } from "react";
const User = createContext();
export default function Firsty(){

    
    const [arrange,setArrange]=useState("Kaarthikeyan");
    console.log("hello",setArrange);
    return (
        <div>
<User.Provider value={arrange}>
      <h1>{`Hello ${arrange}!`}</h1>
      <Secondly />
    </User.Provider>
</div>
        
       
    )

    
    
}
function Secondly(){
        return(
            <div>
            <h3>Components 2</h3>
            <Third />
            </div>
        )
}
function Third(){
    return(
        <>
        <h1>hello,welcome</h1>
        <Four/>
        </>
    )
}
function Four(){
    const use=useContext(User)
    return(
        <>
        <h1> my  {use[0]}
        </h1>
        </>
    )
}