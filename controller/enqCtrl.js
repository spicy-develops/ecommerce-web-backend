const Enquiry = require('../models/enqModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongoDbId');

const createEnquiry = asyncHandler(async (req, res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry)
    }catch(error){
        throw new Error(error)
    }
});

const updateEnquiry = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const updateEnquiry = await Enquiry.findOneAndUpdate({_id: id}, req.body, {new:true})
        res.json(updateEnquiry);

    }catch(error){
        throw new Error(error)
    }
})

const deleteEnquiry = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const deleteEnquiry = await Enquiry.findByIdAndDelete(id)
        res.json(deleteEnquiry);

    }catch(error){
        throw new Error(error)
    }
})

const getaEnquiry = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const findEnquiry = await Enquiry.findById(id);
        res.json(findEnquiry)
    }catch(error){
        throw new Error(error)
    }
})

const getallEnquiry = asyncHandler(async (req, res) => {
    try{
        const findEnquiry = await Enquiry.find();
        res.json(findEnquiry)
    }catch(error){
        throw new Error(error)
    }
})

module.exports = {createEnquiry, updateEnquiry, deleteEnquiry, getaEnquiry, getallEnquiry}