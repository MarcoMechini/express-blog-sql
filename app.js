const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
// const post = require("./data/posts");
const postsRouter = require("./routers/routersPosts");
const handleError = require("./middleware/handleError");

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));    //permette di fare richieste da un altro server
app.use(express.static('public'));
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.json("hello")
})

app.use(handleError)

app.listen(port, () => {
    console.log("server on");
})