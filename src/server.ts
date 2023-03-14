var cors = require("cors");
const express = require("express");
const promMid = require("express-prometheus-middleware");
const app = express();

app.use(cors());

const PORT = 3001;

app.use(
    promMid({
        metricsPath: "/metrics", // path to access metrics
        collectDefaultMetrics: true, // collect default metrics
    })
);

// if req doesnt have autorization header then return 403
app.use((req: any, res: any, next: any) => {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader !== "Bearer mysecrettoken") {
        res.sendStatus(403);
    } else {
        next();
    }
});

app.get("/time", (req: any, res: any) => {
    const epoch = Math.floor(new Date().getTime() / 1000);
    res.json({
        epoch: epoch,
    });
});

app.listen(PORT, () => {
    console.log(`Example api is listening on http://localhost:${PORT}`);
});
