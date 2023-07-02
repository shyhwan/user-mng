"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  login: (req, res) => {
    res.render("home/index");
  },
  join: (req, res) => {
    res.render("home/join");
  },
  admin: (req, res) => {
    res.render("home/admin");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);
    res.render("home/admin");
  },
};

module.exports = { output, process };
