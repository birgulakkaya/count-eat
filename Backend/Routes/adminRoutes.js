const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { requireAuth } = require("../middlewares/authMiddleware");

router.get("/", requireAuth, adminController.admin_index);
router.get("/add", requireAuth, adminController.admin_add);
router.post("/add", requireAuth, adminController.admin_add_post);
router.delete("/delete/:id", requireAuth, adminController.admin_delete);

module.exports = router;
