export type TeamType = {
    id: string;
    name: string;
    score: number;
}

export default function Team({ id, name, score }: TeamType) {
    return (
        <div key={id} style={{ margin: 5 }}>
            <div className="boxName">{name}</div>
            <div className="boxScore">{score}</div>
        </div>
    )
}
