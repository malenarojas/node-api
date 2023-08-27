const express = require('express');
const db = require('../../../postgresDB/models/index.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const denuncia = await db.DENUNCIA.findByPk(req.params.id);
    res.send({
      data: denuncia,
      message: `Detalle de la incidencia ${denuncia?.idDenuncia}`,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.send({ data: null, message: error.message });
    }
  }
});

const showDenunciaRouter = router;

module.exports = { showDenunciaRouter };