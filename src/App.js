import { useState }  from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import "./App.css";
import {double, Msg} from "./Msg";
import { Switch, Route, Link } from "react-router-dom";
import {AddColor} from "./AddColor";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';


export default function App() {
  const Movie_List = [
    {
      poster:
        "https://www.boxofficecollection.net/wp-content/uploads/2021/12/Shyam-Singha-Roy-Box-Office-Collection.jpg",
      name: "Shyam-Singha-Roy",
      summary: "Shyam Singha Roy is a 2021 Indian Telugu-language period romantic drama film directed by Rahul Sankrityan who co-wrote the film with Janga Satyadev. The film stars Nani in a dual role while actresses Sai Pallavi, Krithi Shetty and Madonna Sebastian play the main female lead roles.",
      rating:" 10"
    },
    {
      poster: "https://i.ytimg.com/vi/7SMnJxDTzrI/maxresdefault.jpg",
      name: "Muthal Nee Mudivum Nee",
      summary:"Mudhal Nee Mudivum Nee also known as MNMN is a 2022 Indian Tamil-language coming-of-age romantic drama film written and directed by Darbuka Siva, in his directorial debut, who also scored music for the film.",
      rating: " 8"
    },
    {
      poster: "https://www.miindia.com/miimages/events/may19/sita-telugu.jpg",
      name: "Sita",
      summary:"Sita is an 2019 Indian Telugu-language romantic comedy film directed by Teja and produced by Sunkara Ramabrahmam. The film stars Kajal Aggarwal as the titular character along with Bellamkonda Sreenivas and Sonu Sood.",
      rating: " 10"
    },
    {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2FbLujpnhvaj6DrDVwRr2NJYKoAY2gK3lGYDXBRyHxT72Bi1fNB2tiCianSFPDsLc9c&usqp=CAU",
      name: "Oh Manapanne",
      summary:"A remake of the Telugu film Pelli Choopulu (2016),it stars Harish Kalyan and Priya Bhavani Shankar as a boy and girl who meet during a matchmaking event. How their aspirations bring them together forms the rest of the story.",
      rating:" 10"
    },
    {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTX_xarBKfl7Z72B1KwwgGtpxIW7UQNnmbVg&usqp=CAU",
      name: "The Good Dinosaur",
      summary:"A rainstorm separates Arlo, a young Apatosaurus, from his family. While travelling through a harsh landscape, he befriends Spot, a feral child, who helps him reunite with his family.",
      rating: " 7.5"
    },
    {
      poster:"https://i.pinimg.com/originals/f1/90/a4/f190a4d5973563742c617afef4d5a007.jpg",
      name:"Frozen",
      summary:"Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.",
      rating:"9"
    }
  ];
  const[movielist, setMovielist]=useState(Movie_List)
  const [poster, setPoster]=useState("")
  const [name, setName]=useState("")
  const [summary, setSummary]=useState("")
  const [rating, setRating]=useState("")
  return (
    <div className="App">
      {/*<Msg/>*/}
      <ul>
        
        <li>
          <Link to="/movies">Movie</Link>
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/color-game">AddColor</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tictactoe">TicTacToe</Link>
        </li>
      </ul>
      
      <Switch>
      
        <Route path="/movies">
          <div className="movie-form-container">
        <TextField id="standard-basic" label="Poster" variant="standard" onChange={(event)=>setPoster(event.target.value)} />
        <TextField id="standard-basic" label="Name" variant="standard" onChange={(event)=>setName(event.target.value)} />
        <TextField id="standard-basic" label="Summary" variant="standard" onChange={(event)=>setSummary(event.target.value)} />
        <TextField id="standard-basic" label="Rating" variant="standard" onChange={(event)=>setRating(event.target.value)}/>
        
        
          <Button onClick={()=>{
           const newMovie={
                poster:poster,
                name:name,
                summary:summary,
                rating: rating,                      
           };
           setMovielist([...movielist, newMovie]);
          }}
           variant="contained">Add Movie</Button>
          </div>
          <div className="movie-list">
      {movielist.map((nm) => (
        <Movie poster={nm.poster} name={nm.name} rating={nm.rating} summary={nm.summary} />
      ))}
          </div>
        </Route>
        <Route path="/color-game">
           <AddColor />
        </Route>
        <Route path="/tictactoe">
            <TicTacToe />
        </Route>
        <Route path="/">
            <h2>Welcome to the movie App😏😏😣🙄</h2> 
        </Route>
        
      </Switch>
      

      
    {/*<AddColor/>*/}
  </div>
);
}

function Movie({ poster, name, rating, summary }) {
  const [like, setLike]= useState(0);
  const [dislike, setDislike]=useState(0);
  const styles={color: rating >8.5? "green" : "red"}
  const [show, setShow]= useState(true);
  //conditional styling
  //const divStyle={display: show ? "none": "block"}
  const btnStyle={
    marginTop: "10px",
    backgroundColor:"gray"
  }
  return (
    <Card className="movie-list">
    <div className="movie-container">
      <img src={poster} alt="image-pic" className="movie-poster"/>
      <CardContent>
      <h3 className="movie-name"> 
      {name}
      <IconButton 
        color="primary"
        onClick={()=>setShow(!show)}
        aria-label="Toggle summary"
      >
      {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
    </IconButton>
      </h3>

      <div>
         {/*<Button style={btnStyle} variant="contained" onClick={()=> setShow(!show)}>Toggle Description</Button>*/}
         {/*conditional rendering*/}
        {/* <p style={divStyle} className="movie-summary"> {summary}</p> */}
         {show ? <p className="movie-summary"> {summary}</p> :""}
      </div>
      
      <p className="movie-rating" style={styles} ><i class="fa fa-star" aria-hidden="true"></i>{rating} </p>
      </CardContent>
      <CardActions>
    <div className="movie-button">
    <IconButton 
    className="movie-likebtn" 
    onClick={()=>setLike(like + 1)}
    aria-label="like button"
    color="primary">
      <Badge badgeContent={like} color="primary">
      👍
      </Badge>
    </IconButton>

    <IconButton 
    className="movie-likebtn" 
    onClick={()=>setDislike(dislike + 1)}
    aria-label="delete"
    color="error">
      <Badge badgeContent={dislike} color="error">
      👎
      </Badge>
    </IconButton>
      
    </div>
    </CardActions>
  </div>
  
  </Card>
  );
  }

  //loop-map
  //parent component-> child component(data has to be passed)->props
  function TicTacToe(){
    const [board, setBoard]=useState([null,null,null,null,null,null,null,null,null]);
    
    const decideWinner=(board)=>{
      const Lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
      ];
      for(let i=0;i<Lines.length;i++){
        const [a, b, c] = Lines[i];

        if(board[a] !== null && board[a]===board[b] && board[b]===board[c]){
              console.log("Winner is", board[a]);
              return board[a];
        }
      }
      return null;
    };
    const winner= decideWinner(board);

    const [isXturn, setIsXTurn]=useState(true);

    const handleClick=(index)=>{
      //copy of the board and replace with "x" in the clickeed game box
      if(winner === null && board[index] === null){
        const boardCopy=[...board];
        console.log(boardCopy, index);
        boardCopy[index]= isXturn ? "X": "O";
        setBoard(boardCopy);
        setIsXTurn(!isXturn);
      }
      
     // console.log(index);
    };
   const { width, height } =useWindowSize()
    return (
      <div className="full-game">
      {winner ? <Confetti width={width} height={height} gravity={0.01} /> :''}
        <div className="board">
            {board.map((val,index)=>(
             <GameBox val={val} onPlayerClick={()=> handleClick(index)}/>
              ))}
        </div>
        {winner ? <h2>Winner is: {winner}</h2> :''}
        <button
        onClick={()=>{
          setBoard([null,null,null,null,null,null,null,null,null])
          setIsXTurn(true);
        }}
        >Restart</button>
      </div>
        
    );
  }

  //{val}-> object destructuring
  function GameBox({val, onPlayerClick}){
    //const val="X";
    //const [val, setVal]=useState(null);
    const styles ={
      color: val === "X" ? "green" : "white",
    };
    return <div 
    //onClick={()=>setVal(val === "X" ? "O":"X")}
    onClick={()=> onPlayerClick()}
    style={styles} className="game-box">
    {val}
    </div>
  }
//multi page-advantage
//1.performance
//2.ease of access-organised
//3.sharing

//SPA 
//1.no refresh
//2.smooth experience

//react router dom -it is a conditional rendering
//1.browserrouter-modern browser-added features
//2.hashrouter-older browser(IE)-less features

//as-renaming
//hashrouter->URL will contain #
//link-change the url without refresh