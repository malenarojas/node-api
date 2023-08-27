const express = require('express');
const { currentUser } = require('./../../../middlewares/current-user');

const router = express.Router();

router.get('/users/currentuser', currentUser, (req, res) => {
  console.log(`EEEEEEEEEEEEEEEEEEEEEEE`);

  res.send({ currentUser: req.currentUser || null });
});

const currentUserRouter = router;

module.exports = { currentUserRouter };
