'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tabla USUARIO
    await queryInterface.bulkInsert(
      'USUARIO',
      [
        {
          nombres: 'Fernando',
          apellidos: 'Guzman',
          ci: '43988767',
          telefono: 77887766,
          // contrasena: '&%3Guzman*1',
          contrasena:
            'c7a961b604d5a7855ae86123e03b5d0729b847a9ef1363b73725e3e1de76696977b929ce691689632a947bd7d68417950f39e199065e8fb1d88bcf41764e6eb5.cf68b4ddf35d8d2e',
          tipo: 1,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombres: 'Brun',
          apellidos: 'Justiniano',
          ci: '23545454',
          telefono: 78987666,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombres: 'Eliot',
          apellidos: 'Humerez',
          ci: '99988767',
          telefono: 23423422,
          // contrasena: 'Eliot&%3*1',
          contrasena:
            '91f07bce7667e79a4a499ee52ac81dcbb22513bbace2223343639ecb898f4499c440addf60145577c38974735a67e5c0294390f08eca9c7f678cb523803e5a97.015f7fec2957ff7f',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombres: 'Malena',
          apellidos: 'Rojas',
          ci: '99007767',
          telefono: 78423422,
          // contrasena: 'Malena&%3*1',
          contrasena:
            'b72d26b29d4c9b870b5d94729de642998f5425d629ef5e7b87bd98217fa472be7982aa105e51b19b32effc1d592b4da4c6f9b7ecb37db54f9c391a59e48d0f78.ad8aa7b61220be71',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombres: 'Diego',
          apellidos: 'Gutierrez',
          ci: '92532454',
          telefono: 78007666,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombres: 'Maria Angélica',
          apellidos: 'Miranda Mendoza',
          ci: '12922186',
          telefono: 71005231,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombres: 'José',
          apellidos: 'Pérez Gutierrez',
          ci: '54422186',
          telefono: 77055231,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombres: 'Mario',
          apellidos: 'García',
          ci: '86522186',
          telefono: 78855231,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //9
          nombres: 'Matias',
          apellidos: 'Montalvan',
          ci: '15987456',
          telefono: 78945826,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //10
          nombres: 'Emanuel',
          apellidos: 'Rojas',
          ci: '89759846',
          telefono: 69583148,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //11
          nombres: 'José',
          apellidos: 'Briceño',
          ci: '6985348',
          telefono: 69857489,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //12
          nombres: 'Alvaro',
          apellidos: 'Aponte',
          ci: '85974852',
          telefono: 758942698,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //13
          nombres: 'Stacy',
          apellidos: 'Cáceres',
          ci: '69854895',
          telefono: 62598735,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //14
          nombres: 'Juan',
          apellidos: 'García',
          ci: '425987899',
          telefono: 75255699,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //15
          nombres: 'Aldana',
          apellidos: 'Montoya',
          ci: '36949197',
          telefono: 78696698,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //16
          nombres: 'Joel',
          apellidos: 'Santivañez',
          ci: '6498494',
          telefono: 68491989,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //17
          nombres: 'Macarena',
          apellidos: 'Saavedra',
          ci: '20231001',
          telefono: 71234567,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //18
          nombres: 'Yussy',
          apellidos: 'Suárez',
          ci: '20191234',
          telefono: 71234568,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //19
          nombres: 'Alana',
          apellidos: 'Fernandez',
          ci: '20221567',
          telefono: 71234569,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //20
          nombres: 'Diego',
          apellidos: 'Añez',
          ci: '20182019',
          telefono: 71234570,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //21
          nombres: 'Kevin',
          apellidos: 'Andrade',
          ci: '20211003',
          telefono: 61234567,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //22
          nombres: 'Mario',
          apellidos: 'Marquina',
          ci: '20171234',
          telefono: 61234568,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //23
          nombres: 'Nathalie',
          apellidos: 'Pizarro',
          ci: '20251567',
          telefono: 61234569,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //24
          nombres: 'Claudia',
          apellidos: 'Córdova',
          ci: '20142019',
          telefono: 61234570,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //25
          nombres: 'Andrea',
          apellidos: 'Roca',
          ci: '20261005',
          telefono: 71234571,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //26
          nombres: 'Tamara',
          apellidos: 'Parra',
          ci: '20151234',
          telefono: 71234572,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //27
          nombres: 'Angel',
          apellidos: 'Dueñas',
          ci: '20281567',
          telefono: 71234573,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //28
          nombres: 'Claudia',
          apellidos: 'Llanos',
          ci: '20162019',
          telefono: 61234571,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //29
          nombres: 'Hector',
          apellidos: 'Chavez',
          ci: '20291007',
          telefono: 61234572,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //30
          nombres: 'Javier',
          apellidos: 'Gramajo',
          ci: '20181234',
          telefono: 61234573,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //31
          nombres: 'Armando',
          apellidos: 'Loayza',
          ci: '22294',
          telefono: 61234573,
          // contrasena: '&%3*Brun1',
          contrasena:
            'a6de06ef03a9cf82e1e64eb2d4a1ef499bc067a6fb18f3264b21e1c714e1f258b3db0aba2a14c17d9b4fb2fa57c4c788acb45c81c755d1430ee8961a7d2d67ae.2cdd7ab991ad011e',
          tipo: 0,
          idRol: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // Tabla OPERATIVO
    await queryInterface.bulkInsert(
      'OPERATIVO',
      [
        {
          //1
          idUsuario: 1,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          idUsuario: 9,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //3
          idUsuario: 10,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 11,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 12,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 17,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 18,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 19,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 20,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 21,
          fechaIngreso: 1673755200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // Tabla ESTAMENTO
    await queryInterface.bulkInsert(
      'ESTAMENTO',
      [
        {
          idUsuario: 2,
          correo: 'brun.justiniano@gmail.com',
          codigo: 32112,
          idTipoEstamento: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 3,
          correo: 'eliot.humerez@gmail.com',
          codigo: 21404,
          idTipoEstamento: 2,
          idFacultad: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 4,
          correo: 'malena.rojas@gmail.com',
          codigo: 218044322,
          idTipoEstamento: 3,
          idFacultad: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 5,
          correo: 'diego.gutierrez@gmail.com',
          codigo: 32122,
          idTipoEstamento: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 6,
          correo: 'angelica.miranda@gmail.com',
          codigo: 218123821,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 7,
          correo: 'jose.perez@gmail.com',
          codigo: 218133821,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 8,
          correo: 'mario.garcia@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 13,
          correo: 'stacy.caceres@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 14,
          correo: 'juan.garcia@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 15,
          correo: 'aldana.montoya@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 16,
          correo: 'joel.santivanes@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 22,
          correo: 'mario.marquina@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 23,
          correo: 'nathalie.pizarro@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 24,
          correo: 'claudia.cordova@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 25,
          correo: 'andrea.roca@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 26,
          correo: 'tamara.parra@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 27,
          correo: 'angel.deunas@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 28,
          correo: 'claudia.llanos@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 29,
          correo: 'hector.chavez@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idUsuario: 30,
          correo: 'javier.gramajo@gmail.com',
          codigo: 219273114,
          idTipoEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
