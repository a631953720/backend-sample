const express = require('express');

const app = express();
const port = 4567;

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`server listen at port: ${port}`);
});
