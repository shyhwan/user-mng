"use strict";

const editBtn = document.querySelector("#edit");
const delBtn = document.querySelector("#delete");
const listBtn = document.querySelector("#list");

const goEdit = () => {
  location.href = "/board/edit";
};

const goDelete = (e) => {
  if (confirm("삭제 하시겠습니까?")) {
    alert("삭제 하였습니다.");
    location.href = "/board/list";
  }
};

const goList = (e) => {
  location.href = "/board/list";
};

editBtn.addEventListener("click", goEdit);
delBtn.addEventListener("click", goDelete);
listBtn.addEventListener("click", goList);
