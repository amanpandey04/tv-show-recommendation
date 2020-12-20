import React, { useState } from "react";
import "./styles.css";

const tvShowDB = {
  Drama: [
    { name: "Breaking Bad", rating: "9.5/10" },
    { name: "Hannibal", rating: "8.5/10" },
    { name: "Chernobyl", rating: "9.4/10" },
    { name: "Narcos", rating: "8.8/10" }
  ],
  Action: [
    { name: "Shaktimaan", rating: "10/10" },
    { name: "The Boys", rating: "8.7/10" },
    { name: "The Mandalorian", rating: "8.7/10" },
    { name: "Game of Thrones", rating: "9.3/10" }
  ],
  Horror: [
    { name: "The Haunting of Hill House", rating: "8.6/10" },
    { name: "The Haunting of Bly Manor", rating: "7.4/10" },
    { name: "The Walking Dead", rating: "8.2/10" },
    { name: "American Horror Story", rating: "8/10" }
  ],
  Comedy: [
    { name: "The Office US", rating: "8.9/10" },
    { name: "F.R.I.E.N.D.S", rating: "8.9/10" },
    { name: "Silicon Valley", rating: "8.5/10" },
    { name: "Rick and Morty", rating: "9.2/10" }
  ]
};

const showList = Object.keys(tvShowDB);

export default function App() {
  const [currentGenre, setGenre] = useState("Drama");

  function clickHandler(e) {
    setGenre(e);
  }

  return (
    <div className="App">
      <h1>
        TV Show Recommendation{" "}
        <span role="img" aria-label="tv">
          📺
        </span>
      </h1>
      <div>
        {showList.map((genre) => {
          return (
            <button key={genre} onClick={() => clickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <br />
      <ul>
        {tvShowDB[currentGenre].map((show) => {
          return (
            <li className="show-list" key={show.name}>
              <div className="name">{show.name}</div>
              <div className="rating">{show.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
