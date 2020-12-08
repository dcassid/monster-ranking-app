import React, { useState } from "react";
import { monstersCollection } from "../data/firebase";
import "./add-monster.css";
import MonsterForm from "./monster-form";

function AddMonster() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onMonsterSumbit = async (name, rating, place) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      await monstersCollection.add({
        name,
        rating,
        place,
      });
      setFormMessage("Saved Successfully");
    } catch (error) {
      console.error(error);
      setFormMessage("Oopsie! Something went wrong.");
    }

    setIsSaving(false);
  };
  return (
    <div className="add-container">
      <h1>Add Monster</h1>
      <MonsterForm onSubmit={onMonsterSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddMonster;
