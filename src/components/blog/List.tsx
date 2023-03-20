import * as React from 'react'
import { Post } from '../../interfaces'
import ListPost from './ListPost'

type Props = {
  posts: Post[]
}

const List = ({ posts }: Props) => (
  <div className="blog-list">
    {posts.map((post) => (
      <ListPost key={post.id} data={post} />
    ))}
  </div>
)

export default List
