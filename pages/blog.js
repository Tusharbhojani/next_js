import React from 'react'
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function blog({allPostsData}) {
    console.log({allPostsData});
    return (
        <div className="text-center">
            <h1>My first Blog....</h1>
            {allPostsData.map(({id,data})=>{
                return (
                    <div key={id} className="border ">
                    <Link href={`blogpost/${id}`}>
                        <h3 className="font-bold">{data.title}</h3>
                        <p>{data.desc}</p>
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}

// export async function getServerSideProps(context) {
//     const fileNames = fs.readdirSync('data');
//     const allPostsData = fileNames.map((fileName) => {
//         // Remove ".md" from file name to get id
//         const id = fileName.replace(/\.json$/, '');
    
//         // Read markdown file as string
//         const fullPath = path.join('data', fileName);
//         const fileContents = fs.readFileSync(fullPath, 'utf8');
    
//         // Use gray-matter to parse the post metadata section
//         const matterResult = fileContents;
    
//         // Combine the data with the id
//         return {
//           id,
//           data:JSON.parse(matterResult),
//         };
//       });
//     return {
//       props: {allPostsData}, // will be passed to the page component as props
//     };
// }

export async function getStaticProps(context) {
    const fileNames = fs.readdirSync('data');
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.json$/, '');
    
        // Read markdown file as string
        const fullPath = path.join('data', fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
    
        // Use gray-matter to parse the post metadata section
        const matterResult = fileContents;
    
        // Combine the data with the id
        return {
          id,
          data:JSON.parse(matterResult),
        };
      });
    return {
      props: {allPostsData}, // will be passed to the page component as props
    };
}
