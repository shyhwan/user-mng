"use strict";

const express = require("express");
const router = express.Router();
const homeCtrl = require("./home/home.ctrl");
const boardCtrl = require("./board/board.ctrl");

router.get("/", homeCtrl.output.login);
router.get("/join", homeCtrl.output.join);
router.get("/admin", homeCtrl.output.admin);
router.get("/board/list", boardCtrl.output.list);
router.get("/board/view", boardCtrl.output.view);
router.get("/board/edit", boardCtrl.output.edit);

router.post("/", homeCtrl.process.login);
router.post("/join", homeCtrl.process.join);

module.exports = router;
