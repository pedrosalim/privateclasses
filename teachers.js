const fs = require('fs')
const data = require('./data.json')
const { age, scholarity, date } = require('./utils')

exports.show =  function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        acting: foundTeacher.acting.split(","),
        scholarity: foundTeacher.scholarity.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
    }

    return res.render('instructors/show', { teacher })

}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields')
        }
    }

    let {avatar_url, birth, name, value, scholarity, type, acting} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)


    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        scholarity,
        type,
        acting,
        value,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })

    //return res.send(req.body)
}

exports.edit = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth),
        scholarity: scholarity(foundTeacher.scholarity)
    }

    return res.render('instructors/edit', { teacher })
}