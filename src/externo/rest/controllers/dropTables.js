const express = require('express');
const db = require('../../postgresDB/models/index.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Ruta al archivo SQL
    const filePath = './../../../utils/scripts/delete_tables.sql';

    // Leer el contenido del archivo SQL
    const fs = require('fs');
    const script = fs.readFileSync(filePath, 'utf8');

    // Desactivar temporalmente las restricciones de clave externa
    const disableConstraintsQuery = 'SET session_replication_role = replica;';
    await db.query(disableConstraintsQuery);

    // Ejecutar el script SQL
    await db.query(script);

    // Activar las restricciones de clave externa nuevamente
    const enableConstraintsQuery = 'SET session_replication_role = DEFAULT;';
    await db.query(enableConstraintsQuery);

    console.log('Script SQL ejecutado exitosamente.');
  } catch (error) {
    res.send({ data: null, message: error.message });
  }
});
const dropTablesRouter = router;

module.exports = { dropTablesRouter };
