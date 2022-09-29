const express = require("express")
const cors = require("cors")
const app = express()
const port = 3050;
const userRoute = require("../src/routes/userRoute.js")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})