import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'
import getConfig from 'next/config'

export const getServerSideProps = async (ctx) => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

// export const getServerSideProps = async (ctx) => {
//   const response = await fetch('http://localhost:3000/api/posts')
//   const json = await response.json()
//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   }
// }

// export const getStaticProps = async (ctx) => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     },
//   }
// }

export default function Home({ allPostsData }) {
  // Only holds serverRuntimeConfig and publicRuntimeConfig
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
  // Will only be available on the server-side
  console.log(serverRuntimeConfig.mySecret)
  // Will be available on both server-side and client-side
  console.log(publicRuntimeConfig.staticFolder)
  // const [allPostsData, setAllPostsData] = useState([])
  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then((res) => res.json())
  //     .then((data) => setAllPostsData(data.allPostsData))
  // }, [])
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I love coding {process.env.customKey}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
