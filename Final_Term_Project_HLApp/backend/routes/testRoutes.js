const express = require("express");

const router = express.Router();

const { protect } =
  require("../middleware/authMiddleware");

const authorizeRoles =
  require("../middleware/roleMiddleware");

router.get(
  "/profile",
  protect,
  (req, res) => {
    res.json({
      message: "Protected Profile Route",
      user: req.user
    });
  }
);

router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin"
    });
  }
);

module.exports = router;