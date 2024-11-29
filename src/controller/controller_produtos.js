const con = require('../connect/banco').con;

const create = (req, res) => {
    let descricao = req.body.descricao; 
    let preco = req.body.preco; 
    let nome = req.body.nome;
    let validade = req.body.validade; 
    let idforn = req.body.idforn; 
    let query = `INSERT INTO produtos (descricao, preco, nome, validade, idforn) VALUES (?, ?, ?, ?, ?)`;
    
    con.query(query, [descricao, preco, nome, validade, idforn], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const read = (req, res) => {
    con.query('SELECT * FROM produtos', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const update = (req, res) => {
    let descricao = req.body.descricao; 
    let preco = req.body.preco; 
    let nome = req.body.nome; 
    let validade = req.body.validade; 
    let idforn = req.body.idforn; 

    

    let query = `UPDATE produtos set descricao='${descricao}', preco='${preco}', nome='${nome}', validade='${validade}', idforn='${idforn}'`
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

const deletar = (req, res) => {
    let idprod = req.params.idprod; 
    let query = `DELETE FROM produtos WHERE idprod = ?`;

    con.query(query, [idprod], (err, result) => {
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