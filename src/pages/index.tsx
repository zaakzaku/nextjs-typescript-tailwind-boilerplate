import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="m-4">Hello World</p>
        <div className="flex justify-left lg:justify-center ">
          <button className="px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Button
          </button>
          <button className="px-6 py-2 ml-4 font-semibold text-black transition duration-500 ease-in-out transform border rounded-lg shadow-xl hover:bg-wickedgray-500 hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            Button
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default Home
