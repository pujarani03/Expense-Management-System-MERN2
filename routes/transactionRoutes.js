const express = require("express");
const { addTransaction, getAllTransaction } = require("../controllers/TransactionCtrl");


//router object
const router = express.Router();

//routes
//add transaction POST METHOD
router.post("/add-transaction", addTransaction);

//get transactions
router.get("/get-transaction", getAllTransaction);

module.exports = router;