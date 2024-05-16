const express = require('express');
const { Createpayment } = require('../controllers/paymentCtrl');



const router = express.Router();

router.post("/create-payment",Createpayment);

module.exports=router;