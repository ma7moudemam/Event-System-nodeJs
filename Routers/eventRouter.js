const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventController');


router.get('/',controller.getAllEvents);
router.get('/:id?' , controller.getEventById);
router.post('/' , controller.addNewEvent);
router.delete('/:id?' , controller.deleteEvent);
router.put('/' , controller.updateDepartment);


module.exports = router;