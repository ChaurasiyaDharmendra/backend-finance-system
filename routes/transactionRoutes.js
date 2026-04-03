const express = require("express");
const router = express.Router();
const roleCheck = require("../middleware/auth");

const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

// ✅ ye sab functions defined hone chahiye
router.post("/", roleCheck(["admin"]), createTransaction);
router.get("/", getTransactions);
router.put("/:id", roleCheck(["admin"]), updateTransaction);
router.delete("/:id", roleCheck(["admin"]), deleteTransaction);

module.exports = router;