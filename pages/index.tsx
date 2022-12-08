import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Form } from '../src/components/form'
import { CookingDictionary } from '../src/domain/cookingDictionary'
import { fetchCookingDictionary } from "../src/adapters/cookingAdapter"
import { AdobeFont } from '../src/components/adobeFont'

type Props = {
  list: CookingDictionary
}

const Home: NextPage<Props> = ({list}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sakuna Menu Generator</title>
        <meta name="description" content="天穂のサクナヒメ - 献立選出" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdobeFont kitId='hfd7jpz' scriptTimeout={3000} async={true} />

      <main className={styles.main}>
        <Form list={list}></Form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
  props: {
    list: fetchCookingDictionary()
  }
}
)

export default Home
