const express = require("express");
const { createOrUpdateData } = require("../lib/data");
const { getUserPsw } = require("../lib/user");

const app = express();
const port = 4567;

// read update delete...
app.use(express.json());

app.put('/data', (req, res) => {
  // 真實情況會複雜許多，此範例是為了簡單演示
  const { userName, psw, key, value } = req.body;
  
  if (psw === getUserPsw(userName)) {
    const result = createOrUpdateData(key, value);
    if (result) return res.status(200).send('ok');
    else return res.status(500).send('error');
  }
  return res.status(401).send('user or psw error');
});

app.listen(port, () => {
  console.log(`server listen at port: ${port}`);
});
