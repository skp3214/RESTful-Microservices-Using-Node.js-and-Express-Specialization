## Challenge :: Pin2Piano (165 mins)

### Introduction

Pin2Piano is an online shopping site that allows its customers to browse through the product catalog, view details of selected products, add selected products to cart.


You as a backend developer have been assigned the responsibility to correctly model the users, products and order data and enable persistence of this data. For persistence, you need to choose the right database so that it does not impact the performance when data grows in size, or when the data is queried or when the data model is modified.


### Challenges Faced With Existing Solution

Off late, the site administrators have noted a steep rise in the concerns raised on transactions carried out with Pin2Piano app. A considerable dip has been observed in the app ratings due to these concerns.

Many customers have reported a similar concern that states that often the order is getting submitted without the quantity resulting into a faulty order. The complete transaction has to be repeated to place the order again. At times, between these two transactions product goes out of stock and hence the customer has to wait for the product to be in stock again.

The managers have also reported a concern regarding the products getting added without sufficient details. This has created a poor user experience among the customers leading to poor rating.

The backend development team has analyzed the backend code to identify the root cause behind these concerns raised.

### The Analysis

The backend development team have done the analysis and below are the key points related to the analysis done: 
1. The product catalog and order modules of Pin2Piano are developed using 
  1. Node.js for building REST APIs
  1. MongoDB for storing data
2. The connectivity between Node.js and MongoDB database has been established using the MongoDB Node driver
3. The REST APIs have not thoroughly implemented validations to enforce constraints on the data being stored in the MongoDB database




### Instructions

1. Unzip the boilerplate file downloaded to extract the boilerplate code.
2. Implement the APIs to work on the below listed entities and the API endpoints:

    **Entities**
    - Users
    - Products
    - Orders
    
    **API Endpoints**

    - `GET` /api/v1/users/:email
    - `GET` /api/v1/users/
    - `POST` /api/v1/users
      - Body (JSON)
        ```js
        {
          "userName": <userName>,
          "email": <email>,
          "ordersPlaced": <ordersPlaced>,
          "tags": <tags>,
          "description": <description>
        }
        ```
    - `GET` /api/v1/users/:userId/orders
    - `POST` /api/v1/products
      - Body (JSON)
        ```js
        {
          "productName": <productName>,
          "description": <description>,
          "price": <price>,
          "unitsAvailable": <unitsAvailable>,
          "tags": <tags>,
          "category": <category>,
          "metadata": <metadata>
        }
        ```
    - `GET` /api/v1/products?category=""&name=""
    - `GET` /api/v1/products/:productId
    - `POST` /api/v1/orders
      - Body (JSON) 
        ```
        {
          "orderName": <orderName>,
          "userId": <userId>,
          "userName": <userName>,
          "productId": <productId>,
          "productName": <productName>,
          "unitsPlaced": <unitsPlaced>
        }
        ```
    - `PUT` /api/v1/products/:productId <!--Update details like, name, description, unitsAvailable etc-->

3. You are required to update the inventory with available units for a product. After a user places an order for a product, its unit has to be decreased by the quantity he placed into cart.
  - Make the necessary changes to the entity and implement the new DAO to support the same.
4. Install the necessary node packages listed in `package.json` file.
5. Use Mongoose for establishing connectivity
6. The solution to establish connectivity using Mongoose should be provided in `mongooseConnection.js` file.
7. Create a `config.js` file to store the configuration details for MongoDB connection.
8. The solution code needs to be provided in `.dao.js` and `.entity.js` for each of the APIs in their respecitive folders
  - The `.dao.js` file should contain the code for performing CRUD operations
  - The `.entity.js` file should contain the code to define Mongoose Schema and Model with validations
9. Test the solution locally to check the correctness and completeness for stated `dao` and `schema` requirements. 
10. Refactor the solution to ensure all test cases are passing.  
11. DO NOT MODIFY THE PROVIDED CODE, ELSE THIS MAY IMPACT THE TEST CODE EXECUTION.
12. Zip the solution code by selecting all the files and folders **excluding the node_modules folder** and give the same name as assignment name to the zipped file.
13. Upload the zipped solution for submission.

#### Run Code

1. Run the command `node app.js` to execute the Node.js APIs
2. Use VSCode Extension Thunder Client or Postman or any other GUI tool to test the APIs.

#### Test Code
1. Test the solution locally by running the command `npm run test`. 