import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import "./monster.css";
import { monstersCollection } from "../data/firebase";

function Monster(props) {
  const { id, data } = props;
  const { name, place, rating, review } = data;

  const ratingString = "👻".repeat(rating) + " ".repeat(5 - rating);
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteMonster = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = monstersCollection.doc(id);
      await docRef.delete();
    } catch {
      console.error(Error);
      setErrorMessage("Something went wrong. Try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="monster">
      <div className="monster__contents">
        <div className="monster__name">{name}</div>
        <div className="monster__rating">{ratingString}</div>
        <div className="monster__place">{place}</div>
        <div className="movie__review">{review}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="monster__button" disabled={isDeleting} onClick={deleteMonster}>
          <Delete />
        </button>
        <button className="monster__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Monster;
