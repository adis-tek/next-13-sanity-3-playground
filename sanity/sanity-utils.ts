import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

import { Post } from "./types/Post";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "post"]{
      _id,
      title,
      slug,
      "imageUrl": mainImage.asset->url,
        body,
        alt,
        videoUrl,
    }
`
  );
}
