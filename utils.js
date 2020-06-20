module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 || 
            month == 0 && 
            today.getDate() <= birthDate.getDate()) {
                age = age - 1
        }
    
        return age
    },

    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
 
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },

    scholarity: function(value) {
        switch(value) {
            case ('Ensino Médio'): return 'Ensino Médio'
            case ('Superior'): return 'Ensino Superior'
            case ('Mestrado'): return 'Mestrado'
            case ('Doutorado'): return 'Doutorado'
        }
        return value
    }
}