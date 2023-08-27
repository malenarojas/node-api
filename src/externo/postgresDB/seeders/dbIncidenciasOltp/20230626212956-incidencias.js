'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'INCIDENCIA',
      [
        // 1
        {
          descripcion:
            'Estudiantes de la Facultad de humanidades están borrachos, fueron encontrados en el aula 21.',
          procedimiento:
            'Se procede a reportar la incidencia y llevar a los implicados a administración.',
          latitudDispositivo: -17.774776,
          longitudDispositivo: -63.1967353,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 1,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 2
        {
          descripcion:
            'Un estudiante borracho fue encontrado en el baño de las mujeres en el campus.',
          procedimiento:
            'Se procede a reportar la incidencia y llevar a los implicados a administración.',
          latitudDispositivo: -17.778079,
          longitudDispositivo: -63.192668,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 2,
          idZona: 1,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 3
        {
          descripcion:
            'Personas que no pertencen a la universidad fueron encontrados robando pertencencias de la facultad de medicina, fueron encontrados con marihuana.',
          procedimiento:
            'Se procede a reportar la incidencia y llevar a los implicados a administración.',
          latitudDispositivo: -17.774926,
          longitudDispositivo: -63.197644,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 2,
          montoTotal: 500,
          idTipo: 2,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 4
        {
          descripcion: 'Los laboratorios de física se están incendiando.',
          procedimiento:
            'Se procede a reportar la incidencia a administración.',
          latitudDispositivo: -17.773510,
          longitudDispositivo: -63.196742,
          latitudIncidencia: -17.77353626214437,
          longitudIncidencia: -63.19690547600145,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 3500,
          idTipo: 3,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 5
        {
          descripcion:
            'SE ENCONTRO AL SUJETO EN EL TERCER PISO DEL MODULO DE PARQUEO VERTICAL, FUMANDO MARIHUANA (INFRAGANTI).',
          procedimiento:
            'SE REALIZA EL TRASLADO A LAS OFICINAS DE ADMINISTRACION DE LOS PREDIOS UBICADAS EN LOS MODULOS, SE PROCEDE A REALIZAR UNA REVISION DE SUS PERTENENCIAS DONDE SE LOES ENCUENTRA MAS MARIHUANA E IMPLEMENTOS PARA EL CONSUMO DE LA MISMA',
          latitudDispositivo: -17.776374,
          longitudDispositivo: -63.197254,
          latitudIncidencia: -17.7737883,
          longitudIncidencia: -63.1989893,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 4,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 6
        {
          descripcion:
            'SE ENCONTRO AL SUJETO EN EL TERCER PISO DEL MODULO DE PARQUEO VERTICAL, FUMANDO MARIHUANA (INFRAGANTI) REINCIDENCIA POR LA MISMA INFRACCION.',
          procedimiento:
            'SE REALIZA EL TRASLADO A LAS OFICINAS DE ADMINISTRACION DE LOS PREDIOS UBICADAS EN LOS MODULOS, SE PROCEDE A REALIZAR UNA REVISION DE SUS PERTENENCIAS DONDE SE LOES ENCUENTRA MAS MARIHUANA E IMPLEMENTOS PARA EL CONSUMO DE LA MISMA',
          latitudDispositivo: -17.776783,
          longitudDispositivo: -63.197635,
          latitudIncidencia: -17.776783,
          longitudIncidencia: -63.197635,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 4,
          idZona: 1,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 7
        {
          descripcion: 'CONSUMO DE BEBIDAS ALCOHOLICAS',
          procedimiento: '',
          latitudDispositivo: -17.774294,
          longitudDispositivo: -63.196641,
          latitudIncidencia: -17.774294,
          longitudIncidencia: -63.196641,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 6,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 8
        {
          descripcion: 'ACTOS OBSCENOS DENTRO DE UN BAÑO PUBLICO 244/215',
          procedimiento:
            'SORPRENDIDOS POR EL PERSONAL DE SEGURIDAD Y TRASLADADOS A LA ADMINISTRACION MODULOS PARA SU RESPECTIVA LLAMADA DE ATENCION ',
          latitudDispositivo: -17.774297,
          longitudDispositivo: -63.195012,
          latitudIncidencia: -17.7737883,
          longitudIncidencia: -63.1989893,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 9,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date('2023-07-01T10:30:00'),
          updatedAt: new Date('2023-07-01T10:30:00'),
        },
        // 9
        {
          descripcion: 'CONSUMO DE MARIHUNA Y PORTACION DE ARMA BLANCA',
          procedimiento:
            'SUJETO SORPRENDIDO POR EL COLEGA ALEJANDRO CHAVEZ EN CONSUMO DE SUSTANCIAS CONTROLADAS',
          latitudDispositivo: -17.774947,
          longitudDispositivo: -63.193608,
          latitudIncidencia: -17.774947,
          longitudIncidencia: -63.193608,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 4,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date('2023-07-03T18:04:00'),
          updatedAt: new Date('2023-07-03T18:04:00'),
        },
        {
          descripcion: 'CONSUMO DE MARIHUNA Y PORTACION DE ARMA BLANCA',
          procedimiento: '',
          latitudDispositivo: -17.777888,
          longitudDispositivo: -63.195392,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 4,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'ACTOS OBSCENOS DENTRO DE UN BAÑO PUBLICO 244/215',
          procedimiento: ' ',
          latitudDispositivo: -17.774297,
          longitudDispositivo: -63.195012,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 1,
          montoTotal: 0,
          idTipo: 9,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion:
            'Trato injusto o prejuicioso basado en la raza o etnia de una persona.',
          procedimiento: '',
          latitudDispositivo: -17.776327,
          longitudDispositivo: -63.196555,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 2,
          montoTotal: 0,
          idTipo: 2,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion:
            ' Comportamiento no deseado de naturaleza sexual que crea un ambiente hostil o intimidante.',
          procedimiento: '',
          latitudDispositivo: -17.7767001,
          longitudDispositivo: -63.1992629,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 2,
          montoTotal: 0,
          idTipo: 3,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion:
            ' Actos de vandalismo que causan daños a la propiedad de la universidad.',
          procedimiento: '',
          latitudDispositivo: -17.774360,
          longitudDispositivo: -63.193845,
          latitudIncidencia: 0,
          longitudIncidencia: 0,
          idOperativo: 1,
          idCategoriaIncidencia: 2,
          montoTotal: 5600,
          idTipo: 2,
          idZona: 2,
          idUsuarioModifica: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'INCIDENCIA_ESTAMENTO',
      [
        {
          idIncidencia: 1,
          idEstamento: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 1,
          idEstamento: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 2,
          idEstamento: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 4,
          idEstamento: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          idIncidencia: 1,
          idEstamento: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 1,
          idEstamento: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 2,
          idEstamento: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 2,
          idEstamento: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //
        {
          idIncidencia: 3,
          idEstamento: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 3,
          idEstamento: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 3,
          idEstamento: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 3,
          idEstamento: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 3,
          idEstamento: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 3,
          idEstamento: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //4
        {
          idIncidencia: 4,
          idEstamento: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 4,
          idEstamento: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 4,
          idEstamento: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //5
        {
          idIncidencia: 5,
          idEstamento: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 5,
          idEstamento: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //6
        {
          idIncidencia: 6,
          idEstamento: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 6,
          idEstamento: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 6,
          idEstamento: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 6,
          idEstamento: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 6,
          idEstamento: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 6,
          idEstamento: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //7
        {
          idIncidencia: 7,
          idEstamento: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 7,
          idEstamento: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 7,
          idEstamento: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 7,
          idEstamento: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //8
        {
          idIncidencia: 8,
          idEstamento: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 8,
          idEstamento: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 8,
          idEstamento: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 8,
          idEstamento: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //9
        {
          idIncidencia: 9,
          idEstamento: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 9,
          idEstamento: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //10
        {
          idIncidencia: 10,
          idEstamento: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 10,
          idEstamento: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //11
        {
          idIncidencia: 11,
          idEstamento: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 11,
          idEstamento: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //12
        {
          idIncidencia: 12,
          idEstamento: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 12,
          idEstamento: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        //13
        {
          idIncidencia: 13,
          idEstamento: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 13,
          idEstamento: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //14
        {
          idIncidencia: 14,
          idEstamento: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 14,
          idEstamento: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'INCIDENCIA_ESTADO',
      [
        // 1
        {
          idIncidencia: 1,
          idEstado: 1,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 2
        {
          idIncidencia: 2,
          idEstado: 1,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 3
        {
          idIncidencia: 3,
          idEstado: 1,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 4
        {
          idIncidencia: 4,
          idEstado: 1,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 5
        {
          idIncidencia: 5,
          idEstado: 3,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 6
        {
          idIncidencia: 6,
          idEstado: 3,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 7
        {
          idIncidencia: 7,
          idEstado: 1,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 8
        {
          idIncidencia: 8,
          idEstado: 1,
          habilitado: false,
          createdAt: new Date('2023-07-01T10:30:00'),
          updatedAt: new Date('2023-07-01T10:30:00'),
        },
        // 9
        {
          idIncidencia: 9,
          idEstado: 1,
          habilitado: false,
          createdAt: new Date('2023-07-03T18:04:00'),
          updatedAt: new Date('2023-07-03T18:04:00'),
        },
        {
          idIncidencia: 10,
          idEstado: 2,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 11,
          idEstado: 2,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 12,
          idEstado: 1,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 13,
          idEstado: 3,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idIncidencia: 14,
          idEstado: 2,
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Desde el idIncidenciaEstado = 8
        {
          idIncidencia: 8,
          idEstado: 4,
          habilitado: true,
          createdAt: new Date('2023-07-01T14:50:00'),
          updatedAt: new Date('2023-07-01T14:50:00'),
        },
        // Desde el idIncidenciaEstado = 9
        {
          idIncidencia: 9,
          idEstado: 4,
          habilitado: true,
          createdAt: new Date('2023-07-04T10:17:00'),
          updatedAt: new Date('2023-07-04T10:17:00'),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'INFRACTOR_FORANEO',
      [
        {
          descripcion: 'Gabriel Ingavi',
          ci: '23445556',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Carlos Matías Vélez',
          ci: '56447956',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'INCIDENCIA_INFRACTOR_FORANEO',
      [
        {
          idInfractorForaneo: 1,
          idIncidencia: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idInfractorForaneo: 2,
          idIncidencia: 3,
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
