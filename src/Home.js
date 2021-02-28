import React from "react";

function Home() {
  return (
    <div>
      <div>
        <a href="/piano">
          <img src={"/arrow.png"} id="arrow" />
        </a>
        <div id="description">
          <p>
            The purpose of this piano is to act as another
            <br />
            audio/visual tool for composers.
            <br />
            Sometimes seeing the set up of an instrument differently can inform
            <br />
            new musical decisions.
            <br />
            <br />
            The single-pitched drones in the middle of the piano
            <br />
            serve as the musical base for which the user can play on top of (or
            against).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
