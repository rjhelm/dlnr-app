import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <img
            src={logo}
            alt=""
            width={50}
            height={50} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;