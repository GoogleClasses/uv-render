
const express = require("express");
const path = require("path");
const UV = require("./uv/uv");
const config = require("./uv.config");
const app = express();
const uv = new UV(config);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", uv.middleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Ultraviolet is running on port ${port}`);
});
