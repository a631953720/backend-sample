const express = require("express");
const { createOrUpdateData } = require("../lib/data");
const { getUserPsw } = require("../lib/user");

const app = express();
const port = 4567;

// read update delete...
app.use(express.json());

// Tips: 可以用下面的方式來做簡單測試
console.log(getUserPsw('andy')); // 會得到密碼 1234562

app.put('/data', (req, res) => {
  // 真實情況會複雜許多，此範例是為了簡單演示
  const { userName, psw, key, value } = req.body;

  console.log({ userName, psw, key, value });

  // 補上登入檢察功能
  return res.status(200).send('ok');
});

app.listen(port, () => {
  console.log(`server listen at port: ${port}`);
});
