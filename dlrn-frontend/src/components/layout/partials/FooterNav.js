import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
    className,
    ...props
}) => {

    const classes = classNames(
        'footer-nav',
        className
    );

    return (
        <nav
            {...props}
            className={classes}
        >
            <ul className="list-reset">
                <li>
                    <Link to="https://github.com/rjhelm">ryanj_dev</Link>
                </li>
                <li>
                    <Link to="https://www.reddit.com/user/DLRNblockchain">Support</Link>
                </li>
                <li>
                    <Link to="https://etherscan.io/token/0xa8158a68fe2a265c2499c3f4d17f80f2507c532f?a=0xef24416e0b6a8863a6710b0fa4dd4d24f6ab593e">Token</Link>
                </li>
            </ul>
        </nav>
    );
}

export default FooterNav;