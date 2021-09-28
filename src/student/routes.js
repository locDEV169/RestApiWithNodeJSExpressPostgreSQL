const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentByID);

//api post add students
router.post('/', controller.addStudent);

//api delete student
router.delete('/:id', controller.removeStudent)

module.exports = router;