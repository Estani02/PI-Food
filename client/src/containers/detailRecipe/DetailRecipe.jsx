import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetailRecipe } from '../../redux/actions';
import s from './DetailRecipe.module.css'

export default function DetailRecipe() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.detailRecipe);
    
    useEffect(() => {
        dispatch(getDetailRecipe(id))
    }, [dispatch, id])
    console.log(recipe);

    function removeLinks(html) {
        // Crea un elemento div temporal
        const temp = document.createElement("div");
        // Asigna la cadena de texto HTML al contenido del elemento div
        temp.innerHTML = html;
        // Obtiene todas las etiquetas a del elemento div
        const links = temp.getElementsByTagName("a");
        // Recorre todas las etiquetas a y elimina el atributo href
        for (let i = 0; i < links.length; i++) {
            links[i].removeAttribute("href");
        }
        // Devuelve el contenido del elemento div sin los enlaces
        return temp.innerHTML;
    }
    const htmlWithoutLinks = removeLinks(recipe.summary);


    return (
        <div className={s.container}>
            <h1>{recipe.title}</h1>
            <img src={recipe.imag} alt={recipe.title} />
            <div>
                <h4>Summary</h4>
                <p dangerouslySetInnerHTML={{ __html: htmlWithoutLinks }}></p>
            </div>
            <div>
                <p>{recipe.healthScore}</p>
            </div>
            <ul>
                {recipe.diets?.map(diet => <li>{diet.toUpperCase()}</li>)}
            </ul>
            <section>
                {recipe.steps?.map((s, index) => <p key={index}>{index + 1}-{s}</p>)}
            </section>
        </div>
    )
}
