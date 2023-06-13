const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());

app.use("/", expressStaticGzip("./build", {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
    serveStatic: {
        setHeaders: (res, path) => {
            if (path.endsWith(".html")) {
                res.setHeader("Cache-Control", "public, max-age=0");
            } else {
                res.setHeader("Cache-Control", `public, max-age=${30 * 24 * 60 * 60}`);
            }
        }
    }
}));

app.get("*", async (req, res) => {
    res.sendFile("index.html", { root: "./build" });
});

const startServer = async () => {
    try {
        app.listen(process.env.CLIENT_SERVER_PORT, () => console.log(`Client Server has started on port ${process.env.CLIENT_SERVER_PORT}`));
    } catch (error) {
        console.log(error);
    }
}

startServer();