import React from 'react';
import Layout from '../../components/Layout/Layout';
import MetaTitle from '../../components/MetaTitle/MetaTitle';

const MainPage = () => {
  return (
    <Layout>
      <MetaTitle pageTitle={'Main'} pageDescription={''} keywords={''} />
      Hello world!
    </Layout>
  );
};

export default MainPage;
