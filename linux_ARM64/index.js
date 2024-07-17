const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.status(200).json({ message: "Hello from Docker ARM64 v2 🎉" });
});

app.get("/health", (req, resp) => {
  // throw new Error("Internal Server Error");
  resp.status(200).json({ message: "Everything is good here" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
