"use strict";

const login = (req, res) => {
  res.render("home/index");
};

const join = (req, res) => {
  res.render("home/join");
};

const admin = (req, res) => {
  res.render("home/admin");
};

module.exports = {
  login,
  join,
  admin,
};
