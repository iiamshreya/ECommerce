const mongoose = require('mongoose');

const PaymentDetailSchema = new mongoose.Schema({
    paymentID: String,
    amount: Number,
    currency: String,
    status: String,
    method: String,
    receipt_email: String,
    description: String,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //reference to your  user model if you have one 
    created: {
        type: Date,
        default: Date.now
    }
});

const PaymentDetail = mongoose.model('PaymentDetail', PaymentDetailSchema)
module.exports = PaymentDetail
