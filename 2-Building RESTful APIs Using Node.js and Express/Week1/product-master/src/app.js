const http = require('http');
const PORT = 3000;
const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  if (req.url === '/products' && req.method === 'GET') {
    const products = productsService.getProducts();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(products);
  } else if (req.url.match(/\/products\/\d+/) && req.method === 'GET') {
    const id = req.url.split('/')[2];
    productsService.getProductsById(parseInt(id), (err, product) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Product Not Found' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(product);
      }
    });
  } else if (req.url === '/products' && req.method === 'POST') {
    const body = await getRequestData(req);
    const product = JSON.parse(body);
    productsService.saveProduct(product, (err, products) => {
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(products);
    });
  } else if (req.url.match(/\/products\/\d+/) && req.method === 'PUT') {
    const id = req.url.split('/')[2];
    const body = await getRequestData(req);
    const updateData = JSON.parse(body);
    productsService.updateProduct(parseInt(id), updateData, (err, products) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(products);
    });
  } else if (req.url.match(/\/products\/\d+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[2];
    productsService.deleteProduct(parseInt(id), (err, products) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(products);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
