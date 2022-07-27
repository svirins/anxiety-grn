const postFields = `
  _id,
  name,
  title,
  excerpt,
  coverImage,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "post"] {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] [0] {
    mdxcontent,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug]  && slug.current != "about"] {
    mdxcontent,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;
