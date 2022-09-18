import React from "react";
export interface TitleProps {
  text: string;
  size?: string;
  color?: string;
}
function Title({ text, size, color }: TitleProps) {
  return <div style={{ fontSize: size, color: color }}>{text}</div>;
}

export default Title;
