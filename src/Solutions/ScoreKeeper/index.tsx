import { useState } from "react";

import "./scorekeeper.css";
import ListTeam from "./ListTeam";
import Dashboard from "./Dashboard";

const dummyTeams = [
    { id: "1", name: "Team 1", score: 0 },
    { id: "2", name: "Team 2", score: 0 },
]

export default function ScoreKeeper() {
    const [teams, setTeams] = useState(dummyTeams);

    return (
        <div>
            <ListTeam teams={teams}></ListTeam>
            <Dashboard teams={teams} setTeams={setTeams} ></Dashboard>
        </div>
    )
}
