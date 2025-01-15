import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, DevOps World!' });
});

app.listen(PORT, () => {
  console.log(` -  Server running on http://localhost:${PORT}`);
});

export default app;
