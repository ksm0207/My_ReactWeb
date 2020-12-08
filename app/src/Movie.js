import React from "react";
import PropTypes from "prop-types"
import "./Movie.css"


function Movie({id,year,title,summary,poster,rating,runtime,genres}){
return (
  <div className ="movie">
    <img src = {poster} alt = {title} title = {title}/>
    <div className = "movie_data">
        <h4 className = "movie_title">제목 : {title}</h4>
        <h4 className = "movie_year">날짜 : {year}</h4>
        <ul className = "movie_genres">
          {
            genres.map( (cur_genres,index) =>(
              <li key={index} className = "movie_genres-list">
              {cur_genres}
              </li>
            ))
          }
        </ul>
        <h4 className = "movie_rating"> 평점 : {rating} ★ </h4>
        <h4 className = "movie_runtime">플레이타임 : {runtime} 분</h4>
        <h4 className = "movie_summary">요약 : {summary.slice(0,70)}...</h4>
    </div>
  </div>
);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    runtime:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
  };

export default Movie;
