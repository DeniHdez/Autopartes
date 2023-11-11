const express=require('express');
const routes=express.Router();
const controller = require('../controlador/indexControlador');

/*rutas para las funciones dentro de la tabla*/
/*Raíz*/
routes.get('/', controller.index);
/*Inicio sesión*/
// routes.post('/sesion', controller.list);
//cuando mandamos guardar
routes.post('/agregar', controller.saveP);
//eliminar
routes.get('/deleteE/:id', controller.deleteE);
//Consultar datos
routes.get('/consultarE/:id', controller.editE);
//Modificar datos
routes.post('/consultarE/updateE/:id', controller.updateE);
module.exports=routes;
