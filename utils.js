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

    graduation: function(value) {
        switch(value) {
            case ('M'): return 'Ensino Médio'
            case ('S'): return 'Ensino Superior'
            case ('ME'): return 'Mestrado'
            case ('D'): return 'Doutorado'
        }
        return value
    }
}