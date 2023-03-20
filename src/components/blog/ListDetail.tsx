import * as React from 'react'

import { Post } from '../../interfaces'

type ListDetailProps = {
  post: Post
}

const ListDetail = ({ post }: ListDetailProps) => (
  <div>
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.contentHtml  }}></div>
  </div>
)

export default ListDetail
