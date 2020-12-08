import React from "react";
import { Helmet } from "react-helmet";
import EditMonster from "../components/edit-monster";
import { useParams } from "react-router-dom";

function EditMonsterPage() {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditMonster id={id} />
    </main>
  );
}

export default EditMonsterPage;
