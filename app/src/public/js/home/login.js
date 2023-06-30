"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  loginBtn = document.querySelector("#btn");

const login = (e) => {
  e.preventDefault();
  const req = {
    id: id.value,
    pw: pw.value,
  };
  fetch("/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
};

loginBtn.addEventListener("click", login);
