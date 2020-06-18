import React, { useState } from "react";
import "./App.css";

function App() {
  const number = 0;
  const [homeScore, homeSetScore] = useState(number);
  const [awayScore, awaySetScore] = useState(number);
  const [quarter, setQuarter] =useState(number);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
          <div className="down__value">3</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">7</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>
        </div>
      </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => homeSetScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => homeSetScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => awaySetScore(awayScore +7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => awaySetScore(awayScore +3)}>Away Field Goal</button>
        </div>
        <div>
        <button className="quarterButton" onClick = {() => setQuarter (quarter + 1)}>Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
