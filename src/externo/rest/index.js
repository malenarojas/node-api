require('dotenv').config();

const { app } = require('./app.js');

const start = async () => {
  const port = process.env.PORT || 3001;
  try {
  } catch (error) {
    console.error(error);
  }
  app.listen(port, '0.0.0.0', () => {
    console.log(`ESCUCHANDO PUERTO ${port}`);
  });
};

start();
