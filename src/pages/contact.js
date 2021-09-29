import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby';
import RecipesList from '../components/RecipesList';

const contact = ({data}) => {
    const recipes = data.allContentfulRecipe.nodes;
    return (
        <Layout>
            <main className='page'>
                <section className='contact-page'>
                    <article className='contact-info'>
                        <h1>Contact page</h1>
                        <h3>Want to get in touch?</h3>
                        <p>Craft beer twee seitan food truck aesthetic williamsburg, kitsch gluten-free cold-pressed church-key tbh. Chia ethical hella polaroid schlitz everyday carry. Neutra pug unicorn, fixie banjo live-edge chambray marfa hell of photo booth tote bag. Hoodie direct trade godard fashion axe, brunch single-origin coffee beard locavore bespoke swag keffiyeh la croix. Plaid shaman la croix fanny pack. Flexitarian sustainable shabby chic pinterest sartorial. Etsy tote bag next level gentrify la croix salvia tacos readymade kale chips locavore lumbersexual snackwave.</p>
                        <p>Dreamcatcher blog austin 8-bit fam bushwick enamel pin blue bottle venmo quinoa heirloom selvage ramps photo booth. Stumptown taiyaki lomo, asymmetrical street art man bun cred yr. Tofu schlitz biodiesel, pork belly freegan church-key shabby chic salvia chillwave. Taiyaki umami post-ironic ethical artisan photo booth vice waistcoat fixie etsy direct trade echo park dreamcatcher.</p>
                        <p>Paleo glossier kogi iceland put a bird on it, aesthetic direct trade knausgaard. Swag bespoke truffaut af, green juice brooklyn microdosing. Kale chips typewriter master cleanse, flannel pork belly farm-to-table man braid locavore green juice sriracha sustainable. DIY tofu williamsburg, kitsch intelligentsia cornhole roof party church-key gluten-free vinyl raw denim hell of farm-to-table.</p>
                    </article>
                    <article>
                        <form className='form contact-form' action="https://formspree.io/f/mdoyjkpo" method="POST">
                            <div className='form-row'>
                                <label htmlFor='name'>your name</label>
                                <input type='text' name='name' id='name' />
                            </div>
                            <div className='form-row'>
                                <label htmlFor='email'>your email</label>
                                <input type='text' name='email' id='email' />
                            </div>
                            <div className='form-row'>
                                <label htmlFor='message'>message</label>
                                <textarea name='message' id='message'></textarea>
                            </div>
                            <button type='submit' className='btn block'>submit</button>
                        </form>
                    </article>
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

export default contact
