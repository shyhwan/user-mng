"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

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
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  join: (req, res) => {
    const user = new User(req.body);
    const response = user.join();
    return res.json(response);
  },
};

module.exports = { output, process };
