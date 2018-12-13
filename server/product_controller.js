module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(response => {
            res.status(200).send(response)
        })
    },
    createItem: (req, res) => {
        const db = req.app.get('db')
        let {name, description, price, image} = req.body
        db.create_item({name, description, price, image}).then(response => {
            res.status(200).send(response)
        })
    }
}