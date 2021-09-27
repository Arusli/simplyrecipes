import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'

const Testing2 = (props) => {
    console.log('testing2 props', props);
    return (
        <Layout>
            <main className='page'>
                <Gallery />
            </main>
        </Layout>
    )
}

export default Testing2
