import React from 'react'
import { useRouter } from 'next/router';
import fs from 'fs';

export default function BlogPost({allPostsData}) {
    console.log({allPostsData});
    const router = useRouter();
    console.log(router.query.slug );
    return (
        <div className="text-center">
            <h1>Blog post: {allPostsData.title}</h1>
            <p>{allPostsData.desc}</p>
        </div>
    )
}
export async function getStaticPaths() {
    return {
      paths: [{ params: { slug: 'html' } }, { params: { slug: 'react' } },  { params: { slug: 'next' } }],
      fallback: 'blocking', // can also be true or 'blocking'
    };
}
export async function getStaticProps(context) {
    console.log({context});
    // const fullPath = path.join('data', (context.query.slug+'.json'));
    try{
        const fileContents = fs.readFileSync(`data/${context.params.slug}.json`, 'utf8');
        return {
            props: {allPostsData:JSON.parse(fileContents)},revalidate: 10, // will be passed to the page component as props
          };
    }catch(err){
        return{
            props: {allPostsData:{}},
        }
    }
  
}
