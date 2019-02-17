var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

router.use(bodyParser.json());
router.use(expressValidator())

import * as handler from './users.handler';
import * as validation from './users.validation';

router.post('/', validation.validate(), handler.setUser);
router.get('/', handler.getUser);
router.get('/:id', handler.getUserId);
router.put('/:id', handler.putUserId);
router.delete('/:id', handler.deleteUserId);

module.exports = router;

