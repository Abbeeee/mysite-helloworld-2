import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function projects({ data }) {
  
    const projects = data.allSanityProject.nodes

    return (
        <Layout>
            <div className={styles.projects}>
                <h1>Projects</h1>
                <div className={styles.projectsGrid}>
                    {projects.map(project => (
                      <div className={styles.gridItem} key={project.id}>
                        <Link to={`/project/${project.slug.current}`}>
                                <GatsbyImage image={getImage(project.mainImage.asset.gatsbyImageData)} alt="Logo" />
                                <h3>{ project.title }</h3>
                                <p>{ project.categories.title }</p>
                        </Link>
                      </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
    query ProjectsPage {
      allSanityProject {
        nodes {
          id
          title
          slug {
            current
          }
          categories {
            title
          }
          mainImage {
            asset {
              gatsbyImageData(
                layout: FULL_WIDTH,
                placeholder: BLURRED,
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
`
