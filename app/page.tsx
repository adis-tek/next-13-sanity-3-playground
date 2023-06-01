"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { getPosts } from "@/sanity/sanity-utils";

import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";

export default async function Home() {
  const posts = await getPosts();

  const videoId = "ERwHvwsGFoE";
  const provider = "youtube";

  const plyrVideo =
    videoId && provider ? (
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: videoId,
              provider: provider,
            },
          ],
        }}
      />
    ) : null;

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
        {/* <iframe
          width="1070px"
          height="600px"
          // src="https://www.sdrive.app/embed/1ptBQD"
          src="https://www.youtube.com/embed/ERwHvwsGFoE"
          title="video player"
          frameBorder="0"
          modestbranding="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
        {/* <Iframe
          width="1070px"
          height="600px"
          url="https://www.sdrive.app/embed/1ptBQD"
          // url="https://player.vimeo.com/video/583292576"
          // url="https://www.youtube.com/embed/ERwHvwsGFoE"
          title="video player"
          frameBorder="0"
          modestbranding="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Iframe> */}
        {/* <Video
          url="https://www.sdrive.app/embed/1ptBQD"
          width="1070px"
          height="600px"
        /> */}
        {plyrVideo}
      </div>
    </div>
  );
}

// //player.vimeo.com/video/583292576
