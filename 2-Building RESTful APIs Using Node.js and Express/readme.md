# Building RESTful APIs using Node.js and Express.

## Components of RESTful services.

- ### Resources.
  -  Are the building blocks of a RESTful sevices.
  -  Can contains static or dynamic data
  -  Are addressable by URLs
  -  Can have multiple representations
  
- ### Request Verbs.
     Specify an action to be performed on a specific resource/collection of resources.
  
  - GET
  - PUT
  - POST
  - DELETE
  - PATCH

- ### Request Headers
      An HTTP header that can be used in an HTTP request to provide information about the request context.
  
  Header can be used to:

  - Supply authentication credentials.
  - Control caching
  - Get user agent/referrer information.
  
  ```js
  Host: api.example.com
  Content-Type: application/json
  Authorization: Bearer some-access-token 
  ```

- ### Request Body
       Used to send and receive data via REST API.
    
    ```js
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "securepassword123"
    }
  ```

- ### Response Status Code
       Indicates whether a specific request was successful or not.


#### Below is combined example.

  ```js
  POST /users HTTP/1.1
  Host: api.example.com
  Content-Type: application/json
  Authorization: Bearer some-access-token

  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }


   ```

  ## Express FrameWork

  A fast, unopinionated, minimal, and flexible Node.js web application framework.
  Is middleware based and funnels incoming requests through a chain of middleware

  ## Week 1: Creating a RESTful api using Node.js
  
  ## Week 2: Creating RESTful api using Express.