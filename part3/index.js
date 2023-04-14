const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3001;

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content:
      'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.post('/api/notes', (req, res) => {
  const body = req.body;

  if (!body.content) {
    return res.status(400).json({
      error: 'content missing',
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  };

  notes = notes.concat(note);

  res.json(note);
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const noteToDelete = notes.find((note) => note.id === id);

  if (noteToDelete) {
    notes = notes.filter((note) => note.id !== id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
