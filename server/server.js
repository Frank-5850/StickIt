const express = require("express");
const app = express();
const PORT = 1001;

// express setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
