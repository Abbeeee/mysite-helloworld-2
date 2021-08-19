import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import * as projectStyles from '../styles/projects.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function home({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
 
  
  return (
      <Layout>
          <section className={styles.hero}>
              <h1>Design & Development</h1>
              <p>My name is Albin, feel free to welcome me at { contact }<br></br>Have a look at my projects ↓</p>
              <Link className={styles.btn} to="/projects">My Projects</Link>
          </section>
      </Layout>
  )
}

export const query = graphql`
  query Logo {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH,
          placeholder: BLURRED,
          formats: [AUTO, WEBP]
        )
      }
    }
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
              childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH,
                    placeholder: BLURRED,
                    formats: [AUTO, WEBP]
                )
              }
            }
          }
          id
        }
      }
      contact: site {
        siteMetadata {
          contact
        }
      }
  }
`