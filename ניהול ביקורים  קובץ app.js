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

app.delete('/visits/:id', (req, res) => {
    const deleteId = req.params.id;
    visits = visits.filter(visit => visit.pointId !== deleteId);
    res.status(204).send();
});
app.put('/visits/:id', (req, res) => {
    const updateId = req.params.id;
    const { guardName, status } = req.body;

    visits = visits.map(visit => {
        if (visit.pointId === updateId) {
            return { ...visit, guardName, status };
        }
        return visit;
    });
    res.status(200).json(visits.find(visit => visit.pointId === updateId));
});
app.get('/visits', (req, res) => {
    res.json(visits);
});
