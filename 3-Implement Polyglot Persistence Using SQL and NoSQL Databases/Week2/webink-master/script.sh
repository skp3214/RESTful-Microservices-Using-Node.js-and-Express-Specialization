#!/bin/bash

# 1. Get all the blogs created by user with id 17.
echo "Query 1:"
mongo blogmanagementDB --eval 'db.blogs.find({"user.userId": "17"}).pretty()'

# 2. Update User ratings for user with id 10 to 5.
echo "Query 2:"
mongo blogmanagementDB --eval 'db.blogs.updateMany({"user.userId": "10"}, {$set: {"user.userRatings": "5"}})'

# 3. Remove all the documents created by user 80, since he has deleted his account.
echo "Query 3:"
mongo blogmanagementDB --eval 'db.blogs.deleteMany({"user.userId": "80"})'

# 4. Add a new column to all the documents for status as "ACTIVE" as default value for all.
echo "Query 4:"
mongo blogmanagementDB --eval 'db.blogs.updateMany({}, {$set: {"status": "ACTIVE"}})'

# 5. Get all users with rating above and equal to 4.
echo "Query 5:"
mongo blogmanagementDB --eval 'db.blogs.find({"user.userRatings": {$gte: "4"}}).pretty()'

# 6. Get all users with rating lesser to 4.
echo "Query 6:"
mongo blogmanagementDB --eval 'db.blogs.find({"user.userRatings": {$lt: "4"}}).pretty()'

# 7. Update users with ratings more than 4 with tags as new field and value array of ["master", "created", "blogs"]
echo "Query 7:"
mongo blogmanagementDB --eval 'db.blogs.updateMany({"user.userRatings": {$gt: "4"}}, {$set: {"user.tags": ["master", "created", "blogs"]}})'

# 8. Find users have tags value "created" and "blogs"
echo "Query 8:"
mongo blogmanagementDB --eval 'db.blogs.find({"user.tags": {$all: ["created", "blogs"]}}).pretty()'
