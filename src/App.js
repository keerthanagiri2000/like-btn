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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  

  //1.creating-creatingContext
  //2.Publisher-provider.context.Provider
  //3.Subscriber-useContext-useContext(context)

  const[movielist, setMovielist]=useState(Movielist)
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Paper style={{borderRadius: "0px", minHeight: "100vh"}} elevation={4} >
        <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
          <Button color="inherit" onClick={() => history.push("/color-game")}>Color Game</Button>
          <Button color="inherit" onClick={() => history.push("/movies/add")}>Add Movies</Button>
          <Button color="inherit" onClick={() => history.push("/tictactoe")}>TicTacToe</Button>
          <Button 
          color="inherit"
          style={{marginLeft:"auto"}} 
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? "dark" : "light"} Mode</Button>
        </Toolbar>
      </AppBar>

      <div className="route-container">
      <Switch>
      <Route exact path="/">
            <h2>Welcome to the movie App😏😏😣🙄</h2> 
        </Route>
        <Route path="/movies/add">
          <AddMovie  />
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/edit/:id">
        <EditMovie />
        </Route>
        {/*:-> makes id a variable */}
        <Route path="/movies/:id"> <MovieDetails /></Route>
        <Route path="/movies">
          <MovieList />
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
    </Paper>
    </ThemeProvider>
);
}

function Hi(){
  return(
    <div>
      Hi
    </div>
  )
}



