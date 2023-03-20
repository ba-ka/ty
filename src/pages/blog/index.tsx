import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Post } from '../../interfaces'
import List from '../../components/blog/List'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Layout from '@/components/Layout'

type Props = {
  posts: Post[]
  count: number
}

const WithStaticProps = ({ posts }: Props) => (
    <Layout title="blog">
        <div className="page blog">
            <div className="banner">
                <Image
                    src="/image/default.gif"
                    alt="blog"
                    fill
                    sizes="100%, 100%, 100%"
                    priority
                />
            </div>
            <Menu/>
            <div className="content">
                <h1 className="title">blog</h1>
                <List posts={posts} />
            </div>
            <Footer/>
        </div>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://c.ba-ka.org/api/trpc/user.profile,post.feed?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22id%22%3A%22cleromxry000608mhf0j36hyy%22%7D%7D%2C%221%22%3A%7B%22json%22%3A%7B%22take%22%3A20%2C%22skip%22%3Anull%2C%22authorId%22%3A%22cleromxry000608mhf0j36hyy%22%2C%22profileFeed%22%3Atrue%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22skip%22%3A%5B%22undefined%22%5D%7D%7D%7D%7D')
  const postsJson = await res.json()
  const posts = postsJson[1].result.data.json.posts
  const count = postsJson[1].result.data.json.postCount

  return { props: { posts, count } }
}

export default WithStaticProps
