import * as React from 'react'
import { Link } from 'gatsby'

import { hightlightColor } from '../common'


const linkStyles = {
  textDecoration: 'none',
}

const articleStyles = ({hover}) => ({
  backgroundColor: hover ? '#FFF2FB': '',
  padding: '8px',
  borderRadius: '4px',
  cursor: 'pointer',
})

const h2AccentStyles = {
  color: hightlightColor,
  margin: '0px 0px 10px 0px',
}

const publishedDateStyles = {
  color: 'grey',
  marginTop: '0px',
  marginBottom: '0px',
}

const Post = ({ mdxData }) => {
  const [hover, setHover] = React.useState(false)

  console.log(h2AccentStyles)

  return (
    <Link to={`/blog/${mdxData.slug}`} style={linkStyles}>
      <article style={articleStyles({hover})}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
        <h2 style={h2AccentStyles}>
          {mdxData.frontmatter.title}
        </h2>
        <p style={publishedDateStyles}>
          {mdxData.frontmatter.publishedDate}
        </p>
      </article>
    </Link>
  )
}

export default Post