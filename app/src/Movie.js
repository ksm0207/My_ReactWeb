import React from "react";
import PropTypes from "prop-types"
import "./Movie.css"


function Movie({id,year,title,summary,poster,rating,runtime}){
return (
  <div class="movie">
    <img src = {poster} alt = {title} title = {title}/>
    <div class = "movie_data">
        <h4 class = "movie_title">제목 : {title}</h4>
        <h4 class = "movie_runtime">플레이타임 : {runtime} 분</h4>
        <h4 class = "movie_rating">평점 : {rating}</h4>
        <h4 class = "movie_year">연도 : {year}</h4>
        <h4 class = "movie_summary">요약 : {summary}</h4>
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
  };

export default Movie;
