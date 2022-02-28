import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Header from './Header';

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
