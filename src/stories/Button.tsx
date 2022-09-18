import React from "react";
export interface ButtonProps {
  /**
   * 설명 추가도 가능하다
   */
  text: string;
  size?: string;
  isEmpty?: boolean;
  backgroundColor?: string;
}
function Button({ text, size, isEmpty, backgroundColor }: ButtonProps) {
  return (
    <>
      <button
        style={{
          width: size,
          height: "30px",
          backgroundColor: isEmpty ? "transparent" : backgroundColor,
          border: "none",
          borderRadius: "10px",
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
