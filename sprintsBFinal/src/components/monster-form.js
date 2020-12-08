import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./monster-form.css";

function MonsterForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.name === undefined) initialState.name = "";
  if (initialState.rating === undefined) initialState.rating = 3;
  if (initialState.place === undefined) initialState.place = "";

  const [name, setName] = useState(initialState.name);
  const [rating, setRating] = useState(initialState.rating);
  const [place, setPlace] = useState(initialState.releasePlace);
  const [errorMessage, setErrorMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onPlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const onMonsterSumbit = async (event) => {
    event.preventDefault();
    onSubmit(name, rating, place);
  };

  return (
    <form className="monster-form" onSubmit={onMonsterSumbit}>
      <h2 className="monster-form__title">Monster Details</h2>
      {message && <p className="monster-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="monster-form__controls" disabled={isSaving}>
        <label className="monster-form__label">Monster Name:</label>
        <input className="monster-form__input" type="text" value={name} onChange={onNameChange} />
        <label className="monster-form__label">Rating:</label>
        <input
          className="monster-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="monster-form__label">Place</label>
        <input
          className="monster-form__input"
          type="text"
          value={place}
          onChange={onPlaceChange}
        />
        <input
          className="monster-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default MonsterForm;
