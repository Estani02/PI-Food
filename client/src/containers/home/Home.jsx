import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RecipesForm from '../recipesForm/RecipesForm'
import SearchBar from '../../components/searchBar/SearchBar'
import { getAllRecipes, getDiets } from '../../redux/actions'
import FilterBar from '../../components/filterBar/FilterBar'
import OrderBar from '../../components/orderBar/OrderBar'

export default function Home() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllRecipes())
        dispatch(getDiets())
      }, [dispatch])
  return (
    <div>
        RECIPES
        <SearchBar />
        <OrderBar />
        <FilterBar />
        <RecipesForm />
    </div>
  )
}
