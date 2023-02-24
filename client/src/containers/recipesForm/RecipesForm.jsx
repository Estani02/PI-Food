import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Pagination from '../../components/pagination/Pagination';
import s from './RecipesForm.module.css'

export default function RecipesForm() {

    const recipes = useSelector(state => state.temporal);

    //Pagination
    const [page, setPage] = useState(1);
    const [perPage] = useState(9);

    const onlyNightAllRecipe = recipes
        .slice(                                    //El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
            (page - 1) * perPage,                  //number start
            (page - 1) * perPage + perPage);       //number end

    const maxRecipes = Math.ceil(recipes.length / perPage); //Math.ceil()devuelve el entero mayor o igual más próximo a un número dado.

    return (
        <>
            { recipes.length === 0 ? (
                <div>
                    Recipe not found
                </div>
            )  : (
            <div className={s.conteinerAll}>
                <Link to='/create' className={s.link}>CREATE RECIPE </Link>
                <dl className={s.containerRecipes}>
                    {onlyNightAllRecipe.map((recipe) => //se renderiza cada recipe traido del server
                        <dd key={recipe.id} className={s.cardRecipe}>
                            <Link to={`/recipe/${recipe.title}`} className={s.link}>
                                <img src={recipe.imag} alt={recipe.title} className={s.imageRecipe} />
                            </Link>
                            <Link to={`/recipe/${recipe.title}`} className={s.link}>
                                <span>{recipe.title}</span>
                            </Link>
                        </dd>
                    )}
                </dl>
                <Pagination max={maxRecipes}  setPage={setPage} page={page}/>
            </div>
            )}
        </>
    )
}
