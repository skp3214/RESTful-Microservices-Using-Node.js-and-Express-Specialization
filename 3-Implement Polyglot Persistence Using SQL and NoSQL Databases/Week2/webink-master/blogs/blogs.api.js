const express = require('express');
const router = express.Router();
const blogsCtrl = require("./blogs.controller");

/**
 * API to save blog details
 * EFFECTIVE URL: POST /api/v1/blogs
 */
router.post("/", (req, res) => {
  try {
    let blog = {
      blogTitle: req.body.blogTitle,
      description: req.body.description,
      user: {
        userId: req.body.user.userId,
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        gender: req.body.user.gender,
        domain: req.body.user.domain,
        about: req.body.user.about,
        userRatings: req.body.user.userRatings,
        email: req.body.user.email,
      }
    }

    blogsCtrl.saveBlog(blog, (err, results) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.status(200).send({ STATUS: "OK", data: results });
    });

  } catch (error) {
    console.log("Unexpected error in saving blog..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in saving blog, please try later..!" });
  }
});

/**
 * API to get all blogs
 * EFFECTIVE URL: GET /api/v1/blogs/
 */
router.get('/', (req, res) => {
  try {
    blogsCtrl.findBlogs((err, results) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.status(200).send({ STATUS: "OK", data: results });
    });
  } catch (error) {
    console.log("Unexpected error in fetching blogs..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in fetching blogs, please try later..!" });
  }
});

module.exports = router;
