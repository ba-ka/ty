import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import { Post } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/blog/ListDetail'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'

type Props = {
  post?: Post
  errors?: string
}

const StaticPropsDetail = ({ post, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="blog">
        <p>
          <span style={{ color: 'red' }}>error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={post && post.title ? post.title : "blog"}>
      <div className="page blog-detail">
        <div className="banner">
          <Image
              src="/image/reading.gif"
              alt="blog"
              width={100}
              height={100}
              priority
          />
        </div>
        <Menu/>
        <div className="content">
          {post &&<ListDetail post={post}/>}
        </div>
        <Footer/>
      </div>
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://c.ba-ka.org/api/trpc/user.profile,post.feed?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22id%22%3A%22cleromxry000608mhf0j36hyy%22%7D%7D%2C%221%22%3A%7B%22json%22%3A%7B%22take%22%3A20%2C%22skip%22%3Anull%2C%22authorId%22%3A%22cleromxry000608mhf0j36hyy%22%2C%22profileFeed%22%3Atrue%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22skip%22%3A%5B%22undefined%22%5D%7D%7D%7D%7D')
  const postsJson = await res.json()
  const posts: Post[] = postsJson[1].result.data.json.posts

  const paths = posts.map((post) => ({
    params: { blogId: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.blogId
    const res = await fetch(`https://c.ba-ka.org/api/trpc/post.detail?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22id%22%3A${id}%7D%7D%7D`)
    const postJson = await res.json()
    const post = postJson[0].result.data.json

    return { props: { post } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
