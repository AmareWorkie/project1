const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// Dummy user data (replace with database authentication)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    res.status(400).json({ success: false, message: 'Username already exists' });
  } else {
    users.push({ username, password });
    res.json({ success: true });
  }
});

app.get('/success', (req, res) => {
  res.send('Login or signup successful');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
