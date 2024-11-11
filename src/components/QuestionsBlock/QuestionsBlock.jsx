"use client";
import React from "react";

function QuestionsBlock({ data, currentQuestion }) {
  const { id, title, options } = data[currentQuestion];
  console.log(options);
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {options.map((e) => {
          const { id, text } = e;
          return <li key={id}>{text}</li>;
        })}
      </ul>
    </div>
  );
}

export default QuestionsBlock;
