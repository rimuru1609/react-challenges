type ItemsProps = {
    item: { id: string; name: string; score: number };
    teams: { id: string; name: string; score: number }[];
    setTeams: (newTeams: { id: string; name: string; score: number }[]) => void;
}

export default function Item({ item, teams, setTeams }: ItemsProps) {
    const handleChangeName = (id: string, value: string) => {
        const updatedTeams = teams.map((team) =>
            team.id === id ? { ...team, name: value } : team
        );
        setTeams(updatedTeams);
    }

    const handleChangeSubScore = (id: string, score: number) => {
        const updatedTeams = teams.map((team) =>
            team.id === id ? { ...team, score: score - 1 } : team
        );
        setTeams(updatedTeams);
    }

    const handleChangeAddScore = (id: string, score: number) => {
        const updatedTeams = teams.map((team) =>
            team.id === id ? { ...team, score: score + 1 } : team
        );
        setTeams(updatedTeams);
    }

    return (
        <div className="item">
            <input type="text" placeholder="Change name of team 1" value={item.name} onChange={(e) => handleChangeName(item.id, e.target.value)} />
            <button onClick={() => handleChangeSubScore(item.id, item.score)}>-</button>
            <p>{item.score}</p>
            <button onClick={() => handleChangeAddScore(item.id, item.score)}>+</button>
        </div>
    )
}
