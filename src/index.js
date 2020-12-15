import "./styles.css";
import { colors } from "./js/colors.js";
import refs from "./js/refs.js";
const { startBtn, h1, body, pauseBtn } = refs;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorizeItems = (time) => {
  setInterval(() => {
    startBtn.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    pauseBtn.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    h1.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, time);
};

colorizeItems(200);

const bodyColorize = (time) => {
  const bodyColor = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, time);
};

startBtn.addEventListener("click", () => bodyColorize(100));
pauseBtn.addEventListener("click", () => clearInterval());
