import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Pagination from '../../components/pagination/Pagination'
import s from './RecipesForm.module.css'
import sDetail from '../detailRecipe/DetailRecipe.module.css'
import chefError from '../../utils/chefError.png'
import { getAllRecipes } from '../../redux/actions'

export default function RecipesForm() {

    const recipes = useSelector(state => state.temporal);
    // const recipes = [];
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllRecipes("loading"))
        dispatch(getAllRecipes())
    }, [dispatch])

    //Pagination
    const [page, setPage] = useState(1);
    const [perPage] = useState(9);

    let onlyNightAllRecipe = undefined;
    let maxRecipes = undefined;
    if (!recipes.code) {
        onlyNightAllRecipe = recipes
            .slice(                                    //El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
                (page - 1) * perPage,                  //number start
                (page - 1) * perPage + perPage);       //number end

        maxRecipes = Math.ceil(recipes.length / perPage); //Math.ceil()devuelve el entero mayor o igual más próximo a un número dado.
    }

    return (
        <>
            {recipes.code ? (
                <div className={s.containerError}>
                    <img src={chefError} alt='error page' />
                    <h1>Oops... something went wrong, come back in a bit</h1>
                </div>
            ) : recipes[0] === "not found" ? (
                <div className={s.containerEmpty}>
                    <h1>Recipe not found</h1>
                </div>
            ) : recipes.length === 0 ? (
                <div className={sDetail.conteneinerLoading}>
                    <div className={sDetail.loader} id="loader">Loading...</div>
                </div>
            ) : (
                <div className={s.conteinerAll}>
                    <dl className={s.containerRecipes}>
                        {onlyNightAllRecipe.map((recipe) => //se renderiza cada recipe traido del server
                            <dd key={recipe.id} className={s.cardRecipe}>
                                <Link to={`/recipe/${recipe.title}`} className={s.link}>
                                    <div className={s.cardContImg}>
                                        <img src={recipe.imag} alt={recipe.title} className={s.cardImg} />
                                    </div>
                                    <div className={s.cardInfo}>
                                        <span className={s.cardCategory}>Recipe</span>
                                        <h3 className={s.cardTitle}>{recipe.title}</h3>
                                        <span className={s.cardDiets}>Diets: {recipe.diets.join(', ')}</span>
                                    </div>
                                </Link>
                            </dd>
                        )}
                    </dl>
                    <Pagination max={maxRecipes} setPage={setPage} page={page} />
                </div>
            )}
        </>
    )
}
