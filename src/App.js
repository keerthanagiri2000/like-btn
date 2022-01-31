import { useState }  from "react";
import "./App.css";
export default function App() {
  const details = [
    {
      src:
        "https://www.boxofficecollection.net/wp-content/uploads/2021/12/Shyam-Singha-Roy-Box-Office-Collection.jpg",
      name: "Shyam-Singha-Roy",
      summary: "Shyam Singha Roy is a 2021 Indian Telugu-language period romantic drama film directed by Rahul Sankrityan who co-wrote the film with Janga Satyadev. The film stars Nani in a dual role while actresses Sai Pallavi, Krithi Shetty and Madonna Sebastian play the main female lead roles.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      src: "https://i.ytimg.com/vi/7SMnJxDTzrI/maxresdefault.jpg",
      name: "Muthal Nee Mudivum Nee",
      summary:"Mudhal Nee Mudivum Nee also known as MNMN is a 2022 Indian Tamil-language coming-of-age romantic drama film written and directed by Darbuka Siva, in his directorial debut, who also scored music for the film. Produced by Sameer Bharat Ram, the film features a predominantly new cast and crew.",
      rating: "⭐⭐⭐⭐"
    },
    {
      src: "https://www.miindia.com/miimages/events/may19/sita-telugu.jpg",
      name: "Sita",
      summary:"Sita is an 2019 Indian Telugu-language romantic comedy film directed by Teja and produced by Sunkara Ramabrahmam. The film stars Kajal Aggarwal as the titular character along with Bellamkonda Sreenivas and Sonu Sood. The music was composed by Anoop Rubens with cinematography by Sirsha Ray and editing by Kotagiri Venkateswara Rao.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2FbLujpnhvaj6DrDVwRr2NJYKoAY2gK3lGYDXBRyHxT72Bi1fNB2tiCianSFPDsLc9c&usqp=CAU",
      name: "Oh Manapanne",
      summary:"A remake of the Telugu film Pelli Choopulu (2016),it stars Harish Kalyan and Priya Bhavani Shankar as a boy and girl who meet during a matchmaking event. How their aspirations bring them together forms the rest of the story.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerzaPlDa7cf2LjpDVGUQl6WYNJsv-0RTYZJQ7_dm08nf0vVEShKqjKZzaJ2uSqA4W1bQ&usqp=CAU",
      name: "Enna Solla Pogirai",
      summary:"Enna Solla Pogirai is a 2022 Indian Tamil-language romantic comedy film written and directed by A. Hariharan. The film stars Ashwin Kumar Lakshmikanthan, Teju Ashwini and Avantika Mishra, with Pugazh, Delhi Ganesh, Subbu Panchu and Swaminathan in supporting roles. It was released on 13 January 2022.",
      rating: "⭐⭐"
    }
  ];
  return (
    <div className="App">
      {details.map((nm) => (
        <Movie src={nm.src} name={nm.name} rating={nm.rating} summary={nm.summary} />
      ))}
    </div>
  );
}

function Movie({ src, name, rating, summary }) {
  const [like, setLike]= useState(0);
  const [dislike, setDislike]=useState(0);
  return (
    <div className="movie">
      <img src={src} alt="image-pic" className="poster-img" />
      <h3>Movie Name: {name}</h3>
      <p><b>Summary</b>: {summary}</p>
      <p><b>Rating</b>: {rating}</p>
      
      <button onClick={()=>setLike(like + 1)}>👍 {like}</button>
      <button onClick={()=>setDislike(dislike + 1)}>👎 {dislike}</button>
  
    </div>
  );
}