import path from "path";
import fs from "fs"; 
import matter from "gray-matter"; 
import { remark } from "remark";
import html from "remark-html";

// process.pwd(): カレントディレクトリ
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータ取得
export function getPostsData() {
    // オブジェクトの配列で保持
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileNames) => {
        const id = fileNames.replace(/\.md$/, ""); //ファイル名(拡張子除く)

        //mdファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileNames);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // fileContentsをオブジェクトの配列として保持
        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data
        };
    });
    return allPostsData;
}

// getStaticPathでreturnで使うpathを取得する
// https://nextjs.org/docs/pages/api-reference/functions/get-static-paths
export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });

    /* getStaticPathを用いる際のオブジェクト
      [
        {
            params: {
                id: "ssg-ssr"
            }
        },
        {
            params: {
                id: "next-react"
            }
        }
      ]
     */
}

// idに基づいてブログ投稿データを返す
export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);
    
    const blogContent = await remark().use(html).process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    };
}