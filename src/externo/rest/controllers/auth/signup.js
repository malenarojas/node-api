const express = require('express');
// import { body } from 'express-validator';
const jwt = require('jsonwebtoken');

const { Password } = require('../../../../utils/password');
const db = require('./../../../postgresDB/models/index.js').sequelize;

const { Estamento } = require('./../../../../dominio/entities/Estamento.js');
const { Operativo } = require('./../../../../dominio/entities/Operativo.js');
// class UsuarioFactory {
//   static crearUsuario(
//     data: IUser & (IEstamento | IOperativo)
//   ): OperativoModel | EstamentoModel {
//     if (data instanceof Estamento) {
//       const n = new Estamento(data);
//       return n.registrarEstamento();
//     } else if (data instanceof Operativo) {
//       const n = new Operativo(data);
//       return n.registrarOperativo();
//     }
//     throw new Error('Tipo de usuario no válido');
//   }
// }

const router = express.Router();

router.post(
  '/signup',
  // [
  //   body("email").isEmail().withMessage("Email must be valid"),
  //   body("password")
  //     .trim()
  //     .isLength({ min: 4, max: 20 })
  //     .withMessage("Password must be between 4 and 20 characters"),
  // ],
  // validateRequest,
  async (req, res) => {
    const payload = req.body;
    const t = await db.sequelize.transaction();
    try {
      let existingUser = null;
      let usuario;
      let nuevoUsuario;
      let userJwt;
      /**
       * tipoUsuario Estamento: 0
       * tipoUsuario Operativo: 1
       */
      const tipoUsuario = payload.tipo;
      if (tipoUsuario === 0) {
        existingUser = await db.ESTAMENTO.findOne({
          where: { codigo: parseInt(payload.codigo) },
          raw: true,
        });
        if (existingUser) {
          throw new Error('Código universitario ya existente.');
        }
        let usuarioEstamento = {
          nombres: payload.nombres,
          apellidos: payload.apellidos,
          ci: payload.ci,
          codigo: payload.codigo,
          contrasena: payload.contrasena,
          telefono: payload.telefono,
          tipo: 0,
          tokenNotificacion: payload.tokenNotificacion,
          habilitado: true,
          correo: payload.correo,
          contadorPanico: 0,
          idTipoEstamento: payload.idTipoEstamento,
          idFacultad: payload.idFacultad,
        };
        usuario = new Estamento(usuarioEstamento);
        const encryptedPassword = await Password.toHash(usuario.contrasena);
        usuario.contrasena = encryptedPassword;
        // nuevoUsuario = await usuario.registrarEstamento();
        console.log(`usuario 76:${JSON.stringify(usuario, null, 4)}`);
        const nuevoUsuarioS = (
          await db.USUARIO.create(
            {
              nombres: usuario.nombres,
              apellidos: usuario.apellidos,
              ci: usuario.ci,
              telefono: usuario.telefono,
              tokenNotificacion: usuario.tokenNotificacion,
              contrasena: usuario.contrasena,
              tipo: usuario.tipo,
              habilitado: usuario.habilitado,
            },
            { transaction: t }
          )
        )?.dataValues;
        console.log(
          `nuevoUsuarioS 90:${JSON.stringify(nuevoUsuarioS, null, 4)}`
        );

        if (!nuevoUsuarioS) {
          return new Error('Nuevo usuario no registrado.');
        }

        const nuevoEstamento = (
          await db.ESTAMENTO.create(
            {
              idUsuario: nuevoUsuarioS.idUsuario,
              codigo: usuario.codigo,
              correo: usuario.correo,
              contadorPanico: usuario.contadorPanico,
              idTipoEstamento: usuario.idTipoEstamento,
              idFacultad: usuario.idFacultad,
            },
            { transaction: t }
          )
        )?.dataValues;

        await t.commit();

        nuevoUsuario = {
          ...nuevoUsuarioS,
          ...nuevoEstamento,
        };
        userJwt = jwt.sign(
          {
            idUsuario: nuevoEstamento.idUsuario,
            codigo: nuevoEstamento.codigo,
          },
          process.env.JWT_KEY
        );
      } else if (tipoUsuario === 1) {
        /**
         * tipoUsuario Estamento: 0
         * tipoUsuario Operativo: 1
         */
        // existingUser = await UsuarioSchema(DBInstance()).findOne({
        existingUser = await db.USUARIO.findOne({
          where: { ci: payload.ci },
          raw: true,
        });

        if (existingUser) {
          throw new Error('Cédula de identidad ya existente.');
        }

        let usuarioOperativo = {
          nombres: payload.nombres,
          apellidos: payload.apellidos,
          ci: payload.ci,
          codigo: payload.codigo,
          contrasena: payload.contrasena,
          telefono: payload.telefono,
          tokenNotificacion: payload.tokenNotificacion,
          tipo: payload.tipo,
          habilitado: true,
          fechaIngreso: payload.fechaIngreso,
        };
        usuario = new Operativo(usuarioOperativo);

        const encryptedPassword = await Password.toHash(usuario.contrasena);
        usuario.contrasena = encryptedPassword;

        // nuevoUsuario = await usuario.registrarOperativo();
        const nuevoUsuarioO = (
          await db.USUARIO.create(
            {
              nombres: usuario.nombres,
              apellidos: usuario.apellidos,
              ci: usuario.ci,
              telefono: usuario.telefono,
              tokenNotificacion: usuario.tokenNotificacion,
              contrasena: usuario.contrasena,
              tipo: usuario.tipo,
              habilitado: usuario.habilitado,
            },
            { transaction: t }
          )
        ).dataValues;
        console.log(`nuevoUsuarioO: ${JSON.stringify(nuevoUsuarioO, null, 4)}`);
        console.log(`usuario: ${JSON.stringify(usuario, null, 4)}`);

        if (!nuevoUsuarioO) {
          throw new Error('Method not implemented.');
        }

        const nuevoOperativo = (
          await db.OPERATIVO.create(
            {
              idUsuario: nuevoUsuarioO.idUsuario,
              fechaIngreso: usuario.fechaIngreso,
            },
            { transaction: t }
          )
        )?.dataValues;

        await t.commit();

        nuevoUsuario = {
          ...nuevoUsuarioO,
          ...nuevoOperativo,
        };
        userJwt = jwt.sign(
          {
            idUsuario: nuevoOperativo.idUsuario,
            codigo: nuevoUsuarioO.ci,
          },
          process.env.JWT_KEY
        );
      }
      // Guardando el objeto de la sesión
      req.session = { jwt: userJwt };

      res
        .status(201)
        .send({ data: nuevoUsuario, message: 'Usuario creado exitosamente.' });
    } catch (error) {
      await t.rollback();
      res.send({ data: null, message: error.message });
    }
  }
);

const signupRouter = router;
module.exports = { signupRouter };
