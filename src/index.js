require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const { json } = require('express/lib/response');
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.use('/', require('./routes/post.routes.js'));

app.listen(port, ()=> {
    console.log(`\n\n###### SERVER RUNNING ON ###### \n\n http://localhost:${port}`);
});

dbConnect();