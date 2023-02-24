
export default function validation({ name, summary, health_score, steps, image, diets }, recipe) {
    let error = {};
    let RegExpression = /^[a-zA-Z\s]*$/;

    //NAME
    if (!name) {
        error.name = "A name is required"
    }
    if (recipe.indexOf(name) !== -1) {
        error.name = "A recipe with that name is already existing"
    }
    if (!RegExpression.test(name)) {
        error.name = "Number and special character are not allowed"
    }
    if (name.length > 30) {
        error.name = "The name can't be longer than 30 characters"
    }

    //SUMMARY
    if (!summary) {
        error.summary = "A summary is required"
    }
    if (!RegExpression.test(summary)) {
        error.summary = "Number and special character are not allowed"
    }
    if (summary.length > 2300) {
        error.summary = "The summary can't be longer than 2300 characters"
    }

    //HEALTH SCORE
    if (!health_score) {
        error.health_score = "A health score is required"
    }
    if(health_score.length > 3){
        error.summary = "The health score can't be longer than 3 characters"
    }

    //STEPS
    if (!steps) {
        error.steps = "A steps is required"
    }
    if (steps.length > 2300) {
        error.steps = "The steps can't be longer than 4000 characters"
    }

    if (!RegExpression.test(steps)) {
        error.steps = "Number and special character are not allowed"
    }
    // //IMAGE
    // if(!image){
    //     error.image = "A image is required"
    // }
    //DIETS
    if (!diets.length) {
        error.diets = 'Must choose a diets'
    }
    return error
}
