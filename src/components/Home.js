import React from "react";
import beer from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={beer} alt="" />
      <div>
        <Link
          to="/beers"
          style={{ textAlign: "start", textDecoration: "none", color: "black" }}
        >
          <h2
            style={{
              textAlign: "start",
              textDecoration: "none",
              color: "black",
            }}
          >
            All beers
          </h2>
        </Link>
        <p
          style={{ textAlign: "start", textDecoration: "none", color: "black" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam
          maxime illo officiis ea cum facere vel delectus ipsum labore aut
          assumenda molestias, dolore debitis est facilis ratione beatae optio?
        </p>
      </div>
      <img src={randomBeer} alt="" />

      <Link
        to="/random-beer"
        style={{ textAlign: "start", textDecoration: "none", color: "black" }}
      >
        <h2
          style={{ textAlign: "start", textDecoration: "none", color: "black" }}
        >
          Random beer
        </h2>
      </Link>

      <p style={{ textAlign: "start", textDecoration: "none", color: "black" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati in
        dolores quae asperiores ducimus ipsam consequatur sequi eum sint
        recusandae consequuntur ut laborum dicta quo, nobis harum voluptatem
        distinctio dolorem.
      </p>
      <img src={newBeerImage} alt="" />

      <Link
        to="/beers/new-beer"
        style={{ textAlign: "start", textDecoration: "none", color: "black" }}
      >
        <h2
          style={{ textAlign: "start", textDecoration: "none", color: "black" }}
        >
          New beer
        </h2>
      </Link>

      <p style={{ textAlign: "start", textDecoration: "none", color: "black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        consequatur alias minima hic tempore consectetur at nulla nemo quae, eos
        possimus minus? Molestiae, cumque et minus perspiciatis ipsum culpa
        atque.
      </p>
    </div>
  );
}

export default Home;
