import React, { useState, useEffect } from "react";
import "./edit-monster.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MonsterForm from "./monster-form";
import { monstersCollection } from "../data/firebase";

function EditMonster(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [monsterData, setMonsterData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    async function getMonster() {
      setIsLoading(true);
      try {
        const monsterSnapshot = await monstersCollection.doc(id).get();

        if (!monsterSnapshot.exists) {
          throw new Error("This monster has not been reported.");
        }

        const data = monsterSnapshot.data();
        setMonsterData(data);
      } catch (error) {
        setErrorMessage("Ope! Something went wrong there!");
        console.error(error);
      }
      setIsLoading(false);
    }
    getMonster();
  }, [id]);

  const onMonsterSubmit = async (name, rating, place) => {
    setIsSaving(true);
    setFormMessage("");
    try {
      await monstersCollection.doc(id).set({
        name,
        rating,
        place,
      });
      setFormMessage("Succesfully Submitted!");
    } catch (error) {
      console.error(error);
      setFormMessage("Ope! Something's hinky- Try again!");
    }
    setIsSaving(false);
  };

  return (
    <div className="edit-container">
      <h2>Edit Monster</h2>

      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {monsterData && (
        <MonsterForm
          initialState={monsterData}
          onSubmit={onMonsterSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditMonster;
