const express = require("express");
const dialer = require("dialer").Dialer;
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

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}`);
});

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

  let interval = setInterval(async () => {
    let status = await bridge.getStatus();
    console.log(status);
    if (
      status === "ANSWERED" ||
      status === "FAILED" ||
      status === "BUSY" ||
      status === "NO ANSWER"
    ) {
      console.log("stop");
      clearInterval(interval);
    }
  }, 2000);
  res.json({ success: true });
});

app.get("/status", async function (req, res) {
  let status = await bridge.getStatus();
  res.json({ id: "123", status: status });
});
