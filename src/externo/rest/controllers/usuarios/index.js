const express = require('express');
const db = require('../../../postgresDB/models/index.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const usuarios = await db.USUARIO.findAll({
      order: [['idUsuario', 'ASC']],
      include: [
        {
          model: db.ROL,
          as: 'rol',
          attributes: ['idRol', 'nombre']
        }
      ],
    });
    res.send({ data: usuarios, message: 'Lista de usuarios' });
  } catch (error) {
    if (error instanceof Error) {
      res.send({ data: null, message: error.message });
    }
  }
});

const indexUsuarioRouter = router;

module.exports = { indexUsuarioRouter };