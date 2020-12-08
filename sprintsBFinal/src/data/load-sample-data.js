import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addMonster);
}

async function addMonster({ name, rating, place }) {
  try {
    const data = { name, rating, place };

    const snapshot = await db
      .collection("monsters")
      .where("name", "==", name)
      .where("place", "==", place)
      .get();

    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("monsters").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;
