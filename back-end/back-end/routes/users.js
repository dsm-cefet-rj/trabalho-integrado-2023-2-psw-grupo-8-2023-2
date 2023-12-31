var express = require('express');
var router = express.Router();
const cors = require('cors');
router.use(cors());
const bodyParser = require('body-parser');
var User = require('../models/users');
var passport = require('passport');
var authenticate = require('../authenticate');

router.use(bodyParser.json());


router.post('/signup', (req, res, next) => {
  User.register(new User({ username: req.body.username, email: req.body.email, cpf: req.body.cpf }), req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: true, status: 'Registration Successful!' });
        });
      }
    });
});

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {

  var token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ id: req.user._id, email: req.user.email, cpf: req.user.cpf, username: req.user.username, token: token });
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

router.route('/update')
  .put(authenticate.verifyUser, async (req, res, next) => {
    try {
      // Atualize os campos do perfil conforme necessário
      if (req.body.username) {
        req.user.username = req.body.username;
      }

      if (req.body.email) {
        req.user.email = req.body.email;
      }
      // Adicione mais campos conforme necessário

      // Salve as alterações no banco de dados
      await req.user.save();

      res.status(200).json({ message: 'Perfil atualizado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar o perfil.' });
    }

  });


  router.route('/deleteUser')
  .delete(authenticate.verifyUser, async (req, res, next) => {
    try {
      // Remove o usuário do banco de dados pelo ID
      await User.findByIdAndRemove(req.body.id);

      // Desloga o usuário após a exclusão

      res.status(200).json({ message: 'Conta excluída com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir a conta.' });
    }
  });



module.exports = router;

