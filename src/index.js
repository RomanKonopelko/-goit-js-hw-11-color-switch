import "./styles.css";
import { colors } from "./js/colors.js";
import refs from "./js/refs.js";

const { startBtn, h1, body, pauseBtn } = refs;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId = null;
let startColorize = null;
let pauseColorize = null;

const colorizeItems = (time) => {
  startColorize = setInterval(() => {
    startBtn.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, time);
  pauseColorize = setInterval(() => {
    pauseBtn.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, time);

  setInterval(() => {
    h1.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, time);
};

colorizeItems(200);

const bodyColorize = () => {
  // if (intervalId) {
  //   return;
  // }
  intervalId = setInterval(() => {
    startBtn.disabled = true;
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 800);
};

const bodyClear = () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
  body.style.backgroundColor = "";
  intervalId = null;
};

startBtn.addEventListener("click", bodyColorize);

pauseBtn.addEventListener("click", bodyClear);
