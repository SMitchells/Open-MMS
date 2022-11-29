const router = require('express').Router()

router.get('/aluno/cadastrar', (req, res) => {
    res.render('admin/aluno/cadastrar_aluno')
})

router.post('/aluno/cadastrar', (req, res) => {
    console.log(req.body)
    res.send('Salvo')
})

router.get('/aluno/editar', (req, res) => {
    res.render('admin/aluno/editar_aluno')
})

router.get('/aluno/visualizar', (req, res) => {
    res.render('admin/aluno/vizualizar_aluno')
})

router.get('/aluno/detalhes', (req, res) => {
    res.render('admin/aluno/cadastrar_aluno')
})

module.exports = router