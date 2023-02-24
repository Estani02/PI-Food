import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllRecipes, getSearchRecipes } from '../../redux/actions'
import s from './SearchBar.module.css'

export default function SearchBar() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function handleChange(e){
        setInput(e.target.value);
        if(input.trim().length <= 1){           //cuadno el input esta vacio(trim elimina los espacios vacios)
            dispatch(getAllRecipes())
        } else {
            dispatch(getSearchRecipes(input))   //cuando el input tien algo
        }
    };

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getSearchRecipes(input))
        setInput('')
    }

  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
        <input 
            type='text' 
            onChange={(e)=> handleChange(e)}
            value={input}
            placeholder="Search recipe"
            className={s.inputText}
            required
            />
    </form>
  )
}
