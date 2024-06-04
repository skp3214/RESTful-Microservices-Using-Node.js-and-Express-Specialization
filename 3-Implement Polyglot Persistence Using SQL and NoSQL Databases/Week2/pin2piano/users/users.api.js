const express = require('express');
const router = express.Router();
const usersCtrl = require("./users.controller");

/**
 * API to save user details
 * EFFECTIVE URL: POST /api/v1/users
 */
router.post("/", async (req, res) => {
  try {
    let userReq = {
      userName: req.body.userName || "",
      email: req.body.email || ""
    };

    const results = await usersCtrl.saveUser(userReq);
    return res.status(200).send({ STATUS: "OK", data: results });

  } catch (error) {
    console.log("Unexpected error in saving user..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in saving user, please try later..!" });
  }
});

/**
 * API to get all users
 * EFFECTIVE URL: GET /api/v1/users/
 */
router.get('/', async (req, res) => {
  try {
    const results = await usersCtrl.findUsers();
    return res.status(200).send({ STATUS: "OK", data: results });
  } catch (error) {
    console.log("Unexpected error in fetching users..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in fetching users, please try later..!" });
  }
});

/**
 * API to get the user detail by email
 * EFFECTIVE URL: GET /api/v1/users/:email
 */
router.get('/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const results = await usersCtrl.getUserByEmail(email);
    return res.status(200).send({ STATUS: "OK", data: results });
  } catch (error) {
    console.log("Unexpected error in getting user details by email..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in getting user details by email, please try later..!" });
  }
});

/**
 * API to get the details of orders placed by user
 * EFFECTIVE URL: GET /api/v1/users/:userId/orders
 */
router.get('/:userId/orders', async (req, res) => {
  try {
    const userId = req.params.userId;
    const results = await usersCtrl.findOrdersPlacedByUser(userId);
    return res.status(200).send({ STATUS: "OK", data: results });
  } catch (error) {
    console.log("Unexpected error in getting details of orders placed by user..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in getting details of orders placed by user, please try later..!" });
  }
});

/**
 * API to get the user detail by userId
 * EFFECTIVE URL: GET /api/v1/users/id/:userId
 */
router.get('/id/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const results = await usersCtrl.getUserById(userId);
    return res.status(200).send({ STATUS: "OK", data: results });
  } catch (error) {
    console.log("Unexpected error in getting user details by userId..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in getting user details by userId, please try later..!" });
  }
});

/**
 * API to update the user details
 * EFFECTIVE URL: PUT /api/v1/users/:userId
 */
router.put('/:userId', async (req, res) => {
  try {
    const UserId = req.params.userId;
    let updateReq = {
      UserName: req.body.userName || "",
      Email: req.body.email || ""
   };

    const results = await usersCtrl.updateUserDetails(UserId, updateReq);
    return res.status(200).send({ STATUS: "OK", data: results });
  } catch (error) {
    console.log("Unexpected error in updating user details..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in updating user details, please try later..!" });
  }
});

module.exports = router;
