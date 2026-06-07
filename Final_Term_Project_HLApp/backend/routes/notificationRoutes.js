const express = require("express");
const router = express.Router();

// Destructure all controller functions from the notification controller
const {
  getNotifications,
  markAsRead,
  createNotification
} = require("../controllers/notificationController");

// Middleware imports
const { protect } = require("../middleware/authMiddleware");

// @route   GET /api/notifications
// @desc    Get all notifications
// @access  Private
router.get(
  "/",
  protect,
  getNotifications
);

// @route   POST /api/notifications
// @desc    Create a manual notification
// @access  Private
router.post(
  "/",
  protect,
  createNotification
);

// @route   PUT /api/notifications/read/:id
// @desc    Mark a notification as read
// @access  Private
router.put(
  "/read/:id",
  protect,
  markAsRead
);

module.exports = router;