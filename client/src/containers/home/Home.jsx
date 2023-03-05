import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RecipesForm from '../recipesForm/RecipesForm'
import { getDiets } from '../../redux/actions'
import OrderBar from '../../components/orderBar/OrderBar'
import s from './Home.module.css'
import FilterBar from '../../components/filterBar/FilterBar'

export default function Home() {

  const dispatch = useDispatch();
  let recipes = useSelector(state => state.temporal);

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  return (
    <div className={recipes.code ? s.containerError : s.containerHome}>
      <section className={recipes.code ? s.sectionError : s.section}>
        <a className={s.link} href="/home">Clear all</a>
        <OrderBar />
        <FilterBar />
      </section>
      <RecipesForm />
      <div></div>
    </div>
  )
}
