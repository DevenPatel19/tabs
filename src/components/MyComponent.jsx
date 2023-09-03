import React,{useState} from 'react'


const MyComponent=()=> {
    const tabs=["Tab 1","Tab 2","Tab 3"];
    const [msg,setMsg]= useState("");


    const clickhandler = (e,x,i) =>{
        e.preventDefault();
        setMsg(x+ " was taped");

    }    
    return (
        <div>
            {
                tabs.map((value,i)=>{
                    return <button  key={i} onClick={(e)=>clickhandler(e,value,i)}>
                    {value}
                </button>
                })
            }
            <p>{msg}</p>
        </div>
    )
}

export default MyComponent