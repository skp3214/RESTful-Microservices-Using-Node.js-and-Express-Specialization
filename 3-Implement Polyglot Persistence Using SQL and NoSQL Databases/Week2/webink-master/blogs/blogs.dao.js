const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://skprajapati3214:Sachin3214@backend-cluster.qfpxr0l.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "blogmanagementDB";

const saveBlog = async function (blog, done) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('blogs');

    const insertResult = await collection.insertOne(blog);

    if (!insertResult.insertedId) {
      console.log("Error in saving blog, ERROR::");
      return done("Failed to save blog due to data errors..!");
    }

    return done(null, blog);
  } catch (error) {
    return done("Failed to save blog due to data errors..!");
  } finally {
    await client.close();
  }
}

const findBlogs = async function (done) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('blogs');

    const findResult = await collection.find({}).toArray();

    if (!findResult) {
      console.log("Error in fetching blogs");
      return done("Failed to fetch blogs due to data errors..!");
    }

    return done(null, findResult);
  } catch (error) {
    return done("Failed to fetch blogs due to data errors..!");
  } finally {
    await client.close();
  }
}

module.exports = {
  saveBlog,
  findBlogs,
}
