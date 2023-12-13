const test = require("./test");
const question = require("./question");
const user = require("./user.js");
const stat = require("./stat.js");
const answer = require("./answer.js");
module.exports = [...test, ...question, ...user, ...stat, ...answer];
