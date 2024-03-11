import path from "path";
import fs from "fs";
import matter from "matter"; 

const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータ取得
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileNames) => {
        const id = fileNames.replace(/\.md$/, ""); //ファイル名(id)

        //mdファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileNames);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult
        };
    });
}