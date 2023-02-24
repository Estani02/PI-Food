import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiets, postRecipe } from '../../redux/actions'
import s from './CreateRecipes.module.css'

export default function CreateRecipes() {

    const dispatch = useDispatch();
    //const [selectedOptions, setSelectedOptions] = useState([]);
    const [input, setInput] = useState({
        name: "",
        summary:"",
        health_score:"",
        steps:"",
        image:"",
        diets:[]
    })

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    const diets = useSelector(state => state.diets);

    function handleSelect(e) {
        const options = e.target.value;
        if(!input.diets.includes(options)){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
            //console.log(input.diets);
        } else {
            const option = [...input.diets];
            const index = option.indexOf(options);
            option.splice(index, 1);
            input.diets(option)
            //console.log(input.diets);
        }
    }

    
    function handelChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        try {
            dispatch(postRecipe(input));
            setInput({
                name: "",
                summary:"",
                health_score:"",
                steps:"",
                image:"",
                diets:[]
            })
            alert("It was created successfully");
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className={s.container}>
            <form onSubmit={(e)=>handleSubmit(e)} className={s.form}>
                <input 
                    type='text' 
                    placeholder='Name Recipes'
                    value={input.title}
                    name="name"
                    onChange={(e)=>handelChange(e)} 
                />
                <input 
                    type='text' 
                    placeholder='Summary'
                    value={input.summary} 
                    onChange={(e)=>handelChange(e)} 
                    name="summary"
                />
                <input 
                    type='number' 
                    placeholder='Health Score'
                    value={input.health_score} 
                    onChange={(e)=>handelChange(e)} 
                    name="health_score"
                />
                <input 
                    type='text' 
                    placeholder='Steps'
                    value={input.steps} 
                    onChange={(e)=>handelChange(e)} 
                    name="steps"
                />
                <input 
                    type='text' 
                    placeholder='URL Image'
                    value={input.image} 
                    onChange={(e)=>handelChange(e)} 
                    name="image"
                />
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
            <button type='submit' onClick={(e) => handleSubmit(e)}>Create</button>
        </div>
    )
}
