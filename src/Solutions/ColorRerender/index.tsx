import React from "react";
import ColorsRender from "./ColorsRender";

const dummyColors = [
  { id: "1", color: "#252B48" },
  { id: "2", color: "#445069" },
  { id: "3", color: "#5B9A8B" },
  { id: "4", color: "#F7E987" },
  { id: "5", color: "#F79BD3" },
  { id: "6", color: "#9F0D7F" },
];

export default function ColorRender() {
  const [bgColor, setBgColor] = React.useState("");
  const onChangeBg = (color: string) => {
    setBgColor(color);
  };
  return (
    <div style={{ backgroundColor: bgColor }}>
      <ColorsRender onChangeBg={onChangeBg} colors={dummyColors} />
    </div>
  );
}
