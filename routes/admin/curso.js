const router = require('express').Router()

router.get('/curso/cadastrar', (req, res) => {
    res.render('admin/curso/cadastrar_curso')
})

router.get('/curso/editar', (req, res) => {
    res.render('admin/curso/editar_curso')
})

router.get('/curso/visualizar', (req, res) => {
    res.render('admin/curso/editar_curso')
})

router.get('/curso/detalhes', (req, res) => {
    res.render('admin/curso/editar_curso')
})

module.exports = router