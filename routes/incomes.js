const express = require('express');
const router = express.Router();
const { getIncomes, addIncome, deleteIncome } = require('../controllers/transactions');


router
  .route('/')
  .get(getIncomes)
  .post(addIncome);

router
  .route('/:id')
  .delete(deleteIncome);

module.exports = router;