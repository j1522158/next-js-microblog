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

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

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
    {allPostsData.map(({id, title, date, thumbnail}) => (
      <article key={id}>
      <Link href={`/posts/${id}`}> 
        <img 
          src={`${thumbnail}`} 
          className={styles.thumbnailImage}
        />
      </Link>
      <Link legacyBehavior href={`/posts/${id}`}>
        <a className={utilStyle.boldText}>{title}</a>
      </Link>
      <br />
      <small className={utilStyle.ligthText}>{date}</small>
    </article>
    ))}
    </div>
</section>
  </Layout>
  );
}
