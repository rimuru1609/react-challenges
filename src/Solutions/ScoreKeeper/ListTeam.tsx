import Team, { TeamType } from "./Team"

export type ListTeamsProps = {
    teams: Array<TeamType>;
}

export default function ListTeam({ teams }: ListTeamsProps) {
    return (
        <div className="container">
            <div style={{ display: "flex" }}>
                {teams.map((item, key) => <Team {...item} key={key}></Team>)}
            </div>
        </div>
    )
}
