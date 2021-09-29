const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserByID);

//api post add Users
router.post('/', controller.addUser);

//api delete User
router.delete('/:id', controller.removeUser)

module.exports = router;