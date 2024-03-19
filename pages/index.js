import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/ Layout'
import Link from 'next/link'
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'

// SSGの場合
// ビルド時にデータを取得して、そのデータを元に静的なHTMLページを生成する
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, date thunmbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
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
