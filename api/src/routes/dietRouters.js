const { Router } = require('express');
const { getDietsApi } = require('../controllers/dietsController');

const router = Router();

router.get('/', async (req, res) => {
    const diets = await getDietsApi();
    res.status(200).json(diets)
})

module.exports = router