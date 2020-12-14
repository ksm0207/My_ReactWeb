import React from "react";

function Detail(prop){
    console.log("Detail.js",prop)
    const items = prop
    console.log("Item : ",items.location.state)
    return (
        <div>
            <span style={{color:"red"}}>Detail</span>
        </div>
    )
}

export default Detail;
