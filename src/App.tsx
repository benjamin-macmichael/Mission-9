import React from "react";
import logo from "./logo.svg";
import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        College Teams in NCAA Basketball
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>School: {oneTeam.school}</h1>
          <h3>Mascot: {oneTeam.name}</h3>
          <h3>City: {oneTeam.city}</h3>
          <h3>State: {oneTeam.state}</h3>
        </header>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsData.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
