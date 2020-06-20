const express = require('express')
const routes = express.Router()
const teachers = require('./controllers/teachers')
const students = require('./controllers/students')

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', teachers.index)
routes.get('/instructors/create', teachers.create)
routes.get('/instructors/:id', teachers.show)
routes.get('/instructors/:id/edit', teachers.edit)
routes.post('/instructors', teachers.post)
routes.put('/instructors', teachers.put)
routes.delete('/instructors', teachers.delete)


routes.get('/students', students.index)
routes.get('/students/create', students.create)
routes.get('/students/:id', students.show)
routes.get('/students/:id/edit', students.edit)
routes.post('/students', students.post)
routes.put('/students', students.put)
routes.delete('/students', students.delete)
routes.get('/students', function(req, res) {
    return res.send('students')
})




module.exports = routes