import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllRecipes, getSearchRecipes } from '../../redux/actions';
import s from './SearchBar.module.css'

export default function SearchBar() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function handleChange(e){
        setInput(e.target.value);
        dispatch(getSearchRecipes(input))
        if(input.length === 1){
            dispatch(getAllRecipes())
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
