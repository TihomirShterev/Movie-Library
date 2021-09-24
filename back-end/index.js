require('dotenv').config();

const app = require('express')();

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));