import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useHistory} from "react-router-dom";
import {API} from "./global";

export function MovieDetails({ movielist }) {
  const { id } = useParams(); // extracting parameter from the URL
  console.log(id, movielist);
  const [movie, setMovie] =useState ({});

  useEffect(()=>{
    fetch(`${API}/movies/${id}`,{
    method: "GET",
  }) // return promise
  .then(data => data.json()) //response object
  .then((mv)=> setMovie(mv))
  .catch((err)=>console.log(err));
  }, []) ;

  const history = useHistory();
  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-title">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button variant="contained" onClick={()=> history.goBack()} startIcon={<ArrowBackIosNewIcon />}>
          Back
        </Button>
      </div>
    </div>

  );

}
