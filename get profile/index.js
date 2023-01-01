const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const eurekaHelper = require('./eureka-helper');

app.listen(PORT, () => {
  console.log("user-service2 on 9000");
})

app.get('/', (req, res) => {
 res.json("I am userProfile-service")
})
eurekaHelper.registerWithEureka('userProfile-service2', PORT);