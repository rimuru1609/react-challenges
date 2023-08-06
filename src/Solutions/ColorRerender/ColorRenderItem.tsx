export type ItemType = {
  id: string;
  color: string;
};

export default function ColorRenderItem({ id, color }: ItemType) {
  return (
    <div key={id} className="item">
      <div
        style={{ width: 50, height: 50, backgroundColor: color, margin: 24 }}
      />
      <p>{color}</p>
    </div>
  );
}
