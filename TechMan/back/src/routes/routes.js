const express = require('express');

const router = express.Router();

// const Middle = require('../middleware/middleware');

const Comentarios = require('../controllers/Comentarios');
const Equipamentos = require('../controllers/Equipamentos');
const Perfis = require('../controllers/Perfis');
const User = require('../controllers/User');

// router.put('*', Middle.ValidaAcesso);
// router.delete('*', Middle.ValidaAcesso);
// router.post('*', Middle.ValidaAcesso);

// ------------------------------Comentarios-----------------------------------------
router.get('/coment', Comentarios.read);
router.get('/coment/:id', Comentarios.readOne);
router.post('/comentcriar', Comentarios.create);
router.delete('/comentdel/:id', Comentarios.del);
router.get('/coment/:id', Comentarios.readOne);
// ------------------------------Equipamentos------------------------------------
router.get('/equip', Equipamentos.read);
router.post('/equipcriar',Equipamentos.create);
router.delete('/equipdel/:id',Equipamentos.del);
// ------------------------------Perfis-----------------------------------
router.get('/perf', Perfis.read);
// ------------------------------Usuario--------------------------------------
router.get('/user', User.read);
router.post('/login',User.login);

module.exports = router;