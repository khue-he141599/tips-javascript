const express = require("express");
const router = express.Router();
const apiKeyController = require("../controller/api_key.controller");

router.post("/", async (req, res) => {
    apiKeyController.createApiKey(req, res);
});

module.exports = router;
