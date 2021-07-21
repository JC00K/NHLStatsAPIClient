import express from 'express';
const app = express();

app.get('/', (res, req) => {
  res.send('Hello from Express and TypeScript');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App Listening on Port ${port}`));
