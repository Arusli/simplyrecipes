import React from 'react'
import {graphql} from 'gatsby'

const Testing = ({data}) => {
    const author = data.site.info.author;
    return (
        <div>
            <h2>Author: {author}</h2>
        </div>
    )
}

export const data = graphql`
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
