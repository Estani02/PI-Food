import React from 'react'
import { Link } from 'react-router-dom'
import s from "./LandingPage.module.css"

export default function LandingPage() {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.typewriter}>
          <h1 className={s.title}>WELCOME TO THE FOOD APP </h1>
          <div className={s.subtitle}>Proyect made by Estanislao Olmedo</div>
          <Link className={s.textDe} to="/home">
            <button className={s.btn}>Let's go</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  )
}
