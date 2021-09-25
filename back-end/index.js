const express = require('express');
const { notFound, errorHandler } = require('./middlewares/error');
const router = require('./routes');

require('dotenv').config();
require('./config/db')();
const app = express();
app.use(express.json());
app.use('/api', router);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
