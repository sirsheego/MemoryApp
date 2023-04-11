const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECT_URL, {useNewURLParser: true, useUnifiedTopology: true})
.then(() =>app.listen(PORT, () =>console.log(`Server running on port http://localhost ${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));








