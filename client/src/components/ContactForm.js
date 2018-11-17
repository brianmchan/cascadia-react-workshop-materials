import React from 'react';
import Form from './Form';

const initialValues = {
  name: '',
  message: '',
};

const ContactForm = ({ onSubmit }) => {
  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input"
                placeholder="Taylor Swift"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                data-testid="name-input"
              />
              <p className="help is-danger">{null}</p>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="messsage"
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
                data-testid="message-input"
              />
              <p className="help is-danger">{null}</p>
            </div>
          </div>
          <br />
          <div className="field">
            <div className="control">
              <input
                type="submit"
                value="Submit Form"
                className="button is-primary"
                data-testid="submit-input"
              />
            </div>
          </div>
        </form>)}
    </Form>
    );
}

export default ContactForm;
