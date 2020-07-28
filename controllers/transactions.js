const Expense = require('../models/Expense');
const Income = require('../models/Income');

// @desc    Get expenses
// @route   GET /api/v1/expenses
// @access  Public
exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();

    return res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Get incomes
// @route   GET /api/v1/incomes
// @access  Public
exports.getIncomes = async (req, res, next) => {
  try {
    const Incomes = await Income.find();

    return res.status(200).json({
      success: true,
      count: Incomes.length,
      data: Incomes
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add expense
// @route   POST /api/v1/expenses
// @access  Public
exports.addExpense = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const expense = await Expense.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: expense
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Add income
// @route   POST /api/v1/incomes
// @access  Public
exports.addIncome = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const income = await Income.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: income
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete expense
// @route   DELETE /api/v1/expenses/:id
// @access  Public
exports.deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if(!expense) {
      return res.status(404).json({
        success: false,
        error: 'No expense found'
      });
    }

    await expense.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Delete income
// @route   DELETE /api/v1/incomes/:id
// @access  Public
exports.deleteIncome = async (req, res, next) => {
  try {
    const income = await Income.findById(req.params.id);

    if(!income) {
      return res.status(404).json({
        success: false,
        error: 'No income found'
      });
    }

    await income.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}