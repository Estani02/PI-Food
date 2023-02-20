import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RecipesForm from '../recipesForm/RecipesForm'
import SearchBar from '../../components/searchBar/SearchBar'
import { getAllRecipes } from '../../redux/actions'

export default function Home() {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllRecipes())
    }, [dispatch])
  return (
    <div>
        RECIPES
        <SearchBar />
        <RecipesForm />
    </div>
  )
}
