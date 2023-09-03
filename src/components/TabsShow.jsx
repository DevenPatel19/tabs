import React from 'react'



const TabsShow = (props) => {

    const tabs=["Tab 1 contents","Tab 2 Contents","Tab 3 Contents"];

    const clickhandler = (e,x,i) =>{
        e.preventDefault();
        // setMsg(x+ " was taped");
        props.data(x+ " was tabbed");
    }   
    return (
        <div>
            {
                tabs.map((value,i)=>{
                    return <button key={i} onClick={(e)=>clickhandler(e,value,i)}>
                    Button {i+1}
                </button>
                })
            }
        </div>
    )
}

export default TabsShow