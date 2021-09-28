import React from 'react'
import {graphql} from 'gatsby'

const Testing = ({data}) => {
    // console.log(props);
    console.log(data);
    const author = data.site.info.author;
    // const author = 'whatever'
    return (
        <div>
            <h2>Author: {author}</h2>
        </div>
    )
}

export const query = graphql`
query {
    site {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`

export default Testing
