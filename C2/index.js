const express = require("express");
const { getAllData, getDataByKey, createOrUpdateData, deleteData } = require("../lib/data");

const app = express();
const port = 4567;

app.use(express.json());
// read update delete...

app.listen(port, () => {
  console.log(`server listen at port: ${port}`);
});

console.log(getAllData());
console.log(deleteData('aaa'));
console.log(createOrUpdateData('aaa', 456));
console.log(getDataByKey('aaa'));
