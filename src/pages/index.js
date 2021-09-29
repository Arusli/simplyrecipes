import React from "react";
import Layout from '../components/Layout.js';
import { StaticImage } from "gatsby-plugin-image";
import FetchData from '../examples/fetchData';
import AllRecipes from "../components/AllRecipes.js";
import SEO from '../components/SEO';

export default function Home(props) {
  console.log('home props', props);
  return (
    <Layout>
        <SEO />
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
          <FetchData />
          <AllRecipes />
        </main>
        
    </Layout>
  )
}
