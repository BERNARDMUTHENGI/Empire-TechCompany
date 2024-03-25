import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const db = mysql.createConnection({
    database: "empire",
    user: "root",
    password: "@Richie254",
    host: "localhost"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

const app = express();
const port = 8800;

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
    const q = 'SELECT * FROM users';
    db.query(q, (err, results) => {
        if (err) {
            console.error('Error querying database: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(results);
    });
});


app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    const query = `SELECT * FROM your_table WHERE column LIKE '%${searchTerm}%'`;
  
    db.query(query, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });






app.post('/users', (req, res) => {
    const { email, username, password } = req.body;
    const q = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
    db.query(q, [email, username, password], (err, result) => {
        if (err) {
            console.error('Error inserting into database: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(result);
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const q = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(q, [email, password], (err, result) => {
        if (err) {
            console.error('Error querying database: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (result.length > 0) {
            res.send(result);
        } else {
            res.status(401).send('Incorrect email or password');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
