import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';

const Twitters = ({ twitters }) => {
  return (
    <GridTemplate pageType="twitters">
      {twitters.map(({ title, content, created, twitterName, id }) => (
        <Card
          cardType="twitters"
          id={id}
          title={title}
          content={content}
          created={created}
          twitterName={twitterName}
          key={title}
        />
      ))}
    </GridTemplate>
  );
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterName: PropTypes.string,
      articleUrl: PropTypes.string,
    }),
  ),
};
Twitters.defaultProps = {
  twitters: [],
};

function mapStateToProps({ twitters }) {
  return { twitters };
}

export default connect(mapStateToProps)(Twitters);
