let prev = document.getElementById("pre-btn");
let next = document.getElementById("nex-btn");
let gallery = document.getElementById("mid-box");

prev.addEventListener("click", colorChanger);
next.addEventListener("click", colorChanger);

let colorArr = [
  "rgb(0, 255, 255)",
  "rgba(0, 85, 255, 0.56)",
  "rgb(248, 209, 141)",
  "rgb(255, 0, 67)",
  "rgb(0, 255, 14)",
  "rgb(246, 255, 0)",
  "rgb(0, 0, 0)",
];

let indexPos = 0;

function colorChanger(event) {
  let selectedBtn = event.target.id;

  if (selectedBtn === "nex-btn") {
    if (indexPos === colorArr.length - 1) {
      document.getElementById("mid-box").style.backgroundColor = colorArr[0];
      indexPos = 0;
    } else {
      indexPos++;
      document.getElementById("mid-box").style.backgroundColor =
        colorArr[indexPos];
    }
  }
  if (selectedBtn === "pre-btn") {
    if (indexPos === 0) {
      document.getElementById("mid-box").style.backgroundColor =
        colorArr[colorArr.length - 1];
      indexPos = colorArr.length - 1;
    } else {
      indexPos--;
      document.getElementById("mid-box").style.backgroundColor =
        colorArr[indexPos];
    }
  }
}
