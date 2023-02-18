import React from 'react'
import { Link } from 'react-router-dom'
//import s from "./LandingPage.module.css"

export default function LandingPage() {
  return (
    <div>
        <h1>Welcome to the FOOD WEB</h1>
        <div>
            <Link to='/home'>
                <span>Let`s go</span>
            </Link>
        </div>
    </div>
  )
}
