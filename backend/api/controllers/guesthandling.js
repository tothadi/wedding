const mongoose = require('mongoose')
const Guest = mongoose.model('Guest')

module.exports.saveGuest = (req, res) => {

    let guests = req.body.guests
    let pass = req.body.pass
    console.log(pass)
    let results = []
    let processed = 0
    if (pass === process.env.secret) {
        guests.forEach((element, index, array) => {
            let newGuest = new Guest()
            newGuest.contact = element.contact
            newGuest.phone = element.phone
            newGuest.name = element.name
            newGuest.age = element.age
            newGuest.fri = element.fri
            newGuest.sat = element.sat
            newGuest.meal = element.meal
            newGuest.other = element.other
            newGuest.save(err => {
                if (err) {
                    console.log(err)
                    results.push({
                        'name': element.name,
                        'saved': false,
                        'message': err.message
                    })
                } else {
                    results.push({
                        'name': element.name,
                        'saved': true,
                        'message': 'ok'
                    })
                }
                processed++
                if (processed === array.length) {
                    res.json(results)
                }
            })
        })
    } else {
        res.json([{
            'name': 'error',
            'saved': false,
            'message': 'A jelszó helytelen'
        }])
    }

}
