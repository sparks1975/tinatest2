import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import { client } from "../.tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data?.page?.body;
  return (
    <Layout>
      <TinaMarkdown content={content} />
    </Layout>
  );
}


export const getStaticPaths = async () => {
  const { data } = await client.queries.pageConnection();
  const paths = data.pageConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: ctx.params.slug + ".mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
