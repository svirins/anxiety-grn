import groq from 'groq';

const postFields = groq`
  _id,
  title,
  excerpt,
  coverImage,
  "slug": slug.current
`;

export const indexQuery = groq`
*[_type == "post"] {
  ${postFields}
}`;

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] [0] {
    mdxcontent,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug  && slug.current != "about"] {
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
