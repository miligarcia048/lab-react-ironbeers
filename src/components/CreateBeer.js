import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function CreateBeer() {
  const [name, setName] = useState();
  const [tagline, setTagline] = useState();
  const [description, setDescription] = useState();
  const [firstBrewed, setFirstBrewed] = useState();
  const [brewerTips, setBrewerTips] = useState();
  const [attenuation, setAttenuation] = useState();
  const [contribute, setContribute] = useState();

  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleTaglineChange(event) {
    setTagline(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleFirstBrewedChange(event) {
    setFirstBrewed(event.target.value);
  }

  function handleBrewerTipsChange(event) {
    setBrewerTips(event.target.value);
  }
  function handleAttenuationChange(event) {
    setAttenuation(event.target.value);
  }
  function handleContributeChange(event) {
    setContribute(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewerTips,
      attenuation_level: attenuation,
      contributed_by: contribute,
    };

    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);

    navigate("/beers");
  }
  return (
    <div>
      <h2>Add new Beer</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <br></br>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          id="name"
          value={name}
        />
        <br></br>

        <label htmlFor="tagline">Tagline</label>
        <br></br>
        <input
          onChange={handleTaglineChange}
          type="text-area"
          name="tagline"
          id="tagline"
          value={tagline}
        />
        <br></br>

        <label htmlFor="description">Description</label>
        <br></br>
        <input
          onChange={handleDescriptionChange}
          type="text"
          name="description"
          id="description"
          value={description}
        />
        <br></br>

        <label htmlFor="firstBrewed">First Brewed</label>
        <br></br>
        <input
          onChange={handleFirstBrewedChange}
          type="text"
          name="firstBrewed"
          id="firstBrewed"
          value={firstBrewed}
        />
        <br></br>

        <label htmlFor="brewerTips">Brewer Tips</label>
        <br></br>
        <input
          onChange={handleBrewerTipsChange}
          type="text"
          name="brewerTips"
          id="brewerTips"
          value={brewerTips}
        />
        <br></br>

        <label htmlFor="attenuation">Attenuation</label>
        <br></br>
        <input
          onChange={handleAttenuationChange}
          type="number"
          name="attenuation"
          id="attenuation"
          value={attenuation}
        />
        <br></br>

        <label htmlFor="contribute">Contribute</label>
        <br></br>
        <input
          onChange={handleContributeChange}
          type="text"
          name="contribute"
          id="contribute"
          value={contribute}
        />
        <br></br>

        <button type="submit" style={{ marginTop: "20px" }}>
          Add New
        </button>
      </form>
    </div>
  );
}

export default CreateBeer;
