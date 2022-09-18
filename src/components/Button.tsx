import * as React from "react";
export interface TitleProps {
  text: string;
  size?: string;
}
const Button = ({ text, size }: TitleProps) => {
  return (
    <>
      <button style={{ fontSize: size }}>{text}</button>
    </>
  );
};

export default Button;
