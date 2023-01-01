const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const eurekaHelper = require('./eureka-helper');

app.listen(PORT, () => {
  console.log("user-service1 on 8000");
})

app.get('/', (req, res) => {
 res.json("I am user-service")
})
eurekaHelper.registerWithEureka('user-service', PORT);