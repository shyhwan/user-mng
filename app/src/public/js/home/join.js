"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  pw = document.querySelector("#pw"),
  confirmPw = document.querySelector("#confirmPw"),
  joinBtn = document.querySelector("#btn");

const join = (e) => {
  e.preventDefault();
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    confirmPw: confirmPw.value,
  };
  console.log(req);
  fetch("/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
};

joinBtn.addEventListener("click", join);
