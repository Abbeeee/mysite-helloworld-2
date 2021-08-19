import React from 'react'
import { Link } from 'gatsby'

import { buildImageObj } from '../library/helpers'
import { imageUrlFor } from '../library/image-url'
import * as styles from '../styles/project.module.css'

import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';

const urlFor = source =>
  urlBuilder({ projectId: "ncwqjk2t", dataset: "production" }).image(source);

const serializer = {
  types: {
    mainImage: props => (
      <figure className={styles.secondaryImage}>
        <img
          src={imageUrlFor(buildImageObj(props.node.asset))
            .width(200)
            .height(Math.floor((9 / 16) * 200))
            .fit('crop')
            .url()}
          alt={props.node.alt}
        />

        <figcaption>{props.node.caption}</figcaption>
      </figure>
    )
  }
};


function Project (props) {
  const { _rawBody, title, categories, mainImage, publishedAt } = props
  return (
      <div>
        {props.mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(940)
                .height(Math.floor((9 / 16) * 940))
                .fit('crop')
                .url()}
            />
          </div>
        )}
        <section className={styles.grid}>
          <main>
            {_rawBody && <PortableText blocks={_rawBody || []} serializers={serializer} />}
          </main>
          <aside>
            <h2>Stack:</h2>
            <ul>
              {categories.map(category => (
                <li key={category._id}>{category.title}</li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
  )
}

export default Project