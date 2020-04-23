import React from 'react';
import PropTypes from 'prop-types';
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
Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};
const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
