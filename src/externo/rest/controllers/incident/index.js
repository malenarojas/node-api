const express = require('express');
const db = require('../../../postgresDB/models/index.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const incidents = await db.INCIDENCIA.findAll({
      order: [['idIncidencia', 'ASC']],
      include: [
        {
          model: db.CATEGORIA_INCIDENCIA,
          as: 'categoria',
          attributes: ['idCategoriaIncidencia', 'nombre'],
        },
        {
          model: db.ZONA,
          as: 'zona',
          attributes: ['idZona', 'nombre'],
        },
        {
          model: db.TIPO,
          as: 'tipo',
          attributes: ['idTipo', 'descripcion'],
        },
        {
          model: db.OPERATIVO,
          as: 'operativo',
          attributes: ['idUsuario'],
        },
        {
          model: db.MEDIA_INCIDENCIA,
          as: 'medias',
          attributes: ['idMediaIncidencia', 'url', 'base64', 'idIncidencia'],
        },
        
      ],
    });
    res.send({ data: incidents, message: 'Lista de incidencias' });
  } catch (error) {
    res.send({ data: null, message: error.message });
  }
});
const indexIncidentRouter = router;

module.exports = { indexIncidentRouter };
