const express = require('express');

const app = express();
const port = 4567;

// 會建立 127.0.0.1/ 的路由，可以透過get 127.0.0.1 觸發此邏輯
app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello world');
});

// 會監聽本機的4567port，可以透過127.0.0.1:4567訪問
app.listen(port, () => {
  console.log(`server listen at port: ${port}`);
});
