const blogsService = require("./blogs.service");

const saveBlog = function (blog, done) {
  blogsService.saveBlog(blog, (err, results) => {
    if (err) {
      return done(err);
    }
    return done(null, results);
  });
}

const findBlogs = function (done) {
  blogsService.findBlogs((err, results) => {
    if (err) {
      return done(err);
    }
    return done(null, results);
  });
}

module.exports = {
  saveBlog,
  findBlogs
}
