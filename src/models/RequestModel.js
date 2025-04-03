const mongoose = require('mongoose')
const RequestSchema = new mongoose.Schema({
    title: {type: String, required: true},
    pcs: {type: Number},
    description: {type: String},

}, {
    timestamps: true
})
const Request = mongoose.model('Request', RequestSchema)
module.exports = Request;
