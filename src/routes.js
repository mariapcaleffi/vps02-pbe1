const express = require('express')
const router = express.Router()

const clientes = require('./controller/controller_clientes')
const fornecedores = require('./controller/controller_fornecedores.js')
const telefone = require('./controller/controller_telefone')
const produtos = require('./controller/controller_produtos.js')
const pedidos = require('./controller/controller_pedidos.js')

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);
router.delete('/clientes', clientes.deletar);

router.post('/fornecedores', fornecedores.create);
router.get('/fornecedores', fornecedores.read);
router.put('/fornecedores', fornecedores.update);
router.delete('/fornecedores', fornecedores.deletar);

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone', telefone.update);
router.delete('/telefone', telefone.deletar);

router.post('/produtos', produtos.create);
router.get('/produtos', produtos.read);
router.put('/produtos', produtos.update);
router.delete('/produtos', produtos.deletar);

router.post('/pedidos', pedidos.create);
router.get('/pedidos', pedidos.read);
router.put('/pedidos', pedidos.update);
router.delete('/pedidos',pedidos.deletar);

module.exports = router;
