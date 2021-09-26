import React from 'react'
import {Link} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

const RecipesList = ({recipes=[]}) => {
    return (
        <div className='recipes-list'>
            {recipes.map((recipe) => {
                const {id, title, image, prepTime, cookTime} = recipe;
                const pathToImage = getImage(image);
                console.log(recipe)
                return (
                    <Link key={id} to={`/${title}`} className='recipe'>
                        <GatsbyImage 
                        image={pathToImage} 
                        className='recipe-img' 
                        alt='title' 
                        />
                        <h5>{title}</h5>
                        <p>Prep: {prepTime}m | Cook: {cookTime}m</p>
                        <p></p>

                    </Link>
                )
            })}
        </div>
    )
}

export default RecipesList