import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RecipesForm from '../../components/recipesForm/RecipesForm'
import { getAllRecipes } from '../../redux/actions'

export default function Home() {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllRecipes())
    }, [dispatch])
  return (
    <div>
        RECIPES
        <RecipesForm />
    </div>
  )
}
