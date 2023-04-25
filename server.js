const express   = require("express");
const cors      = require("cors");

const app = express();
const port = 4000;

app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var tagId = "-1";

app.get("/", (req, res) => {
    res.send(tagId);
    console.log(`requested tag id: ${tagId}`);
});

app.get("/update", (req, res) => {
    tagId = req.query.id;
    res.send("OK");
    console.log(`Tag id update: ${tagId}`);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
