import { Button } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Form } from '../src/components/form'
import { CookingInfo } from '../src/domain/entities/cookingInfo'
import { cookingInfoAdapter } from '../src/adapters/cookingInfoAdapter'
import { fetchCookingInfo } from '../src/useCases/fetchCookingInfo'

type Props = {
  cooking: ReadonlyArray<CookingInfo>
}

const Home: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sakuna Menu Generator</title>
        <meta name="description" content="天穂のサクナヒメ - 献立選出" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Form></Form>
        <Button variant="contained" onClick={e => console.log(props.cooking)}>選出</Button>
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

export const getStaticProps: GetStaticProps<Props> = async () => {

  return {
    props: {
      cooking: fetchCookingInfo(cookingInfoAdapter())
    }
  }
}

export default Home