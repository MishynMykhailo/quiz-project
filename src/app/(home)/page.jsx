"use client";
import Container from "@/components/Container/Container";
import s from "./page.module.scss";
import QuestionsBlock from "../../components/QuestionsBlock/QuestionsBlock";
import react, { useState } from "react";
import ToggleBar from "@/components/ToggleBar/ToggleBar";
import data from "@/data/questions.json";
export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activeButton, setActiveButton] = useState("");

  const dataKey = Object.keys(data);
  return (
    <Container>
      <>
        <title>Quiz Project</title>
        <meta name="description" content="Welcome to the Home Page!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </>
      {currentScreen == "home" && (
        <div>
          <h2>{activeButton}</h2>
          <h1 className={s.mainTitle}>Создай свой уникальный Quiz</h1>
          <p className={s.subTitle}>
            Увлеки пользователя интерактивными вопросами и собери важную
            информацию о своей целевой аудитории. Персонализированный подход для
            лучшего результата!
          </p>
          <ToggleBar
            dataKey={dataKey}
            activeButton={activeButton}
            setActive={setActiveButton}
          />
        </div>
      )}
    </Container>
  );
}
