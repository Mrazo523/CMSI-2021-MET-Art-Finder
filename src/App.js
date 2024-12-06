import { useState, useEffect } from "react";

import Title from "./Title";
import Entry from "./Entry";
import Info from "./info";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    // Example artist name (Van Gogh)
    const artistName = encodeURIComponent(name.toLowerCase());

    // First, search for object IDs by the artist name

    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${artistName}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Get the first object ID
        if (data.total === 0 || !data.objectIDs) {
          return;
        }
        const objectId = data.objectIDs[0];

        // Fetch the details of the artwork using the object ID
        fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
        )
          .then((r) => r.json())
          .then((r) => setData(r));
      });
  }, [name]);

  return (
    <div className="App">
      <Title title="MET Art Finder" />
      <Entry action={setName} />
      <Info data={data} />
    </div>
  );
}
