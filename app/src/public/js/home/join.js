"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  pw = document.querySelector("#pw"),
  confirmPw = document.querySelector("#confirmPw"),
  joinBtn = document.querySelector("#btn");

const join = (e) => {
  e.preventDefault();
  if (!id.value) {
    return alert("아이디를 입력해 주세요.");
  }
  if (pw.value !== confirmPw.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };
  console.log(req);
  fetch("/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("회원가입 되었습니다.");
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
};

joinBtn.addEventListener("click", join);
