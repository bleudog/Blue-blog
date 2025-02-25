import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import process from 'process';

const blogDirectory = path.join(process.cwd(), 'posts/blog');
const POSTS = 7;

export function getBlogPosts() {
    const fileNames = fs.readdirSync(blogDirectory);

    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = [fileName.slice(0, 2), fileName.slice(3).replace(/\.md$/, '')];

        // Read markdown file as string
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return (allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })).slice(0, POSTS);
}