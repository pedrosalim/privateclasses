const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', teachers.index)

routes.get('/instructors/create', function(req, res) {
    return res.render('instructors/create')
})

routes.get('/instructors/:id', teachers.show)

routes.get('/instructors/:id/edit', teachers.edit)

routes.post('/instructors', teachers.post)

routes.put('/instructors', teachers.put)


routes.delete('/instructors', teachers.delete)

routes.get('/students', function(req, res) {
    return res.send('students')
})

module.exports = routes