import { useRouter } from "next/router";
import Layout from "../../components/ Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyle from '../../styles/utils.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,  // fallback = false : 上記のpathsに含まれていないページは404 NotFoundとなる
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    const router = useRouter()
    if(router.isFallback) {
        return <div>読み込み中</div>
    }
    return (
    <Layout>
        <article>
            <h1 className={utilStyle.headingX1}>{postData.title}</h1>
            <div className={utilStyle.lightText}>{postData.date}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
        </article>
    </Layout>
    );
}