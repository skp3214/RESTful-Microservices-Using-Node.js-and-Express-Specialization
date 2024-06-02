const connection = require('./db');

// Initialize the SQL connection
const sql = connection();

// Define the Category constructor
function Category(category_name, category_descr, category_creation_date) {
  this.category_name = category_name;
  this.category_descr = category_descr;
  this.category_creation_date = category_creation_date;
}

// Create a new category
Category.create = (newCategory, result) => {
  sql.query("INSERT INTO category SET ?", newCategory, (err, res) => {
    if (err) {
      console.error("Error creating category:", err);
      result(err, null);
      return;
    }
    console.log("Created category:", { id: res.insertId, ...newCategory });
    result(null, { id: res.insertId, ...newCategory });
  });
};

// Find category by ID
Category.findById = (categoryId, result) => {
  sql.query(`SELECT * FROM category WHERE category_id = ${categoryId}`, (err, res) => {
    if (err) {
      console.error("Error finding category:", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found category:", res[0]);
      result(null, res[0]);
      return;
    }
    // Category not found
    result({ message: "Category not found" }, null);
  });
};

// Get all categories or categories by name
Category.getAll = (name, result) => {
  let query = "SELECT * FROM category";
  if (name) {
    query += ` WHERE category_name LIKE '%${name}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.error("Error fetching categories:", err);
      result(err, null);
      return;
    }
    console.log("Fetched categories:", res);
    result(null, res);
  });
};

// Update category by ID
Category.updateById = (id, category, result) => {
  sql.query(
    "UPDATE category SET category_name = ?, category_descr = ?, category_creation_date = ? WHERE category_id = ?",
    [category.category_name, category.category_description, category.category_creation_date, id],
    (err, res) => {
      if (err) {
        console.error("Error updating category:", err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        // Category not found
        result({ message: "Category not found" }, null);
        return;
      }
      console.log("Updated category:", { id: id, ...category });
      result(null, { id: id, ...category });
    }
  );
};

// Remove category by ID
Category.remove = (id, result) => {
  sql.query("DELETE FROM category WHERE category_id = ?", id, (err, res) => {
    if (err) {
      console.error("Error deleting category:", err);
      result(err, null);
      return;
    }
    if (res.affectedRows == 0) {
      // Category not found
      result({ message: "Category not found" }, null);
      return;
    }
    console.log("Deleted category with ID:", id);
    result(null, res);
  });
};

// Remove all categories
Category.removeAll = (result) => {
  sql.query("DELETE FROM category", (err, res) => {
    if (err) {
      console.error("Error deleting categories:", err);
      result(err, null);
      return;
    }
    console.log("Deleted all categories");
    result(null, res);
  });
};

module.exports = Category;
