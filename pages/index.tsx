import Head from 'next/head'
import Main from '../components/Main'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Main/>
    
    </div>
  )
}
