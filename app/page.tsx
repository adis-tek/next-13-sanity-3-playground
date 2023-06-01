"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { getPosts } from "@/sanity/sanity-utils";

import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";

export default async function Home() {
  const posts = await getPosts();

  const videoId = (videoUrl: string) => {
    const regex = /\/([a-zA-Z0-9])+$/g;
    const id = videoUrl.match(regex) ?? "";
    return id.toString().slice(1);
  };

  const provider = (videoUrl: string | Plyr.Provider) => {
    const url =
      videoUrl.match("youtube") || videoUrl.match("youtu.be")
        ? "youtube"
        : videoUrl.match("vimeo")
        ? "vimeo"
        : "html5";
    return url;
  };

  return (
    <div>
      <h1 className="title">Posts From Sanity CMS</h1>
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
              {post.videoUrl ? (
                <Plyr
                  source={{
                    type: "video",
                    sources: [
                      {
                        src: videoId(post.videoUrl),
                        provider: provider(post.videoUrl),
                      },
                    ],
                  }}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// https://www.youtube.com/embed/ERwHvwsGFoE
// //player.vimeo.com/video/583292576

//https://youtube/fMFVZPpavO4

// <iframe src="https://player.vimeo.com/video/832371072?h=d7ab7349ef" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

// https://vimeo.com/832371072?share=copy
