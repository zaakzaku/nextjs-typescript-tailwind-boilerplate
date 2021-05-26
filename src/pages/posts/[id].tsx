import Layout from '../../components/layout'
import Head from 'next/head'
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>title</title>
      </Head>
      <article>
        <p>detail</p>
      </article>
    </Layout>
  )
}
