const express = require("express")
const { getAllProducts, singleProduct, CreateProduct } = require("../controllers/productCtrl")


const router = express.Router()

router.post('/create', CreateProduct)
router.get("/all", getAllProducts)
router.get("/single/:id", singleProduct)

module.exports = router