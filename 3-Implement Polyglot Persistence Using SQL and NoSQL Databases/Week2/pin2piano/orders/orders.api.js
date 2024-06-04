const express = require('express');
const router = express.Router();

const ordersCtrl = require("./orders.controller");

/**
 * API to save order details
 * EFFECTIVE URL: POST /api/v1/orders
 */
router.post("/", async (req, res) => {
  try {
    let orderReq = {
      orderName: (req.body.orderName || ""),
      productId: (req.body.productId || ""),
      productName: (req.body.productName || ""),
      userId: (req.body.userId || ""),
      userName: (req.body.userName || ""),
      unitsPlaced: (req.body.unitsPlaced || 0),
    }

    const results = await ordersCtrl.saveOrder(orderReq);
    return res.status(200).send({ STATUS: "OK", data: results });

  } catch (err) {
    console.log("Unexpected error in saving order details..!", err);
    return res.status(400).send({ STATUS: "DATA_ERROR", error: err.message });
  }
});

/**
 * API to fetch orders placed by a user
 * EFFECTIVE URL: GET /api/v1/orders/:userId
 */
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const results = await ordersCtrl.findOrdersPlacedByUser(userId);
    return res.status(200).send({ STATUS: "OK", data: results });

  } catch (err) {
    console.log("Unexpected error in fetching orders placed by user..!", err);
    return res.status(400).send({ STATUS: "DATA_ERROR", error: err.message });
  }
});

module.exports = router;
