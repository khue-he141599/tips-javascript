const express = require("express");
const app = express();
const apiKey = require("./auth/api_key");
const router = require("./route/user.route");
const connectDB = require("./database/db.connection");
const ApiKeyModel = require("./schema/api_key.schema");
const cors = require('cors')
const httpServer = require('http').Server(app);
const auth = require("./auth/api_key");

require('dotenv').config()
connectDB();

app.use(auth.apiKey);

// khong co thi se khong su dung duoc req.body
app.use(express.json({limit:"50mb"}));
app.use(cors());
app.use("/v1", router);

httpServer.listen(3000, (err) => {
    if (err) throw new Error(err);
    console.log("listening on port 3000");
});
