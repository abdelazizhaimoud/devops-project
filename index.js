// index.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
let server; // Declare server variable

app.get('/', (req, res) => {
  res.json({ message: 'Hello, DevOps World!' });
});

// Start the server and assign it to the server variable
const startServer = () => {
  return new Promise((resolve) => {
    server = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      resolve();
    });
  });
};

const closeServer = () => {
    return new Promise((resolve) => {
        server.close(resolve);
    });
};

// Only start the server if this module is run directly (not imported for testing)
if (require.main === module) {
  startServer();
}

export { app, startServer, closeServer };