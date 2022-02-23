import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function AddMovie({movielist, setMovielist}) {
  const [poster, setPoster]=useState("")
  const [name, setName]=useState("")
  const [summary, setSummary]=useState("")
  const [rating, setRating]=useState("")
  const [trailer, setTrailer]=useState("")
  const history= useHistory();
  return (
    <div className="movie-form-container">
      <TextField id="standard-basic" label="Poster" variant="standard" onChange={(event) => setPoster(event.target.value)} />
      <TextField id="standard-basic" label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
      <TextField id="standard-basic" label="Summary" variant="standard" onChange={(event) => setSummary(event.target.value)} />
      <TextField id="standard-basic" label="Rating" variant="standard" onChange={(event) => setRating(event.target.value)} />
      <TextField id="standard-basic" label="Trailer" variant="standard" onChange={(event) => setTrailer(event.target.value)} />

      <Button onClick={() => {
        const newMovie = {
          poster: poster,
          name: name,
          summary: summary,
          rating: rating,
          trailer: trailer
        };
        setMovielist([...movielist, newMovie]);
        history.push("/movies");
      }}
        variant="contained">Add Movie</Button>
    </div>
  );
}


