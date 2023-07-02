"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.login);
router.get("/join", ctrl.output.join);
router.get("/admin", ctrl.output.admin);
router.post("/", ctrl.process.login);
router.post("/join", ctrl.process.join);

module.exports = router;
