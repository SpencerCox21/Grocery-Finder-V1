const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())




const {
    getMainDishes,


} = require('./controller')





app.get('/mainDishes', getMainDishes)







app.listen(2121, () => {console.log('Running on server port: 2121')})

//TO RUN SERVER GO TO THE TERMINAL AND TYPE => node *backend folder*/*backend file*        example: node server/index.js