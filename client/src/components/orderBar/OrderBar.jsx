import React from 'react'
import { useDispatch } from 'react-redux';
import { orderByAlphabetical, orderByOrigin } from '../../redux/actions';
import s from './OrderBar.module.css'

export default function OrderBar() {

  const dispatch = useDispatch();

  function handleChange(order){
    switch (order.target.value) {
      case "all":
        return dispatch(orderByOrigin(order.target.value))
      case "api":
        return dispatch(orderByOrigin(order.target.value))
      case "db":
        return dispatch(orderByOrigin(order.target.value))
      case "a-z":
        return dispatch(orderByAlphabetical(order.target.value))
      case "z-a":
        return dispatch(orderByAlphabetical(order.target.value))
      default:
        break;
    }
  }

  return (
    <div>
      <span>Order by </span>
      <select className={s.select} onChange={handleChange}>
        <option value={"a-z"}>A-Z</option>
        <option value={"z-a"}>Z-A</option>
      </select>
      <select className={s.select} onChange={handleChange}>
        <option value={"all"}>ALL</option>
        <option value={"api"}>Only api</option>
        <option value={"db"}>Only creted</option>
      </select>
    </div>
  )
}
