const express = require("express");
const axios = require("axios");
const lodash = require("lodash");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const result = lodash.pick(response.data, [
      "id",
      "title",
      "completed",
    ]);

    res.json({
      message: "Node Vulnerability Demo",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});