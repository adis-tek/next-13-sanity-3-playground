// groq`
//     *[_type == "post"]{
//       title,
//       slug,
//       mainImage{
//         asset->{
//           _id,
//           url
//         },
//         alt
//       }
//     }`;

import { PortableTextBlock } from "sanity";

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl: string;
  alt: string;
  body: PortableTextBlock[];
  videoUrl: string;
}
