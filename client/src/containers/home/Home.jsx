import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RecipesForm from '../recipesForm/RecipesForm'
import { getAllRecipes, getDiets } from '../../redux/actions'
import OrderBar from '../../components/orderBar/OrderBar'
import s from './Home.module.css'
import FilterBar from '../../components/filterBar/FilterBar'

export default function Home() {

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.temporal);

    
    useEffect(()=> {
        dispatch(getAllRecipes())
        dispatch(getDiets())
      }, [dispatch])

  return (
    <div className={recipes.code ? s.containerError : s.containerHome}>
      <section className={recipes.code ? s.sectionError : s.section}>
        <button onClick={()=>dispatch(getAllRecipes())}>Reset all</button>
        <OrderBar />
        <FilterBar />
      </section>
        <RecipesForm />
        <div></div>
    </div>
  )
}
