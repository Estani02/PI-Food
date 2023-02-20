import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByDiet } from '../../redux/actions';
import s from './FilterBar.module.css'

export default function FilterBar() {

  const diets = useSelector(state => state.diets)
  //const recipes = useSelector(state => state.recipes)
  const dispatch = useDispatch();

  function handleChange(e){
    dispatch(filterByDiet("all"))
    dispatch(filterByDiet(e.target.value));
  }

  return (
    <div className={s.container}>
      <select onChange={handleChange} className={s.select}>
        <option value={"all"}>Select diet</option>
        {diets.map(diet => 
            <option value={diet.name} key={diet.name}>{diet.name}</option>
          )}
      </select>
    </div>
  )
}
