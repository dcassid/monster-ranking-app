import React from "react";
import { Helmet } from "react-helmet";
import MonsterListing from "../components/monster-listing";

function MonsterPage() {
  return (
    <main>
      <Helmet>
        <title>Monsters</title>
      </Helmet>
      <MonsterListing />
    </main>
  );
}

export default MonsterPage;
