const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server up on port 8000");
  console.log('====================================');
  console.log("👩🏼🙆 Dear my beloved teacher, please check our assignment on our branch ....");
  console.log('====================================');
})
