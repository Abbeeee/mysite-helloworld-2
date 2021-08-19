import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Project from '../components/project'
import Layout from '../components/Layout'


export const query = graphql`
    query ProjectDetailsQuery($id: String!) {
      project: sanityProject(id: { eq: $id }) {
        id
        publishedAt
        title
        slug {
          current
        }
        categories {
          _id
          title
        }
        mainImage {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
        }
        _rawBody(resolveReferences: {maxDepth: 10})
      }
    }
`

const ProjectDetails = props => {
  const { data } = props
  const project = data && data.project

  return (
    <Layout>
      {project && <h1>{ project.title || 'Untitled' }</h1>}

      {project && <Project {...project} />}
    </Layout>
  )
}

export default ProjectDetails