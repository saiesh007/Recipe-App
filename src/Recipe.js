import React from 'react'
import style from './recipe.module.css'
//deconstrcution is done by putting in curly braces
//we are passing props from App.js overhere
const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p><b>Calories:</b> {calories}</p>
            <p><b>Ingredients</b></p>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img className="img" src={image} alt="recipe image" />
        </div>

    )

}

export default Recipe