const admin = require('./../externo/fcm/firebaseAdmin.js');
// import {
//   AndroidConfig,
//   ApnsConfig,
//   FcmOptions,
//   MulticastMessage,
//   Notification,
//   WebpushConfig,
// } from 'firebase-admin/lib/messaging/messaging-api';

// class CMulticastMessage implements MulticastMessage {
//   tokens: string[];
//   data?: { [key: string]: string } | undefined;
//   notification?: Notification | undefined;
//   android?: AndroidConfig | undefined;
//   webpush?: WebpushConfig | undefined;
//   apns?: ApnsConfig | undefined;
//   fcmOptions?: FcmOptions | undefined;
//   priority?: string;

//   constructor(
//     tokens: string[],
//     priority: string = '',
//     notificacionData: NotificacionData
//   ) {
//     this.tokens = tokens;
//     this.priority = priority;
//     this.notification = {
//       title: notificacionData.titulo,
//       body: notificacionData.cuerpo,
//     };
//     this.data = notificacionData.descripcion
//       ? {
//           description: notificacionData.descripcion,
//         }
//       : undefined;
//   }
// }

// export interface NotificacionData {
//   titulo?: string;
//   cuerpo?: string;
//   descripcion?: string;
// }

class NotificacionService {
  static enviarNotificaciones(tokens, notificacionData) {
    const message = {
      tokens,
      priority: 'high',
      notification: {
        title: notificacionData?.titulo,
        body: notificacionData?.cuerpo,
      },
      data: {
        description: notificacionData?.descripcion,
      },
    };
    admin
      .messaging()
      .sendEachForMulticast(message)
      .then((response) => {
        if (response.failureCount > 0) {
          console.error(
            'Envío de notificaciones con errores: ',
            JSON.stringify(response, null, 4)
          );
          return;
        }
        console.log(
          'Notificación enviado exitosamente: ',
          JSON.stringify(response, null, 4)
        );
      })
      .catch((error) => {
        console.error(
          `Error al enviar el mensaje `,
          JSON.stringify(error, null, 4)
        );
      });
  }
  static enviarNotificacion(token, notificacionData) {
    const message = {
      token,
      notification: {
        title: notificacionData?.titulo,
        body: notificacionData?.cuerpo,
      },
      data: {
        description: notificacionData?.descripcion,
      },
    };
    admin
      .messaging()
      .send(message)
      .then((response) => {
        if (response.failureCount > 0) {
          console.error(
            'Envío de notificaciones con errores: ',
            JSON.stringify(response, null, 4)
          );
          return;
        }
        console.log(
          'Notificación enviado exitosamente: ',
          JSON.stringify(response, null, 4)
        );
      })
      .catch((error) => {
        console.error(
          `Error al enviar el mensaje `,
          JSON.stringify(error, null, 4)
        );
      });
  }
}

module.exports = { NotificacionService };
