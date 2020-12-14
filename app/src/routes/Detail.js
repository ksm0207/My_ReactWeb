import React from "react";

function Detail(prop){
    console.log("Detail.js",prop)
    const items = prop
    console.log("Item : ",items.location.state)
    return (
        <div>
            <span style={{color:"red"}}>{items.location.state}</span>
        </div>
    )
}

export default Detail;
