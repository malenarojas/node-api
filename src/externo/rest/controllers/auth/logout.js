const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  req.session = null;

  res.send({ message: 'Deslogueo exitoso.' });
});

const logoutRouter = router;

module.exports = { logoutRouter };
