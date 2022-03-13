import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from "react-router-dom";

export function Movie({ poster, name, rating, summary, deleteButton, id, editButton }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = { color: rating > 8.5 ? "green" : "red" };
  const [show, setShow] = useState(true);
  const history= useHistory();
  //conditional styling
  //const divStyle={display: show ? "none": "block"}

  useEffect(()=>{
    console.log("Like is update", like);
  }, [like, dislike]);

  const incrementLike=() => setLike(like + 1);
  const incrementDislike=() => setDislike(dislike + 1);
  
  return (
    <Card className="movie-list">
      <div className="movie-container">
        <img src={poster} alt="image-pic" className="movie-poster" />
        <CardContent>
          <h3 className="movie-name">
            {name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => history.push(`/movies/${id}`)}
              aria-label="Toggle summary"
            >
              <InfoIcon />
            </IconButton>
          </h3>

          <div>
            {/*<Button style={btnStyle} variant="contained" onClick={()=> setShow(!show)}>Toggle Description</Button>*/}
            {/*conditional rendering*/}
            {/* <p style={divStyle} className="movie-summary"> {summary}</p> */}
            {show ? <p className="movie-summary"> {summary}</p> : ""}
          </div>

          <p style={styles} className="movie-rating">⭐{rating}</p>
        </CardContent>
        <CardActions>
          <div className="movie-button">
            <IconButton
              className="movie-likebtn"
              onClick={incrementLike}
              aria-label="like button"
              color="primary">
              <Badge badgeContent={like} color="primary">
                👍
              </Badge>
            </IconButton>

            <IconButton
              className="movie-likebtn"
              onClick={incrementDislike}
              aria-label="delete"
              color="error">
              <Badge badgeContent={dislike} color="error">
                👎
              </Badge>
            </IconButton>
            {deleteButton} {editButton}
          </div>
        </CardActions>
      </div>

    </Card>
  );
}
