// @desc Get all transactions
// @route GET /api/v1/transactions
exports.getTransactions = (req,res,next)=>{
    res.send("GET Transactions");
}

// @desc Add transactions
// @route POST /api/v1/transactions
exports.addTransaction = (req,res,next)=>{
    res.send("POST Transactions");
}

// @desc Delete transactions
// @route DELETE /api/v1/transactions:id
exports.deleteTransaction = (req,res,next)=>{
    res.send("DELETE Transactions");
}