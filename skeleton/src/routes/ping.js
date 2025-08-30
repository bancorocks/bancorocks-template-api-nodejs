const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "pong",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
