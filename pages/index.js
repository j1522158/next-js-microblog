import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/ Layout'
import Link from 'next/link'
import utilStyle from '../styles/utils.module.css'

export default function Home() {
  return (
  <Layout>
    <section className={utilStyle.headingMd}>
      <p>
        かけだしバックエンドエンジニア
      </p>
    </section>

<section>
  <h2>エンジニアブログ</h2>
  <div className={styles.grid}>
      <article>
        <Link href="/">
          <img src="/images/thumbnail01.jpg" 
            className={styles.thumbnailImage}
          />
        </Link>
        <Link legacyBehavior href="/">
          <a className={utilStyle.boldText}>
            ここに文字を入力
          </a>
        </Link>
        <br />
        <small className={utilStyle.ligthText}>
          2024-03-12
        </small>
      </article>
      <article>
        <Link href="/">
          <img src="/images/thumbnail01.jpg" 
            className={styles.thumbnailImage}
          />
        </Link>
        <Link legacyBehavior href="/">
          <a className={utilStyle.boldText}>
            ここに文字を入力
          </a>
        </Link>
        <br />
        <small className={utilStyle.ligthText}>
          2024-03-12
        </small>
      </article>
      <article>
        <Link href="/">
          <img src="/images/thumbnail01.jpg" 
            className={styles.thumbnailImage}
          />
        </Link>
        <Link legacyBehavior href="/">
          <a className={utilStyle.boldText}>
            ここに文字を入力
          </a>
        </Link>
        <br />
        <small className={utilStyle.ligthText}>
          2024-03-12
        </small>
      </article>
      <article>
        <Link href="/">
          <img src="/images/thumbnail01.jpg" 
            className={styles.thumbnailImage}
          />
        </Link>
        <Link legacyBehavior href="/">
          <a className={utilStyle.boldText}>
            ここに文字を入力
          </a>
        </Link>
        <br />
        <small className={utilStyle.ligthText}>
          2024-03-12
        </small>
      </article>
    </div>
</section>
  </Layout>
  );
}
