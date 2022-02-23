import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";

export function MovieList({ movielist, setMovielist }) {
  const history = useHistory();
  return <div
    className="movie-list">
    {movielist.map(({name, poster, rating, summary}, index) => (
      <Movie 
      key={index}
      poster={poster} 
      name={name} 
      rating={rating} 
      summary={summary}
      deleteButton={
        <IconButton onClick={()=>{
          console.log(index);
          const copyMovieList = [...movielist];
          copyMovieList.splice(index, 1)
          setMovielist(copyMovieList); }}
          aria-label="delete"
          color="error">
            
        <DeleteIcon />
         </IconButton>
      }

      editButton={
        <IconButton onClick={()=>history.push(`/movies/edit/${index}`)}
          aria-label="delete"
          color="secondary">
            
        <EditIcon />
         </IconButton>
      }
       id={index}
      />
      ))}
      </div>
       
  }
   

