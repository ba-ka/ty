export type Post = {
    id: number
    title: string
    contentHtml: string
    createdAt: string
    hidden: false
    author: User
    likedBy: User[]
    _count: {
        comment: number
    }
}

export type User = {
    id: string
    name: string
    image: string
}
  