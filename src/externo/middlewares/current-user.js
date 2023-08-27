// import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

// export interface UserPayload {
//   idUsuario: number;
//   codigo: number;
// }

// declare global {
//   namespace Express {
//     interface Request {
//       currentUser?: UserPayload;
//     }
//   }
// }

const currentUser = (req, res, next) => {
  console.log(`middle req.session: ${JSON.stringify(req.session, null, 4)}`);
  if (!req.session?.jwt) {
    console.log(`jwt inexistente`);
    return next();
  }
  try {
    console.log(`middle req.session.jwt: ${req.session.jwt}`);
    console.log(`middle process.env.JWT_KEY! ${process.env.JWT_KEY}`);

    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
    req.currentUser = payload;
  } catch (err) {}

  next();
};

module.exports = { currentUser };
