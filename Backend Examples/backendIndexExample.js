import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is alive'));
