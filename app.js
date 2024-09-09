const express = require("express");
const config = require("config");
const sequelize = require('./config/db');

const mainRouter = require("./routes/index.routes");
const PORT = config.get("port");

const app = express();

app.use(express.json());

app.use("/api", mainRouter);

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alternate: true });
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
