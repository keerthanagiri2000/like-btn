import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {useParams} from 'react-router-dom';

export function EditMovie({ movielist, setMovielist }) {
  const { id } = useParams(); // extracting parameter from the URL
  const movie = movielist[id];
  console.log(movie);


  const [poster, setPoster] = useState(movie.poster);
  const [name, setName] = useState(movie.name);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();
  return (
    <div className="movie-form-container">
      <TextField id="standard-basic" value={poster} label="Poster" variant="standard" onChange={(event) => setPoster(event.target.value)} />
      <TextField id="standard-basic" value={name} label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
      <TextField id="standard-basic" value={summary} label="Summary" variant="standard" onChange={(event) => setSummary(event.target.value)} />
      <TextField id="standard-basic" value={rating} label="Rating" variant="standard" onChange={(event) => setRating(event.target.value)} />
      <TextField id="standard-basic" value={trailer} label="Trailer" variant="standard" onChange={(event) => setTrailer(setTrailevent.target.value)} />

      <Button 
      onClick={() => {
        const updatedMovie = {
          poster: poster,
          name: name,
          summary: summary,
          rating: rating,
          trailer: trailer
        };
        
        const copyMovieList = [...movielist];
        copyMovieList[id] = updatedMovie;
        setMovielist (copyMovieList);
        history.push("/movies");
      }}
        variant="contained"
        color="success"
        >
        Save 
      </Button>
    </div>
  );
}
