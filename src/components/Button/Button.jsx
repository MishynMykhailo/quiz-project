import React from "react";
import s from "./Button.module.scss";
function Button({ id, type = "button", className, text, onClick }) {
  function getClassList(atrClassName) {
    const classArray = atrClassName.trim().split(" ");
    return classArray.map((e) => s[e] || e).join(" ");
  }

  return (
    <button
      id={id}
      type={type}
      className={`${s.button} ${getClassList(className)}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
