import express from "express";

const app = express();

app.use(express.json());

app.post("/feedbacks", (req, res) => {
    console.log(req.body);
    
    return res.send("Hello World");
});

app.listen(3333, () => {
    console.log("HTTP Server started on port 3333");
});
