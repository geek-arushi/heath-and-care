const Product = require('../models/Product');
const Service = require('../models/Service');
const Team = require('../models/Team');
const Order = require('../models/Order');
const User = require('../models/User');

// @desc    Get dashboard stats
// @route   GET /api/dashboard/stats
// @access  Private/Admin
exports.getDashboardStats = async (req, res, next) => {
  try {
    const productsCount = await Product.countDocuments();
    const servicesCount = await Service.countDocuments();
    const teamCount = await Team.countDocuments();
    const ordersCount = await Order.countDocuments();
    const usersCount = await User.countDocuments();
    
    // Get total revenue
    const orders = await Order.find({ isPaid: true });
    const totalRevenue = orders.reduce((acc, order) => acc + order.totalPrice, 0);
    
    // Get recent orders
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('user', 'name email');
    
    // Get order status counts
    const pendingOrders = await Order.countDocuments({ status: 'Pending' });
    const processingOrders = await Order.countDocuments({ status: 'Processing' });
    const shippedOrders = await Order.countDocuments({ status: 'Shipped' });
    const deliveredOrders = await Order.countDocuments({ status: 'Delivered' });
    const cancelledOrders = await Order.countDocuments({ status: 'Cancelled' });
    
    res.status(200).json({
      success: true,
      data: {
        productsCount,
        servicesCount,
        teamCount,
        ordersCount,
        usersCount,
        totalRevenue,
        recentOrders,
        orderStatus: {
          pending: pendingOrders,
          processing: processingOrders,
          shipped: shippedOrders,
          delivered: deliveredOrders,
          cancelled: cancelledOrders
        }
      }
    });
  } catch (error) {
    next(error);
  }
};