const connection = require("../data/db")

const index = (req, res) => {
    const sql = `SELECT * FROM posts;`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results)
    })
};

const show = (req, res) => {

    const id = parseInt(req.params.id)

    const sql = `SELECT * FROM posts WHERE id = ?;`

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (results.length === 0) return res.status(404).json({ error: 'Post not found' })
        res.json(results[0])
    })
};

const create = (req, res) => {

};

const update = (req, res) => {

};

const modify = (req, res) => {

};

const destroy = (req, res) => {

    const id = req.params.id
    const sql = `    
        DELETE
        FROM posts 
        WHERE id = ?;
    ;`

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.sendStatus(204)
    })



};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}