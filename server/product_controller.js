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
    },
    updateItem: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image} = req.body
        const {id} = req.params

        db.update_item({id, name, description, price, image})
        .then((response) => {
            res.status(200).send(response)
        })
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_item({id})
        .then((response) => {
            res.status(200).send(response)
        })
    }
}