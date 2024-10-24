"use client";
import React from "react";

const Button = (props) => {
  const { btn_type, content, callbackfn, btn_styles } = props;
  const handleCall = async () => {
    if (callbackfn) {
      callbackfn();
    }
  };
  return (
    <button type={btn_type} onClick={handleCall} className={btn_styles}>
      {content}
    </button>
  );
};

export default Button;
