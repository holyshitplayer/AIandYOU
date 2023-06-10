const express = require('express');

const app = express();

// Обслуживание статических файлов
app.use(express.static("./build"));

// Обработка всех запросов, которые не сопоставляются с другими маршрутами
app.get("*", async (req, res) => {
    res.sendFile("index.html", { root: "./build" });
});

const startServer = async () => {
    try {
        app.listen(3000, () => console.log("Client Server has started on port http://localhost:3000"));
    } catch (error) {
        console.log(error);
    }
}

startServer();