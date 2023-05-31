import Image from "next/image";
import styles from "./page.module.css";

import { getPosts } from "@/sanity/sanity-utils";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="title">Title</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <Image
                src={post.imageUrl}
                alt={post.title}
                priority={true}
                width={300}
                height={300}
              />
              <p>{post.slug.current}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
