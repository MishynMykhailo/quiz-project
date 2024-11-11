import React, { useState } from "react";
import Button from "../Button/Button";
import s from "./ToggleBar.module.scss";
function ToggleBar({ dataKey, activeButton, setActive }) {
  const buttonSettings = dataKey.map((elem, index) => {
    return {
      id: index,
      type: "button",
      className: `${elem} ${activeButton == elem ? "active" : ""}`,
      text: elem,
      onClick: () => setActive(elem),
    };
  });

  return (
    <div className={s.toggleBar}>
      {buttonSettings &&
        buttonSettings.map((e) => {
          return <Button {...e} key={e.id}></Button>;
        })}
    </div>
  );
}

export default ToggleBar;
