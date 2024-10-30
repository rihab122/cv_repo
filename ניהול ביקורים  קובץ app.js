const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
let visits = [];

app.post('/visits', (req, res) => {
    const { pointId, guardName, status } = req.body;
    const visitTime = new Date().toISOString();
    const newVisit = { pointId, guardName, status, visitTime };
    visits.push(newVisit);
    res.status(201).json(newVisit);
});

