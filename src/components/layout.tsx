import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
            header right here
          </h2>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
