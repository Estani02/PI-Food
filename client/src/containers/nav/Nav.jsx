import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../../components/searchBar/SearchBar'
import s from './Nav.module.css'

export default function Nav() {
    return (
        <nav className={s.contenedor}>
            <ul className={s.subcontenedor}>
                <li>PI-Foods Olmedo Estanislao</li>
                <li><SearchBar /></li>
                <div>
                    <li><NavLink to='/home' className={s.link}>Home</NavLink></li>
                    <li><NavLink to='/create' className={s.link}>Create recipe</NavLink></li>
                    <li><NavLink to='/about' className={s.link}>About</NavLink></li>
                </div>
            </ul>
        </nav>
    )
}
