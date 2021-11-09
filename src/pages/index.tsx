import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import { PostProps } from '../components/Post';

type Props = {
  category: PostProps[];
};

const Blog: React.FC<Props> = (props) => (
  <Layout>
    <div className="page">
      <h1>My Blog</h1>
      <main>{props.category && JSON.stringify(props.category, null, 4)}</main>
    </div>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/category');
  const category = await res.json();
  return {
    props: { category },
  };
};

export default Blog;
