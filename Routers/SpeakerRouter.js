const express = require('express');
const router = express.Router();
const controller = require('../controllers/speakersController');


router.get('/' , controller.getAllSpeakers);
router.get('/:id?' , controller.getSpeakerById);
router.post('/' , controller.addSpeaker);
router.put('/' , controller.updateSpeaker);
router.delete('/:id?',controller.deleteSpeaker);

module.exports = router;