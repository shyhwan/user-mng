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
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/board/list";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
};

loginBtn.addEventListener("click", login);
