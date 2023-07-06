const express = require('express');
const {people} = require("../data");

//getting router instance
const router = express.Router();

const {
    getPeople,
    addPeople,
    addPeoplePostman,
    deletePeople,
    updatePeople
} = require('../controllers/people');

//method 1

router.get('/',getPeople);
router.post('/',addPeople);
router.post('/postman',addPeoplePostman);
router.put('/:id',updatePeople);
router.delete('/:id',deletePeople);

//method 2
// router.route('/').get(getPeople).post(addPeople);
// router.route('/postman').post(addPeoplePostman);
// router.route('/:id').put(updatePeople);
// router.route('/:id').delete(deletePeople);


module.exports = router;