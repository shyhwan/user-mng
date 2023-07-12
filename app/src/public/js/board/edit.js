"use strict";

const cancelBtn = document.querySelector("#cancel");

const cancel = (e) => {
  e.preventDefault();
  location.href = "/board/list";
};

cancelBtn.addEventListener("click", cancel);
