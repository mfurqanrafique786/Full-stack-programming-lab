const Notification = require("../models/Notification");

// @desc    Get all notifications
// @route   GET /api/notifications
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Mark a notification as read
// @route   PUT /api/notifications/:id/read
const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true
      },
      {
        new: true
      }
    );

    if (!notification) {
      return res.status(404).json({
        message: "Notification Not Found"
      });
    }

    res.status(200).json({
      message: "Notification Marked As Read",
      notification
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Manually create a notification
// @route   POST /api/notifications
const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);

    res.status(201).json({
      message: "Notification Created",
      notification
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Export all controller functions
module.exports = {
  getNotifications,
  markAsRead,
  createNotification
};