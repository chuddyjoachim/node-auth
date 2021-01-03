const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening @http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
