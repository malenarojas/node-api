const express = require('express');
const db = require('../../../postgresDB/models/index.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const denuncias = await db.DENUNCIA.findAll({
      order: [['idDenuncia', 'ASC']]
    });
    res.send({ data: denuncias, message: 'Lista de denuncias' });
  } catch (error) {
    if (error instanceof Error) {
      res.send({ data: null, message: error.message });
    }
  }
});

const indexDenunciaRouter = router;

module.exports = { indexDenunciaRouter };
