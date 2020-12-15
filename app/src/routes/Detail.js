import React from "react";
import "./Detail.css"

// 
// function Detail (prop){
    // console.log("Test : ",prop)
    // return <span>#</span>
// }
// 

class Detail extends React.Component{

    componentDidMount(){
        const {location , history}= this.props;
        console.log("Location : ",location , history);
        
        if (location.state === undefined){
            history.push("/")
        }else{
            console.log(location)
        }
    }
    render() {
        const {location}=this.props
        console.log("Render : ",location)
        if (location.state){
            return (
                <div className="detail_data">
                    <img src={location.state.poster}></img>
                    <span>{location.state.title}</span>
                    <span>{location.state.year}</span>
                    <span>{location.state.genres}</span>
                    <span>{location.state.rating}</span>
                    <span>{location.state.runtime}</span>
                    <span>{location.state.summary.slice(0,70)}...</span>
                </div>
            )
        }else{
            return null
        }
    }
}

export default Detail;
