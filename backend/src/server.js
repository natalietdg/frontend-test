const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;
// const server = http.createServer(app).listen(3000);
// const router = (global.router = (express.Router()));

// app.use('/posts', require('./api/routes/posts'))
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// })

// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors({ origin: "http://localhost:8081" }));

app.use("/", require("./api/routes/comments"));
app.use("/", require("./api/routes/posts"));
app.use("/", require("./api/routes/search"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(port || 3001, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     // res.end('TribeHired Backend Test');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`)
// });
