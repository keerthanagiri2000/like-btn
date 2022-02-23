import { useState }  from "react";
import "./App.css";
import {double, Msg} from "./Msg";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import {AddColor} from "./AddColor";
import {AddMovie} from "./AddMovie";
import { TicTacToe } from "./TicTacToe";
import { NotFound } from "./NotFound";
import { Movielist } from "./Movie_List";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import {EditMovie} from "./EditMovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export default function App() {
  
  const[movielist, setMovielist]=useState(Movielist)
  const history = useHistory();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
          <Button color="inherit" onClick={() => history.push("/color-game")}>Color Game</Button>
          <Button color="inherit" onClick={() => history.push("/movies/add")}>Add Movies</Button>
          <Button color="inherit" onClick={() => history.push("/tictactoe")}>TicTacToe</Button>
        </Toolbar>
      </AppBar>

      <div className="route-container">
      <Switch>
      <Route exact path="/">
            <h2>Welcome to the movie App😏😏😣🙄</h2> 
        </Route>
        <Route path="/movies/add">
          <AddMovie movielist={movielist} setMovielist={setMovielist} />
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/edit/:id">
        <EditMovie movielist={movielist} setMovielist={setMovielist} />
        </Route>
        {/*:-> makes id a variable */}
        <Route path="/movies/:id"> <MovieDetails movielist={movielist} /></Route>
        <Route path="/movies">
          <MovieList movielist={movielist} setMovielist={setMovielist}/>
        </Route>
        <Route path="/color-game">
           <AddColor />
        </Route>
        <Route path="/tictactoe">
            <TicTacToe />
        </Route>
        
        <Route path="**">
          <NotFound />
        </Route>
        
      </Switch>
      </div>

      
    {/*<AddColor/>*/}
  </div>
);
}



