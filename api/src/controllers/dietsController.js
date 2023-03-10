const {Diet} = require('../db.js')
const axios = require('axios');
const {API_KEY} = process.env;
const numRecipe = 45;

const getAllDietsApi = async () => {
    const apiInfo = await axios(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);
    const diets = await apiInfo.data.results.map((recipe) => {
        return recipe.diets
    });
    diets.push("vegetarian")
    const newArray = [].concat(... await diets);
    const uniquesDiets = [... new Set(newArray)].map((diet, index) => ({id: index, name: diet}) ) //[...new Set] Devuelve un nuevo objeto iterador que genera los values de cada elemento del objeto Set en el orden de inserción
    return uniquesDiets
};

const addDietsDb = async () => {
    try {
        const allDiets = await Diet.findAll();
        //console.log( 'Todos las dietas: ', allDiets,);
        if(allDiets.length > 0) {
            console.log('ya se crearon las dietas');
            return
        }
        const resDiets = await getAllDietsApi()
        //console.log('Diets: ', resDiets);
        resDiets.map(e => {
            Diet.create({
                id: e.id,
                name: e.name
            })
        })

    } catch (error) {
        console.log("se acabo los request de la api")
    }
};

addDietsDb()

const getDietsApi = async () => {
    const results = await Diet.findAll();
    return results
};

module.exports = {getDietsApi}