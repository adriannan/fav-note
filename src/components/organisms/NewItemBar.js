import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
  top: 0;
  right: 0;
  height: 100vh;
  width: 680px;
  background-color: #fff;
  z-index: 9999;
  border-left: 8px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.2s ease-in-out;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled(Input)`
  margin-top: 20px;
`;
const StyledTextArea = styled(Input)`
  border-radius: 10px;
  height: 30vh;
  margin: 20px 0 100px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, toggleVisible }) => {
  return (
    <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
      <Heading big>Create new {pageContext} </Heading>
      <Formik
        initialValues={{ title: '', content: '', accountName: '', link: '' }}
        onSubmit={(values) => {
          addItem(pageContext, values);
          toggleVisible();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              placeholder="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {pageContext === 'twitters' && (
              <StyledInput
                placeholder="account name"
                name="accountName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.accountName}
              />
            )}
            {pageContext === 'articles' && (
              <StyledInput
                placeholder="link"
                name="link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.link}
              />
            )}
            <StyledTextArea
              as="textarea"
              placeholder="add description..."
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <Button activeColor={pageContext} type="submit">
              Add Note
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  toggleVisible: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => {
  return { addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)) };
};

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
