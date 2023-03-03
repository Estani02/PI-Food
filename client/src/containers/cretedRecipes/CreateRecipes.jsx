import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDiets, postRecipe } from '../../redux/actions'
import s from './CreateRecipes.module.css'
import validation from './validation'
import chefCreate from '../../utils/chefCreate.png'

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
        // console.log(input.diets);
    }, [dispatch])

    function handleSelect(e) {
        if (e.target.checked) {
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        } else if (!e.target.checked) {
            setInput({
                ...input,
                diets: input.diets.filter(d => d !== e.target.value)
            })
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
            <h1>CREATE YOUR OWN RECIPE</h1>
            <div className={s.containerInfo}>
                <img src={chefCreate} alt="chef create" className={s.img} />
                <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
                    <input
                        type='text'
                        placeholder='Name Recipes'
                        value={input.title}
                        name="name"
                        onChange={(e) => handelChange(e)}
                        required
                        className={s.name}
                    />
                    {error.name ? <span>*{error.name}</span> : undefined}

                    <textarea
                        type='text'
                        placeholder='Summary'
                        value={input.summary}
                        onChange={(e) => handelChange(e)}
                        name="summary"
                        required
                        className={s.summary}
                    />
                    {error.summary ? <span>*{error.summary}</span> : undefined}

                    <input
                        type='number'
                        placeholder='Health Score'
                        value={input.health_score}
                        onChange={(e) => handelChange(e)}
                        name="health_score"
                        maxLength="3"
                        required
                        className={s.health}
                    />
                    {error.health_score ? <span>*{error.health_score}</span> : undefined}

                    <textarea
                        type='text'
                        placeholder='Steps'
                        value={input.steps}
                        onChange={(e) => handelChange(e)}
                        name="steps"
                        required
                        className={s.steps}
                    />
                    {error.steps ? <span>*{error.steps}</span> : undefined}

                    <input
                        type='text'
                        placeholder='URL Image'
                        value={input.image}
                        onChange={(e) => handelChange(e)}
                        name="image"
                        required
                        className={s.imgUrl}
                    />
                    {error.image ? <span>*{error.image}</span> : undefined}

                    <div className={s.containerDiets}>
                        {
                            diets.map(diet => (
                                <label key={diet.name} htmlFor={diet.name}>
                                    <div className={s.byDiet}>
                                        <input
                                            type="checkbox"
                                            id={diet.name}
                                            value={diet.name}
                                            onChange={(e) => handleSelect(e)}
                                        />
                                        <div className={s.circle} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2a852a7a' }}
                                        ><img src={`images/diets/${diet.name}.png`} alt={diet.name} height="30px" /></div>
                                        <div style={{ width: '8px' }}></div>
                                        {diet.name[0].toUpperCase() + diet.name.slice(1)}
                                    </div>
                                </label>
                            ))
                        }
                    </div>

                    {error.diets ? <span>{error.diets}</span> : undefined}
                    <button type='submit' onClick={handleSubmit}>Create</button>
                </form>
            </div>
        </div>
    )
}
