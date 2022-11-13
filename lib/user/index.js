const path = require("path");
const { readAndParseJsonFile } = require("../utils");

const filePath = path.join(__dirname, "user.json");

function getUserPsw(userName) {
  const user = readAndParseJsonFile(filePath);
  return user[userName]?.psw;
}

module.exports = {
  getUserPsw
};
