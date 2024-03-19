import path from "path";
import fs from "fs"; 
import matter from "matter"; 

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
            ...matterResult
        };
    });
}