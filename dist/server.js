"use strict";
var cors = require("cors");
var express = require("express");
var promMid = require("express-prometheus-middleware");
var app = express();
app.use(cors());
var PORT = 3001;
app.use(promMid({
    metricsPath: "/metrics",
    collectDefaultMetrics: true, // collect default metrics
}));
// if req doesnt have autorization header then return 403
app.use(function (req, res, next) {
    var bearerHeader = req.headers["authorization"];
    if (bearerHeader !== "Bearer mysecrettoken") {
        res.sendStatus(403);
    }
    else {
        next();
    }
});
app.get("/time", function (req, res) {
    var epoch = Math.floor(new Date().getTime() / 1000);
    res.json({
        epoch: epoch,
    });
});
app.listen(PORT, function () {
    console.log("Example api is listening on http://localhost:".concat(PORT));
});
