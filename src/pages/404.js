import * as React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { H1, MarginContainer, P, YELLOW } from '../styles/styles';

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <MarginContainer>
        <H1>Page not found</H1>
        <P>Sorry, we couldn't find what you were looking for.</P>
        <Button to="/" color={YELLOW}>
          Go home
        </Button>
      </MarginContainer>
    </Layout>
  );
};

export default NotFoundPage;
