const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())




const {
    getMainDishes,
    getSalads,
    getSideDishes,
    getAppetizers,
    getTortillas,
    getPastaAndNoodles,
    getCasseroles,
    getSoups,
    getBreads,
    getBulk,
    getCakesAndPies,
    getCookies,
    getPastries,
    getOtherRecipies
    
} = require('./controller')





app.get('/mainDishes', getMainDishes)
app.get('/salads', getSalads)
app.get('/sideDishes', getSideDishes)
app.get('/appetizers', getAppetizers)
app.get('/tortillas', getTortillas)
app.get('/pastaAndNoodles', getPastaAndNoodles)
app.get('/casserole', getCasseroles)
app.get('/soups', getSoups)
app.get('/breads', getBreads)
app.get('/bulk', getBulk)
app.get('/cakesAndPies', getCakesAndPies)
app.get('/cookies', getCookies)
app.get('/pastries', getPastries)
app.get('/otherRecipies', getOtherRecipies)





app.listen(2121, () => {console.log('Running on server port: 2121')})

//TO RUN SERVER GO TO THE TERMINAL AND TYPE => node *backend folder*/*backend file*        example: node server/index.js