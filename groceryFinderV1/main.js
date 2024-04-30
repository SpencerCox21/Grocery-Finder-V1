const baseURL = `http://localhost:2121`

const mainDishesLink = document.querySelector('#mainDishesLink')
const saladsLink = document.querySelector('#saladsLink')
const sideDishesLink = document.querySelector('#sideDishesLink')
const appetizersLink = document.querySelector('#appetizersLink')
const tortillasLink = document.querySelector('#tortillasLink')
const pastaAndNoodlesLink = document.querySelector('#pastaAndNoodlesLink')
const casserolesLink = document.querySelector('#casseroleLink')
const soupsLink = document.querySelector('#soupsLink')
const breadsLink = document.querySelector('#breadsLink')
const bulkLink = document.querySelector('#bulkLink')
const cakesAndPiesLink = document.querySelector('#cakesAndPiesLink')
const cookiesLink = document.querySelector('#cookiesList')
const pastriesLink = document.querySelector('#pastriesLink')
const otherRecipiesLink = document.querySelector('#otherRecipiesLink')



const errCallback = err => console.log(err);

const getMainDishes = () => axios.get(`${baseURL}/mainDishes`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getSalads = () => axios.get(`${baseURL}/salads`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getSideDishes = () => axios.get(`${baseURL}/sideDishes`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getAppetizers = () => axios.get(`${baseURL}/appetizers`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getTortillas = () => axios.get(`${baseURL}/tortillas`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getPastaAndNoodles = () => axios.get(`${baseURL}/pastaAndNoodles`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getCasseroles = () => axios.get(`${baseURL}/casseroles`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getSoups = () => axios.get(`${baseURL}/soups`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getBreads = () => axios.get(`${baseURL}/breads`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getBulk = () => axios.get(`${baseURL}/bulk`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getCakesAndPies = () => axios.get(`${baseURL}/cakesAndPies`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getCookies = () => axios.get(`${baseURL}/cookies`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getPastries = () => axios.get(`${baseURL}/pastries`).then((res) => {displayMShirt(res.data)}).catch(errCallback)
const getOtherRecipies = () => axios.get(`${baseURL}/otherRecipies`).then((res) => {displayMShirt(res.data)}).catch(errCallback)



mainDishesLink.addEventListener("click", getMainDishes);
saladsLink.addEventListener("click", getSalads);
sideDishesLink.addEventListener("click", getSideDishes);
appetizersLink.addEventListener("click", getAppetizers);
tortillasLink.addEventListener("click", getTortillas);
pastaAndNoodlesLink.addEventListener("click", getPastaAndNoodles);
casserolesLink.addEventListener("click", getCasseroles);
soupsLink.addEventListener("click", getSoups);
breadsLink.addEventListener("click", getBreads);
bulkLink.addEventListener("click", getBulk);
cakesAndPiesLink.addEventListener("click", getCakesAndPies);
cookiesLink.addEventListener("click", getCookies);
pastriesLink.addEventListener("click", getPastries);
otherRecipiesLink.addEventListener("click", getOtherRecipies);





let i = 0;

