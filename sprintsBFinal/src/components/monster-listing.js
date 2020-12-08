import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import "./monster-listing.css";
import Monster from "./monster";
import { monstersCollection } from "../data/firebase";

function MonstersListing() {
  const [monsters, setMonster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setMonster(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading. Please try again.");
      console.error(error);
    };
    const unsubscribe = monstersCollection.orderBy("rating", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
    setIsLoading(true);
  }, []);

  return (
    <div className="monster-container">
      <h1>Monsters</h1>
      {isLoading && <LoadingSpinner size="50px" spinnerColor="yellow" backgroundColor="#F6AA1C" />}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="monster-list">
        {monsters.map((monsterDoc) => {
          const id = monsterDoc.id;
          const data = monsterDoc.data();
          return (
            <li key={id}>
              <Monster id={id} data={data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MonstersListing;
