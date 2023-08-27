const express = require('express');

const db = require('../../../postgresDB/models/index.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const incident = await db.INCIDENCIA.findByPk(req.params.id, {
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
        {
          model: db.SANCION,
          as: 'sancion',
          attributes: [
            'idSancion',
            'descripcion',
            'montoTotal',
            'idTipoSancion',
            'createdAt',
          ],
          include: [
            {
              model: db.TIPO_SANCION,
              as: 'tipoSancion',
              attributes: ['idTipoSancion', 'nombre', 'descripcion'],
            },
          ],
        },
        // {
        //   model: db.INCIDENCIA_ESTAMENTO,
        //   // as: 'estamento',
        //   attributes: ['idEstamento'],
        // },
      ],
    });
    res.send({
      data: incident,
      message: `Detalle de la incidencia ${incident?.idIncidencia}`,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.send({ data: null, message: error.message });
    }
  }
});
const showIncidentRouter = router;

module.exports = { showIncidentRouter };
