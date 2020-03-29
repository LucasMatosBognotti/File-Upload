const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');

const routes = new Router();
const upload = multer(multerConfig);

const SpotController = require('./Controller/SpotControlers');

routes.post('/spots', upload.single('file'), SpotController.store);

routes.get('/spots', SpotController.index);

routes.delete('/spots', SpotController.delete);

module.exports = routes;