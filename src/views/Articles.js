import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { fetchItems } from 'actions';

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <GridTemplate>
        {articles.map(({ title, content, articleUrl, created, _id: id }) => (
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
  }
}
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
const mapDispatchToProps = (dispatch) => {
  return { fetchArticles: () => dispatch(fetchItems('articles')) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
