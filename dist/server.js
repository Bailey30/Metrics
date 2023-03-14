"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3001;
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("./routes"));
var cors = require("cors");
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// define a route handler for the default home pagelet
var corsOptions = {
    origin: [
        "http://localhost:3001",
        "http://localhost:3000",
        "https://clear-start-crm.opopservices.co.uk",
        "https://f12.opopservices.co.uk",
    ],
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(routes_1.default);
app.get('/', function (req, res) {
    res.send('Hello world!');
});
// start the express server
app.listen(port !== null && port !== void 0 ? port : 3001, function () {
    console.log('server started at http://localhost:3000');
});
// run the server
// npm run dev
// open the browser and go to http://localhost:3000
// you should see the message "Hello world!"
