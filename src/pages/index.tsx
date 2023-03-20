import Image from 'next/image'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout title="&#12488;&#12516;">
      <div className="page home">
        <h1 className="title">&#12488;&#12516;</h1>
        <p className="description">a lazy guy who want to sleep and write code in isekai</p>
        <Image
          src="https://avatars.githubusercontent.com/u/53964388"
          alt="toya profile"
          width={250}
          height={250}
          priority
        />
        <Menu/>
        <Footer/>
      </div>
    </Layout>
  )
}
