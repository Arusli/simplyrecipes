import React from "react";
import Layout from '../components/Layout.js';
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes.js";
import Seo from '../components/Seo';

export default function Home(props) {
  console.log('home props', props);
  return (
    <Layout>
        <Seo title='Home' />
        <main className='page'>
          <header className='hero'>
            <StaticImage 
            src='../assets/images/main.jpeg' 
            alt='eggs' 
            className='hero-img'
            placeholder='tracedSVG'
            layout='fullWidth'
            />
            <div className='hero-container'>
              <div className='hero-text'>
                <h1>simply recipes</h1>
                <h4>no fluff, just recipes</h4>
              </div>
            </div>
          </header>
          <AllRecipes />
        </main>        
    </Layout>
  )
}
