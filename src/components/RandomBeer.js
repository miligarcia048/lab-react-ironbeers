import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(res.data);
    })();
  }, []);

  return (
    <div>
      <div key={randomBeer._id} style={{ width: "150px" }}>
        <img src={randomBeer.image_url} alt="" style={{ width: "30px" }} />
        <h1>{randomBeer.name}</h1>
        <h2>{randomBeer.tagline}</h2>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>
          <b>Created by:</b>
          {randomBeer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default RandomBeer;
