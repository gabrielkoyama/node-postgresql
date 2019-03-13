var express = require('express');
var sql = require('../lib/sql.js');
var router = express.Router();


router.all('/findAll', (req, res, next) => {
	sql.findAll( (res) => {
		console.log(res)
	})
})

router.get('/', function (req, res, next) {
	res.render('login')
});

router.get('/register', function (req, res, next) {
	res.render('register', {
		nome: 'funcionou'
	})
});

router.post('/register', function(req, res, next){

	const { nome, sobrenome, email, senha } = req.body;

	erro = []

	if(!nome || !sobrenome || !email || !senha){
		erro.push({msg: 'Todos os campos devem ser inseridos'})
	}

	if(erro.length > 0){

		res.render('register', {
			erro,
			nome,
			sobrenome, 
			email,
			senha
		})

	}else{
		res.send('tudo ok');
	}

})

router.post('/login', function (req, res, next) {
	
	const { email, senha } = req.body;

	console.log(email, senha)
	
	res.send('logar')
});

module.exports = router;