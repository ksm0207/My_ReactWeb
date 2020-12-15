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
                    <span className="detail_title"> {location.state.title}</span>
                    <span className="detail_genres">{location.state.genres}</span>
                    <span className="detail_year"> {location.state.year}</span>
                    <span className="detail_rating">{location.state.rating}점</span>
                    <span className="detail_runtime">{location.state.runtime}분</span>
                    <span className="detail_summary">{location.state.summary.slice(0,70)}</span>
                </div>
            )
        }else{
            return null
        }
    }
}

export default Detail;
