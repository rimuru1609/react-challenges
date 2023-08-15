import Item from "./Item";

type DashboardProps = {
    teams: { id: string; name: string; score: number }[];
    setTeams: (newTeams: { id: string; name: string; score: number }[]) => void;
}

export default function Dashboard({ teams, setTeams }: DashboardProps) {
    return (
        <div className="dashboard">
            <h3>Dashboard</h3>
            {teams.map((item, key) => <Item key={key} item={item} teams={teams} setTeams={setTeams}></Item>)}
        </div>
    )
}
