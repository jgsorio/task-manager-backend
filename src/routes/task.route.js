const TaskController = require('../controllers/task.controller');
const { Router } = require('express');

const router = Router();

router.get('/', TaskController.all);
router.get('/:id', TaskController.find);
router.post('/', TaskController.store);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

module.exports = router;
