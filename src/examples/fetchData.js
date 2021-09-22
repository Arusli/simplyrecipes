import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getData = graphql`
query FirstQuery {
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

const FetchData = () => {
    // const data = useStaticQuery(getData);
    const {site:{info:{title}}} = useStaticQuery(getData);
    return (
        <div>
            {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
            <h2>Site Title: {title}</h2>
        </div>
    )
}

export default FetchData
