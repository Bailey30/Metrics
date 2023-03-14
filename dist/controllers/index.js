"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsController = exports.timeController = void 0;
var timeController = function (req, res) {
    res.send("Time");
};
exports.timeController = timeController;
var metricsController = function (req, res) {
    res.send("Metrics");
};
exports.metricsController = metricsController;
