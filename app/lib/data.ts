import { unstable_noStore as noStore } from 'next/cache';

export async function GetArticles () {
    noStore()

    try {
    
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
    
        return posts;
        
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
      }
}