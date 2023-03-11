import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OneBeer() {
  const { beerId } = useParams();

  const [oneBeer, setOneBeer] = useState("");

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setOneBeer(res.data);
    })();
  }, []);

  return (
    <div>
      <div key={oneBeer._id} style={{ width: "150px" }}>
        <img src={oneBeer.image_url} alt="" style={{ width: "30px" }} />
        <h1>{oneBeer.name}</h1>
        <h2>{oneBeer.tagline}</h2>
        <p>{oneBeer.description}</p>
        <p>
          <b>Created by:</b>
          {oneBeer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default OneBeer;
