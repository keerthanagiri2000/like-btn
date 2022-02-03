import { useState }  from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./App.css";
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
     {/* <AddColor/>*/}
    </div>
  );
}

function Movie({ poster, name, rating, summary }) {
  const [like, setLike]= useState(0);
  const [dislike, setDislike]=useState(0);
  const styles={color: rating >8.5? "green" : "red"}
  const [show, setShow]= useState(true);
  const divStyle={display: show ? "none": "block"}
  const btnStyle={
    marginTop: "10px",
    backgroundColor:"gray"
  }
  return (
    <div className="movie-list">
    <div className="movie-container">
      <img src={poster} alt="image-pic" className="movie-poster"/>
      <h3 className="movie-name"> {name}</h3>
      <div >
         <Button style={btnStyle} variant="contained" onClick={()=> setShow((s)=>!s)}>Toggle Description</Button>
         <p style={divStyle} className="movie-summary"> {summary}</p>
      </div>
      <p className="movie-rating" style={styles} ><i class="fa fa-star" aria-hidden="true"></i>{rating} </p>
    <div className="movie-button">
      <button className="movie-likebtn" onClick={()=>setLike(like + 1)}><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {like}</button>
      <button className="movie-likebtn" onClick={()=>setDislike(dislike + 1)}><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {dislike}</button>
    </div>
  </div>
  </div>
  );
}

/*function AddColor(){
  //using hook
  const [color, setColor]= useState("orange")
  const styles={
    backgroundColor:color,
  }

  const [colorList, setColorlist]=useState(["yellow","green","violet","blue"])

  //capture typing event-onchange

  return(
    <div>
      <input value={color} style={styles} onChange={(event)=>setColor(event.target.value)} placeholder="Enter the color" />
      <button onClick={()=>setColorlist([...colorList, color])}>Add Color</button>
      
      {colorList.map((clr)=>(<ColorBox color={clr}/>))}
    </div>
  )
}

function ColorBox({color}){
  const styles={
    backgroundColor:color,
    width:"170px",
    height:"25px",
    marginTop:"10px"
  }
  return(
    <div style={styles}></div>
  )
}*/