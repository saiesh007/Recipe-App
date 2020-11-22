import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'

const App = () => {

  const App_ID ="cae496c2"
  const App_key ="85b2427191058dabb0139f6afbbf695c" 

  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('chicken')

  useEffect( ()=> {
    getRecipes()
  
  },[query])                                     //this update only when we submit

  const getRecipes = async () =>{
    const res= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}`)
    const recipedata= await res.json()
    setRecipes(recipedata.hits)
    console.log(recipedata)
  }
  
  const updateSearch = event => {
   setSearch(event.target.value)

  }

  const getSearch = event => {
    event.preventDefault()       //to prevent page refresh 
    setQuery(search)             //setting to get finished text
    setSearch('')                //this to clear textbox once searched
  }

  return (
    <div className="App">
    <h1 className="header">Recipe App</h1>
     <form onSubmit={getSearch} className="search_form">
       <input className="search_bar" type="text" value={search} onChange={updateSearch}/>
       <button className="search_button" type="submit">Search</button>
     </form>

      <div className="recipes" >
      {recipes.map(recipe => (
        <Recipe  
                key={recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>

  );
}
export default App;

//taking state and passing down to props 31 which is then passed to component
