import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../../components/searchBar/SearchBar'
import s from './Nav.module.css'
import linkedin from '../../utils/linkedinIcon.png'
import git from '../../utils/githubIcon.svg.png'

export default function Nav() {
    return (
        <nav className={s.contenedor}>
            <ul className={s.subcontenedor}>
                <li>PI-Foods Olmedo Estanislao</li>
                <li><SearchBar /></li>
                <div>
                    <li><NavLink to='/home' className={s.link}>Home</NavLink></li>
                    <li><NavLink to='/create' className={s.link}>Create recipe</NavLink></li>
                    <li><NavLink to='https://ar.linkedin.com/in/estanislao-olmedo-208510247?original_referer=https%3A%2F%2Fwww.google.com%2F'><img src={linkedin} alt="Linkedink" height="30px" /></NavLink></li>
                    <li><NavLink to='https://github.com/Estani02'><img src={git} alt="Git Hub" height="30px" /></NavLink></li>
                </div>
            </ul>
        </nav>
    )
}
