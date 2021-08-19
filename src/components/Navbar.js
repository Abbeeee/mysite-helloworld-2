import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Logo from '../images/logo.png'

export default function Navbar() {

    // If you want title instead of logo <------------
    // const data = useStaticQuery(graphql`
    //     query SiteInfo {
    //         site {
    //           siteMetadata {
    //             title
    //           }
    //         }
    //     }
    // `)
    // const { title } = data.site.siteMetadata

    return (
        <nav>
            <img src={Logo} alt="logo" className="logo" />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}
