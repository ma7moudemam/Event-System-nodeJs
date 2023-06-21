const express  = require('express');
const router = express.Router();
const controller = require('../controllers/studentsController');

router.get('/' , controller.getAllStudents);
router.get('/:id?' , controller.getStudentById);
router.post('/' , controller.addStudent);
router.put('/' , controller.updateStudent);
router.delete('/' , controller.deleteStudent);



module.exports = router;