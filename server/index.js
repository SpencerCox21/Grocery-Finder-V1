const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())









app.listen(2121, () => {console.log('Running on server port: 2121')})

//TO RUN SERVER RUN NODE *backend folder*/*backend file*        example: node server/index.js