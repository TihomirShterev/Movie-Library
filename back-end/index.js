const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares/error');
const router = require('./routes');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/api', router);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
