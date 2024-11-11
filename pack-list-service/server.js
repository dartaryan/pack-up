const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

const packList = require('./items.json');

app.use(cors());
app.use(express.json());

app.listen(port, (err) => {
    console.log(`Server running on port https://localhost:${port}`);
});