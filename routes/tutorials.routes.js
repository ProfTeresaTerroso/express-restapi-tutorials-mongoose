const express = require('express');
const tutorialController = require("../controllers/tutorials.controller");

// express router
let router = express.Router();


router.route('/')
    .get(tutorialController.findAll)
    .post(tutorialController.create);


//needs to be BEFORE route /:tutorialID (otherwise, "published" string will be treated as an ID)
router.route('/published')
    .get(tutorialController.findAllPublished)

router.route('/:tutorialID')
    .get(tutorialController.findOne)
    .put(tutorialController.update)
    .delete(tutorialController.delete);

router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'TUTORIALS: what???' });
})

module.exports = router;