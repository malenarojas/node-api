const express = require('express');
// import { body } from 'express-validator';
const jwt = require('jsonwebtoken');

const { Password } = require('../../../../utils/password');
const db = require('../../../postgresDB/models/index.js');

// const tipoUsuarioB: Record<number, TipoUsuario> = {
//   1: { id: 1, descripcion: 'Administrativo' },
//   2: { id: 2, descripcion: 'Docente' },
//   3: { id: 3, descripcion: 'Estudiante' },
//   4: { id: 4, descripcion: 'Operativo' },
// };

const router = express.Router();

router.post(
  '/signin',
  // [
  // body('email').isEmail().withMessage('Email must be valid'),
  // body('password')
  //   .trim()
  //   .notEmpty()
  //   .withMessage('You must supply a password'),
  // ],
  // validateRequest,
  async (req, res) => {
    const payload = req.body;
    try {
      let existingStamentUser = null;
      let existingUser = null;
      let usuario;
      let userJwt;
      /**
       * Tipo Estamento: 0, tipoEstamentoEstudiante
       * Tipo Operativo: 1
       */
      const tipoUsuario = payload.tipo;
      if ([1, 2, 3].includes(tipoUsuario)) {
        existingStamentUser = await db.ESTAMENTO.findOne({
          where: { codigo: payload.codigo, idTipoEstamento: tipoUsuario },
          raw: true,
        });
        if (!existingStamentUser) {
          return res.send({
            data: null,
            message: 'El usuario estamento no está registrado.',
          });
        }

        existingUser = await db.USUARIO.findOne({
          where: { idUsuario: existingStamentUser.idUsuario },
          raw: true,
        });
        if (!existingUser) {
          return res.send({
            data: null,
            message: 'El usuario no está registrado.',
          });
        }

        if (payload.tokenNotificacion) {
          await db.USUARIO.update(
            { tokenNotificacion: payload.tokenNotificacion },
            {
              where: {
                idUsuario: existingUser.idUsuario,
              },
            }
          );
        }

        usuario = {
          ...existingUser,
          ...existingStamentUser,
        };

        const passwordsMatch = await Password.compare(
          usuario.contrasena,
          payload.contrasena
        );

        if (!passwordsMatch) {
          return res.send({ data: null, message: 'Credenciales inválidas.' });
        }

        // Generate JWT
        userJwt = jwt.sign(
          {
            idUsuario: usuario.idUsuario,
            codigo: usuario.codigo,
          },
          process.env.JWT_KEY
        );
      } else if (tipoUsuario === 4) {
        existingUser = await db.USUARIO.findOne({
          where: { ci: payload.codigo },
          raw: true,
        });
        if (!existingUser) {
          return res.send({
            data: null,
            message: 'El usuario no está registrado.',
          });
        }

        if (payload.tokenNotificacion) {
          await db.USUARIO.update(
            { tokenNotificacion: payload.tokenNotificacion },
            {
              where: {
                idUsuario: existingUser.idUsuario,
              },
            }
          );
        }

        usuario = existingUser;

        const passwordsMatch = await Password.compare(
          usuario.contrasena,
          payload.contrasena
        );

        if (!passwordsMatch) {
          return res.send({ data: null, message: 'Credenciales inválidas.' });
        }

        // Generate JWT
        userJwt = jwt.sign(
          {
            idUsuario: usuario.idUsuario,
            codigo: usuario.ci,
          },
          process.env.JWT_KEY
        );
      } else {
        throw new Error('Ingrese un tipo de usuario válido.');
      }

      // Store it on session object
      req.session = {
        jwt: userJwt,
      };

      res.status(200).send({
        data: { ...usuario, jwt: userJwt },
        message: 'Usuario logueado exitosamente.',
      });
    } catch (error) {
      console.error(`${error.message}`);
      res.send({ data: null, message: error.message });
    }
  }
);

const signinMobileRouter = router;

module.exports = { signinMobileRouter };
