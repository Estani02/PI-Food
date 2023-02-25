import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDiets, postRecipe } from '../../redux/actions'
import s from './CreateRecipes.module.css'
import validation from './validation'

export default function CreateRecipes() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.allRecipes);
    const diets = useSelector(state => state.diets);

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: "",
        summary: "",
        health_score: "",
        steps: "",
        image: "",
        diets: []
    });

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    function handleSelect(e) {
        const options = e.target.value;
        if (!input.diets.includes(options)) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        } else {
            const option = [...input.diets];
            const index = option.indexOf(options);
            option.splice(index, 1);
            input.diets(option)
        }
    };


    function handelChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setError(validation(input, recipes));
    };

    function handleSubmit(e) {
        e.preventDefault();
        setError(validation(input, recipes));      
        if (!error) { 
            dispatch(postRecipe(input));
            alert("Your recipe has been created successfully");
            navigate('/home')
        } else {
            alert("Something went wrong. Please try again.");
        }
    };



    return (
        <div className={s.container}>
            <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
                <input
                    type='text'
                    placeholder='Name Recipes'
                    value={input.title}
                    name="name"
                    onChange={(e) => handelChange(e)}
                    required
                />
                {error.name ? <span>{error.name}</span> : undefined}

                <input
                    type='text'
                    placeholder='Summary'
                    value={input.summary}
                    onChange={(e) => handelChange(e)}
                    name="summary"
                    required
                />
                {error.summary ? <span>{error.summary}</span> : undefined}
                
                <input
                    type='number'
                    placeholder='Health Score'
                    value={input.health_score}
                    onChange={(e) => handelChange(e)}
                    name="health_score"
                    maxLength="3"
                    required
                />
                {error.health_score ? <span>{error.health_score}</span> : undefined}

                <input
                    type='text'
                    placeholder='Steps'
                    value={input.steps}
                    onChange={(e) => handelChange(e)}
                    name="steps"
                    required
                />
                {error.steps ? <span>{error.steps}</span> : undefined}

                <input
                    type='text'
                    placeholder='URL Image'
                    value={input.image}
                    onChange={(e) => handelChange(e)}
                    name="image"
                    required
                />
                {error.image ? <span>{error.image}</span> : undefined}

                <select
                    multiple
                    onChange={handleSelect}
                    className={s.select}
                >
                    <option disabled >Select diets</option>
                    {diets.map(diet =>
                        <option value={diet.name} key={diet.id}>
                            {diet.name[0].toUpperCase() + diet.name.slice(1)}
                        </option>
                    )}
                </select>
            </form>
            {error.diets ? <span>{error.diets}</span> : undefined}

            <button type='submit' onClick={handleSubmit}>Create</button>
        </div>
    )
}
