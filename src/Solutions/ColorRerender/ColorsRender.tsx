import ColorRenderItem, { ItemType } from "./ColorRenderItem";

type ListColorsProps = {
  colors: Array<ItemType>;
  title?: string;
  onChangeBg?: (color: string) => void;
};

export default function ColorsRender({
  title = "List of colors",
  onChangeBg,
  colors,
}: ListColorsProps) {
  return (
    <div className="lists">
      <h3>{title}</h3>
      <div style={{ display: "flex" }}>
        {colors.map((item) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={
              onChangeBg !== undefined
                ? () => onChangeBg(item.color)
                : undefined
            }
          >
            <ColorRenderItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}