import React from 'react';
import Layout from '../components/Layout';
import {StaticImage} from 'gatsby-plugin-image';
import {Link, graphql} from 'gatsby';
import RecipesList from '../components/RecipesList';

const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
    return (
        <Layout>    
            <main className='page'>
                <section className='about-page'>
                    <article>
                        <h2>I'm baby coloring turkey.</h2>
                        <p>I'm baby chambray authentic gochujang. Yr butcher fingerstache small batch raw denim twee, flannel hoodie affogato edison bulb hammock deep v polaroid.</p>
                        <p>Actually kogi lo-fi lumbersexual, cornhole craft beer put a bird on it blog raclette. Pop-up cold-pressed gentrify hell of mixtape everyday carry.</p>
                        <Link to='/contact' className='btn'>
                            contact
                        </Link>
                    </article>
                    <StaticImage 
                    src='../assets/images/about.jpeg' 
                    alt='person pouring salt in bowl'
                    className='about-img'
                    placeholder='blurred'
                    />
                </section>
                <section className='featured-recipes'>
                    <h5>Look at this Awesomesauce</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
