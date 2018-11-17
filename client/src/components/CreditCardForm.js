import React from 'react';
import Form from './Form';

const initialValues = {
  name: '',
  number: '',
  expiry: '',
  cvc: '',
};

const CreditCardForm = ({ onSubmit }) => (
  <Form initialValues={initialValues} onSubmit={onSubmit}>
    {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Full Name</label>
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
          <label className="label">Card Number</label>
          <div className="control">
            <input
              className="input"
              placeholder="1234123412341234"
              type="tel"
              name="number"
              value={values.number}
              onChange={handleChange}
              data-testid="number-input"
            />
            <p className="help is-danger">{null}</p>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label">Expiration Date</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="MM/YY"
                  type="tel"
                  name="expiry"
                  value={values.expiry}
                  onChange={handleChange}
                  data-testid="expiry-input"
                />
                <p className="help is-danger">{null}</p>
              </div>
            </div>
            <div className="field">
              <label className="label">CVC</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="CVC"
                  type="tel"
                  name="cvc"
                  value={values.cvc}
                  onChange={handleChange}
                  data-testid="cvc-input"
                />
                <p className="help is-danger">{null}</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="field">
          <div className="control">
            <input
              type="submit"
              value="Place Order"
              className="button is-primary"
              data-testid="submit-input"
            />
          </div>
        </div>
      </form>
    )}
  </Form>
);

export default CreditCardForm;
