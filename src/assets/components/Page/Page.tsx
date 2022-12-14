import React, { FC } from 'react';
import Layout from '../Layout/Layout';
import { PageProps } from './Page.props';
import MetaTitle from '../MetaTitle/MetaTitle';

const Page: FC<PageProps> = ({ meta, children }) => {
  return (
    <Layout>
      <MetaTitle
        pageTitle={meta.pageTitle}
        pageDescription={meta.pageDescription}
        keywords={meta.keywords}
      />
      {children}
    </Layout>
  );
};

export default Page;
