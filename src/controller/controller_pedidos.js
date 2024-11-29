const con = require('../connect/banco').con;

const create = (req, res) => {
    let idcliente = req.body.idcliente; 
    let idprod = req.body.idprod; 
    let idtelefone = req.body.idtelefone;
    let datalancamento = req.body.datalancamento; 
    let total = req.body.total; 
    let query = `INSERT INTO pedidos (idcliente, idprod, idtelefone, datalancamento, total) VALUES (?, ?, ?, ?, ?)`;
    
    con.query(query, [idcliente, idprod, idtelefone, datalancamento, total], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const read = (req, res) => {
    con.query('SELECT * FROM pedidos', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const update = (req, res) => {
    let idcliente = req.body.idcliente; 
    let idprod = req.body.idprod; 
    let idtelefone = req.body.idtelefone; 
    let datalancamento = req.body.datalancamento; 
    let total = req.body.total; 

    

    let query = `UPDATE pedidos set idcliente='${idcliente}', idprod='${idprod}', idtelefone='${idtelefone}', datalancamento='${datalancamento}', total='${total}'`
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const deletar = (req, res) => {
    let idpedido = req.params.idpedido; 
    let query = `DELETE FROM pedidos WHERE idpedido = ?`;

    con.query(query, [idpedido], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'produto não encontrado' });
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