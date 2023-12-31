const API_URL = process.env.GRAPHQL_API_URL as string;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers: any = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch error");
  }
  return json.data;
}

export async function getAllPostForHome(preview: any) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt(format: RENDERED)
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories(first: 1) {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(`
  query getPostBySlug {
    post(id: "${slug}", idType: SLUG) {
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      tags {
        nodes {
          name
        }
      }
      title
    }
  }`);
  return data?.post;
}

export async function getAllCategories() {
  const data = await fetchAPI(`
  query getAllCategories {
    categories {
      nodes {
        id
        slug
        name
      }
    }
  }
  `);
  return data.categories.nodes;
}

export async function getPostsByCategoryName(categoryName: string) {
  const data = await fetchAPI(`
  query getAllPostByCategoryName {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}, categoryName: "${categoryName}"}) {
      edges {
        node {
          id
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
          categories(first: 1) {
            nodes {
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
  `);
  return data.posts;
}
