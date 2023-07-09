"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes");
const board = require("./src/routes");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use("/css", express.static(`${__dirname}/node_modules/bootstrap/dist/css`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ exrended: true }));

app.use("/", home); // 미들웨어 등록하는 메소드
app.use("/admin", home);
app.use("/join", home);
app.use("/list", board);
app.use("/view", board);

module.exports = app;
