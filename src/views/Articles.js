import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';

const Articles = ({ articles }) => {
  return (
    <GridTemplate>
      {articles.map(({ title, content, articleUrl, created, id }) => (
        <Card
          id={id}
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={title}
        />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
