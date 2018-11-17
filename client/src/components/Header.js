import React, {Component} from 'react';
import {HOME, CHECKOUT, ORDERS, CONTACT} from '../utils/constants';
import {CartConsumer} from './Cart';
import {Link} from '@reach/router';

class Header extends Component {
  state = {
    showDropdown: false
  };

  toggleDropdown = () => this.setState(({showDropdown}) => ({
    showDropdown: !showDropdown
  }));

  render() {
    const {cartCount} = this.props;
    const showDropdown = this.state.showDropdown
      ? 'is-active'
      : null;

    return (
      <header className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to={HOME}>
              <h1 className="title is-3">
                Formidable Store
              </h1>
            </Link>

            <span
              role="button"
              className={`navbar-burger burger ${showDropdown}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleDropdown}>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </span>
          </div>

          <div className={`navbar-menu ${showDropdown}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to={HOME}>
                Shop
              </Link>

              <Link className="navbar-item" to={ORDERS}>
                Orders
              </Link>

              <Link className="navbar-item" to={CONTACT}>
                Contact
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="button is-primary">
                  <Link to={CHECKOUT}>
                    {`Cart ${cartCount > 0
                      ? `(${cartCount})`
                      : ''}`}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const ConnectedHeader = () => (
  <CartConsumer>
    {({cart}) => (<Header cartCount={cart.totalQuantity}/>)}
  </CartConsumer>
);

export default ConnectedHeader;