const express = require('express');
const mongoose =require('mongoose');
const router = express.Router();
const controller = require('../controllers/departmentController');
const {body ,query , param } = require('express-validator');
const Department = mongoose.model('departments');


router.get('/' ,controller.getAllDepartments);

router.post('/', [
    body("id").isInt().withMessage("Required"),
    body("name").isAlpha().withMessage("Required").isLength({max:10}).withMessage("department length < 10")
        .custom(async (value,{req})=>{
            // connect to DB
            const department = await Department.findOne({ name: value });
            if (department) {
                throw new Error('Department name already exists');
            }
        })
],controller.createDepartment);

router.put('/' , controller.updateDepartment);

router.delete('/:id?' , controller.deleteDepartment);

module.exports = router;