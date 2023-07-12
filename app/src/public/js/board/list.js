"use strict";

// const ctnt = document.querySelector(".ctnt");
// const ctnt = document.getElementsByClassName("ctnt");
const newConBtn = document.querySelector("#newContent");
const ctnt = document.querySelector("tr");

const goView = () => {
  console.log(ctnt);
  for (const i = 0; i <= ctnt.length(); i++) {
    console.log(ctnt[i]);
  }
};

const edit = () => {
  location.href = "/board/edit";
};

newConBtn.addEventListener("click", edit);

ctnt.addEventListener("click", console.log(ctnt));
