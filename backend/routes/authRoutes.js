const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/verify-2fa", authController.verify2FA);
router.get("/profile", authMiddleware, authController.getProfile);
router.post("/logout", (req, res) => {
  res.json({ message: "Logout successful" });
});

module.exports = router;