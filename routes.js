const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {
    return res.render('instructors/create')
})

routes.get('/instructors/:id', teachers.show)

routes.get('/instructors/:id/edit', teachers.edit)

routes.post('/instructors', teachers.post)

routes.get('/students', function(req, res) {
    return res.send('students')
})

module.exports = routes