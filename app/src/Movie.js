import React from "react";
import PropTypes from "prop-types"


function Movie({id,year,title,summary,poster,rating,runtime}){
return <div>
      <h4>제목 : {title}</h4>
      <h4>플레이타임 : {runtime} 분</h4>
      <h4>평점 : {rating}</h4>
      <h4>연도 : {year}</h4>
      <h4>요약 : {summary}</h4>
      <img src = {poster} alt = {title}/>
      
</div>

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
