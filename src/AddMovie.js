import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { API } from "./global";

export function AddMovie() {
  const [poster, setPoster]=useState("")
  const [name, setName]=useState("")
  const [summary, setSummary]=useState("")
  const [rating, setRating]=useState("")
  const [trailer, setTrailer]=useState("")
  const history= useHistory();
  const addMovie=()=>{
    const newMovie = {
      poster: poster,
      name: name,
      summary: summary,
      rating: rating,
      trailer: trailer
    };
    //1.method must be POST
    //2.body-JSON data
    //3.headers-JSON data
    //after POST is complete -> movie to /movies
    fetch(`${API}/movies/`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers:{
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
    //setMovielist([...movielist, newMovie]);
   
  }
  return (
    <div className="movie-form-container">
      <TextField id="standard-basic" label="Poster" variant="standard" onChange={(event) => setPoster(event.target.value)} />
      <TextField id="standard-basic" label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
      <TextField id="standard-basic" label="Summary" variant="standard" onChange={(event) => setSummary(event.target.value)} />
      <TextField id="standard-basic" label="Rating" variant="standard" onChange={(event) => setRating(event.target.value)} />
      <TextField id="standard-basic" label="Trailer" variant="standard" onChange={(event) => setTrailer(event.target.value)} />

      <Button onClick={() =>addMovie()}
        variant="contained">Add Movie</Button>
    </div>
  );
}


