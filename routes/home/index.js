"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.login);

router.get("/join", ctrl.join);

router.get("/admin", ctrl.admin);

module.exports = router;
