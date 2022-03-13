import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import {API} from "./global";


export function MovieList() {
  const history = useHistory();
  const[movielist, setMovielist]=useState([]);

  const getMovies=()=>{
    fetch(`${API}/movies`,{
    method: "GET",
  }) // return promise
    .then(data => data.json()) //response object
    .then((mvs)=> setMovielist(mvs));
  };

  useEffect(()=> getMovies(), []);

  //delete movie -> refresh data
  const deleteMovie = (id) => {
    //console.log("Deleting ...", id);
    fetch(`${API}/movies/${id}`,{
    method: "DELETE",
  }).then(()=> getMovies());
  };

  return <div
    className="movie-list">
    {movielist.map(({name, poster, rating, summary, id}, index) => (
      <Movie 
      key={index}
      poster={poster} 
      name={name} 
      rating={rating} 
      summary={summary}
      deleteButton={
        <IconButton 
         //deleting movie
          //onClick={()=>{
          //console.log(index);
          //const copyMovieList = [...movielist];
          //copyMovieList.splice(index, 1)
          // setMovielist(copyMovieList); }} 

          onClick={()=>deleteMovie(id)}
          aria-label="delete"
          color="error">
            
        <DeleteIcon />
         </IconButton>
      }

      editButton={
        <IconButton
        onClick={()=>history.push(`/movies/edit/${id}`)}
          aria-label="delete"
          color="secondary">
            
        <EditIcon />
         </IconButton>
      }
       id={id}
      />
      ))}
      </div>
       
  }
   

