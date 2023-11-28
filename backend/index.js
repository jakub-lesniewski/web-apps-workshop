const express = require("express");
const dialer = require("dialer").Dialer;
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const config = {
  url: "https://uni-call.fcc-online.pl",
  login: "focus04",
  password: "#dj6umytbhns",
};

dialer.configure(config);

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

// app.listen(port, () => {
//   console.log(`App running on port ${port}`);
// });

const serverInstance = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

const io = new Server(serverInstance);

app.get("/test", (req, res) => {
  res.json({ message: "test" });
});

app.get("/call/:number1/:number2", async (req, res) => {
  const number1 = req.params.number1;
  const number2 = req.params.number2;

  try {
    await dialer.call(number1, number2);
    res.json({ success: true });
  } catch (error) {
    console.error("Error making the call:", error);
    res.status(500).json({ success: false, error: "Failed to make the call" });
  }
});

app.post("/call/", async (req, res) => {
  const number1 = req.body.number;
  const number2 = "573055986";

  console.log("Calling", number1, number2);

  const bridge = await dialer.call(number1, number2);

  let oldStatus = null;

  let interval = setInterval(async () => {
    let currentStatus = await bridge.getStatus();
    if (currentStatus !== oldStatus) {
      oldStatus = currentStatus;
      io.emit("status", currentStatus);
    }
    if (
      currentStatus === "ANSWERED" ||
      currentStatus === "FAILED" ||
      currentStatus === "BUSY" ||
      currentStatus === "NO ANSWER"
    ) {
      console.log("stop");
      clearInterval(interval);
    }
  }, 1000);
  res.json({ id: "123", status: bridge.STATUSES.NEW });
});

app.get("/status", async function (req, res) {
  let status = await bridge.getStatus();
  res.json({ id: "123", status: status });
});
