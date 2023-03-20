import React from 'react'
import Link from 'next/link'

import { Post } from '../../interfaces'

type Props = {
  data: Post
}

const ListPost = ({ data }: Props) => (
  <Link href="/blog/[blogId]" as={`/blog/${data.id}`}>
    <h2>{data.title}</h2>
  </Link>
)

export default ListPost
