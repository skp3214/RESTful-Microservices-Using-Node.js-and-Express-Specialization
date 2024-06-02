const papaparse = require("papaparse");
const fs = require("fs");
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://skprajapati3214:Sachin3214@backend-cluster.qfpxr0l.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "blogmanagementDB";

// Read csv file and save the blogs data 
function readBlogs() {
  
  const file = fs.readFileSync('resources/blogsdata.csv', 'utf-8');
  let blogs = [];
  papaparse.parse(file, {
    header: true,
    complete: (results) => {
      blogs = results.data;
    }
  });
  return blogs;
}

// Read csv file and save the users data 
function readUsers() {
  const file = fs.readFileSync('resources/usersdata.csv', 'utf-8');
  let users = [];
  papaparse.parse(file, {
    header: true,
    complete: (results) => {
      users = results.data;
    }
  });
  return users;
}

async function insertBlogsData() {
  const blogs = readBlogs();
  const users = readUsers();

  const blogsWithUser = blogs.map(blog => {
    return {
      _id: blog.blogId,
      blogTitle: blog.blogTitle,
      description: blog.description,
      user: users.find(user => user.userId === blog.userId)
    };
  });

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    const collection = db.collection('blogs');

    const insertResult = await collection.insertMany(blogsWithUser);
    console.log('Inserted documents =>', insertResult);

    return 'done.';
  } catch (err) {
    console.log(err.stack);
    return 'error.';
  } finally {
    await client.close();
  }
}
insertBlogsData();
module.exports = insertBlogsData;
