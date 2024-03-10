import Head from "next/head";
import styles from "./Layout.module.css";

const name = "Shimizu Junya";
export const siteTitle = "Next.js blog";

function  Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <img src="/images/profile.png"></img>
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default  Layout;