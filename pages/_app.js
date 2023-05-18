import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '../styles/app.css'
import Navigation from '../components/Navigation';


export default function MyApp({ Component, pageProps }) {

    return (<div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
            <Navigation />
            {<Component {...pageProps} />}
        </div>


    </div>)

}