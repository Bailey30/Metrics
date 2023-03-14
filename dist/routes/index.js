"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var router = (0, express_1.Router)();
router.post("/time", index_1.timeController);
router.post("/metrics", index_1.metricsController);
exports.default = router;
