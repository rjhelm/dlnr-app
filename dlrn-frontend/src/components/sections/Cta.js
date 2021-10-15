import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import ButtonGroup
 from '../elements/ButtonGroup';
const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false,
}

const Cta = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {

    const outerClasses = classNames(
        'cta section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'cta-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        split && 'cta-split'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <div className="cta-slogan">
                        <h3 className="m-0">
                            Purchase DLRN
                        </h3>
                        <p>
                            Don't miss our ICO
                            <br/>
                            Invest in DLRN
                        </p>
                    </div>
                    <div className="cta-action">
                        <Input id="newsletter" type="name" label="Name" labelHidden hasIcon="right" placeholder="Your Name">
                            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                            </svg>
                        </Input>
                        <Input id="newsletter" type="address" label="Email Address" labelHidden hasIcon="right" placeholder="Email Address">
                            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                            </svg>
                        </Input>
                        <div className="reveal-from-bottom" data-reveal-delay="600">
                            <ButtonGroup>
                                <Button tag="a" color="dark" wideMobile href="">
                                    Credit/Debit Card
                                </Button>
                                <Button tag="a" color="dark" wideMobile href="">
                                    Crypto
                                </Button>
                                <Button tag="a" color="dark" wideMobile href="">
                                    Venmo
                                </Button>
                                <Button tag="a" color="dark" wideMobile href="">
                                    Paypal
                                </Button>
                            </ButtonGroup>
                        </div>
                        {/* Put in a select option here for choosing a way to pay for the ICO */}
                    </div>
                </div>
            </div>
        </section>
    );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;