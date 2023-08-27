const express = require('express');
// import 'express-async-errors';
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const path = require('path');

// Aumenta el límite según tus necesidades
// import { indexUserRouter } from './controllers/user';
const { signupRouter } = require('./controllers/auth/signup');
const { signinRouter } = require('./controllers/auth/signin');
const { newIncidentRouter } = require('./controllers/incident/new.js');
const { indexIncidentRouter } = require('./controllers/incident/index.js');
const { newDenunciaRouter } = require('./controllers/denuncia/new.js');
const { indexDenunciaRouter } = require('./controllers/denuncia/index.js');
const { indexUsuarioRouter } = require('./controllers/usuarios/index.js');
const { newSancionRouter } = require('./controllers/incident/new_sancion.js');
// import { currentUserRouter } from './controllers/user/current-user';
const { logoutRouter } = require('./controllers/auth/logout.js');
// import { currentUser } from '../middlewares/current-user';
const { signinMobileRouter } = require('./controllers/auth/signinMobile');

const {
  nuevoTokenNotificacionFirebaseRouter,
} = require('./controllers/auth/newFcmToken.js');
// import { indexDenunciaRouter } from './controllers/denuncias';
// import { newDenunciaRouter } from './controllers/denuncias/new';
const { showIncidentRouter } = require('./controllers/incident/detalle');
const { showDenunciaRouter } = require('./controllers/denuncia/detalle');
const { dropTablesRouter } = require('./controllers/dropTables');
const { newEmergenciaRouter } = require('./controllers/emergencia/new');
// import { showDenunciaRouter } from './controllers/denuncias/detalle';

const app = express();
// app.use('/public',express.static('public'));}
// Obtengo el path de mi carpeta public
const publicPath = path.join(__dirname, '../../../public/');
app.use(express.static(publicPath));

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
// Configurar los encabezados CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todas las solicitudes (en producción, se debería especificar los dominios permitidos en lugar de '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos
  next();
});

app.set('trust proxy', true);
app.use(
  cookieSession({
    // name: 'session',
    signed: false,
    secure: process.env.NODE_ENV !== 'development',
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hour
  })
);

/**
 * Mobile endpoints
 */
// app.use('/api/v1/mobile/users', signupRouter);
app.use('/api/v1/mobile/users', signinMobileRouter);
app.use('/api/v1/mobile/incidencias', /* currentUser, */ newIncidentRouter);
// // app.use('/api/v1/mobile/incidents', currentUser, indexIncidentRouter);
app.use('/api/v1/mobile/incidencias', showIncidentRouter);
app.use('/api/v1/mobile/incidencias', indexIncidentRouter);
app.use('/api/v1/mobile/denuncias', newDenunciaRouter);
app.use('/api/v1/mobile/emergencia', newEmergenciaRouter);

// /**
//  * Web endpoints
//  */
app.use('/api/v1/users', signupRouter);
// app.use('/api/v1/users', indexUserRouter);
app.use('/api/v1/users/signin', signinRouter);
app.use('/api/v1/users/logout', logoutRouter);
// app.use('/api/v1', currentUserRouter);
app.use('/api/v1/incidencias', indexIncidentRouter);
app.use('/api/v1/incidencias', showIncidentRouter);
app.use(
  '/api/v1/notificaciones',
  //currentUser,
  nuevoTokenNotificacionFirebaseRouter
);
app.use('/api/v1/denuncias', indexDenunciaRouter);
app.use('/api/v1/denuncias', showDenunciaRouter);
app.use('/api/v1/sancion', newSancionRouter);
app.use('/api/v1/usuarios', indexUsuarioRouter);

app.get('/', function (req, res) {
  res.send('Hola tu código no compila.');
});

app.use('/api/v1/delete-tables', dropTablesRouter);

app.all('*', async (req, res) => {
  // throw new Error(`La ruta ${req.originalUrl} no existe.`);
  res.send({
    data: null,
    message: 'La ruta no existe, verifique e intente nuevamente.',
  });
});

module.exports = { app };
