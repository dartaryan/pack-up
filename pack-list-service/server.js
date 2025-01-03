const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;
const fs = require('fs');

const items = require('./items.json');

app.use(cors());
app.use(express.json());

app.listen(port, (err) => {
    console.log(`Server running on port https://localhost:${port}`);
});

app.get('/api/v1/items', (req, res) => {
    return res.json(items);
});

app.get('/api/v1/items/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(item => item.id === id);
    return res.json(item);
});


app.post('/api/v1/items', (req, res) => {
    const newId = Number(items[items.length - 1].id) + 1;
    delete req.body.id;
    const newItem = Object.assign({id: newId}, req.body);
    items.push(newItem);
    fs.writeFile('./items.json', JSON.stringify(items), (err, data) => {
        if (err) return res.status(500).json({error: 'Error writing to file.'});
        return res.json({message: 'Item added successfully'});
    });
});

app.put('/api/v1/items/:id', (req, res) => {
    const existingId = Number(req.params.id);
    const itemIndex = items.findIndex(item => item.id === existingId);
    if (itemIndex === -1) return res.status(404).json({error: 'Item not found'});
    items.splice(itemIndex, 1, {...req.body});

    fs.writeFile('./items.json', JSON.stringify(items), (err, data) => {
        if (err) return res.status(500).json({error: 'Error writing to file.'});
        return res.json({message: 'Item updated successfully'});
    });
});

app.delete('/api/v1/items/:id', (req, res) => {
    const existingId = Number(req.params.id);
    const filteredItem = items.filter(item => item.id !== existingId);
    if (filteredItem.length === items.length) return res.status(404).json({error: 'Item not found'});
    items.splice(0, items.length, ...filteredItem);
    fs.writeFile('./items.json', JSON.stringify(items), (err, data) => {
        if (err) return res.status(500).json({error: 'Error writing to file.'});
        return res.json({message: 'Item deleted successfully'});
    });
});

