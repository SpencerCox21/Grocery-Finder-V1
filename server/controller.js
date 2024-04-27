const mainDishes = require('./mainDishes.json')
const salads = require('./salads.json')
const tortillas = require('./tortillas.json')


let ingredients = require('./ingredients.json')






module.exports = {
    getMainDishes: (req, res) => {
        res.status(200).send(mainDishes)
    },

    getSalads: (req, res) => {
        res.status(200).send(salads)
    },

    getTortillas: (req, res) => {
        res.status(200).send(tortillas)
    },

    



    getIngredients: (req, res) => {
        res.status(200).send(ingredients)
    },

    addToIngredients: (req, res) => {
        ingredients.push(req.body)
        res.status(200).send(ingredients)
    },

    /*
    purchaseCart: (req, res) => {
        cart = []
        res.status(200).send(cart)
    },
    */

    deleteRecipe: (req, res) => {

        let index = ingredient.findIndex(item => item.id === req.params.id)
        ingredient.splice(index, 1)
        res.status(200).send(ingredient)

    }
    //also, im going to need something to where if I deleteRecipe then the ingredient list will be refreshed.

}