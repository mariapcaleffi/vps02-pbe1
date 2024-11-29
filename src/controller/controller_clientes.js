const con = require('../connect/banco').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;

    let query = `INSERT INTO clientes (nome, pagamento) VALUES (?, ?)`;
    
    con.query(query, [nome, pagamento], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const update = (req, res) => {
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;

    let query = `UPDATE update set nome='${nome}', pagamento='${pagamento}'`
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const deletar = (req, res) => {
    let idcliente = req.params.idcliente; 

    let query = `DELETE FROM clientes WHERE id = ?`;

    con.query(query, [idcliente], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Cliente não encontrado' });
        } else {
            res.status(204).send(); 
        }
    });
}

module.exports = {
    create,
    read,
    update,
    deletar
}