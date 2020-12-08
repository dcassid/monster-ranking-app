import React from "react";
import { Helmet } from "react-helmet";
import AddMonster from "../components/add-monster";

function AddMonsterPage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddMonster />
    </main>
  );
}

export default AddMonsterPage;
