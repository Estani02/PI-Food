const { Router } = require('express');
const { getAllInfo } = require('../controllers/recipesController');
const router = Router();
const { Diet, Recipe } = require('../db.js');
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const title = req.query.title;
        const getRecipes = await getAllInfo();
        if (title) {
            let recipe = getRecipes.filter(e => e.title.toLowerCase() === title.toLowerCase());
            recipe.length ? res.status(200).json(recipe) :
                res
                    .status(404)
                    .json(`The recipe ${title} not found`)
        } else {
            return res
                .status(200)
                .json(getRecipes)
        }
    } catch (error) {
        return res
            .status(404)
            .json(error)
    }

});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const allRecipes = await getAllInfo();
        const recipe = allRecipes.find(r => r.id.toString() === id);
        if (!recipe) {
            res
                .status(404)
                .json(`The recipe with the id ${id} not found`)
        } else {
            res
                .status(200)
                .json(recipe)
        }
    } catch (error) {
        res
            .status(404)
            .send(error)
    }
});

router.post('/', async (req, res) => {
    let {
        name,
        image,
        steps,
        health_score,
        summary,
    } = req.body;
    try {
        if (name && image && steps && health_score && summary && req.body.diets) {
            const createRecipe = await Recipe.create({
                name: name,
                image: image,
                steps: steps,
                health_score: health_score,
                summary: summary,
            });
            
            const findDiet = await Diet.findAll({
                where: {
                    name: req.body.diets
                }
            });
            //const dietsArray = await findDiet.map(diet => diet.name);
            // createRecipe.addDiet(dietsArray);
            createRecipe.addDiet(findDiet);
            res.status(200).json(createRecipe)
        } else {
            res.status(404).send('Data needed to proceed is missing')
        }  
    } catch (error) {
        res
            .status(404)
            .json("The POST could not be done")
    }


})


module.exports = router