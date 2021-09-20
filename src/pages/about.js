import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import {StaticImage} from 'gatsby-plugin-image';

const About = () => {
    return (
        <Layout>    
            <main className='page'>
                <section className='about-page'>
                    <article>
                        <h2>I'm baby coloring turkey.</h2>
                        <p>I'm baby chambray authentic gochujang, intelligentsia truffaut ugh fanny pack mixtape. Yr butcher fingerstache small batch raw denim twee, flannel hoodie affogato edison bulb hammock deep v polaroid.</p>
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
            </main>
        </Layout>
    )
}

export default About
