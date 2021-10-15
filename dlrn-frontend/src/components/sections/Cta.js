/* eslint-disable react/style-prop-object */
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
                    <div className="footer-social">
                        <h3 className="m-0">
                            Purchase DLRN
                        </h3>
                        <p>
                            Don't miss our ICO
                            <br />
                            Invest in DLRN
                        </p>
                        <ul className="list-reset">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="#1a6dff" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M7 15h0M2 9.5h20" /></svg>
                            </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="64" height="64"
                                viewBox="0 0 64 64"
                                style={{ fill: "#000000" }}><linearGradient id="SVGID_1__01UEU7GPzz5u_gr1" x1="32" x2="32" y1="-531.083" y2="-576.676" gradientTransform="matrix(1 0 0 -1 0 -522)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_1__01UEU7GPzz5u_gr1)" d="M50,55H14c-2.8,0-5-2.2-5-5V14c0-2.8,2.2-5,5-5h36c2.8,0,5,2.2,5,5v36C55,52.8,52.8,55,50,55z M14,11	c-1.7,0-3,1.3-3,3v36c0,1.7,1.3,3,3,3h36c1.7,0,3-1.3,3-3V14c0-1.7-1.3-3-3-3H14z"></path><linearGradient id="SVGID_2__01UEU7GPzz5u_gr2" x1="32.127" x2="32.127" y1="18.745" y2="45.062" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#SVGID_2__01UEU7GPzz5u_gr2)" d="M42,18.4c1.1-0.3,2.2,0.4,2.4,1.4c0.4,1.5,0.4,3.2,0.4,4.7c0,6.4-4.2,14.7-8.7,20.7c-0.4,0.5-1,0.8-1.6,0.8	H24.4c-1,0-1.8-0.7-2-1.7l-3-21.9c-0.2-1.1,0.6-2.1,1.7-2.3l5.3-0.7c1.1-0.1,2.1,0.6,2.2,1.7l2.1,16.7c2.1-3.4,4.7-9.2,4.7-12.8	c0-1-0.2-1.9-0.4-2.7c-0.3-1.1,0.3-2.3,1.4-2.5L42,18.4z"></path></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="64" height="64"
                                    viewBox="0 0 64 64"
                                    style={{ fill: "#000000" }}><linearGradient id="d65884Ly0V6ryLlG2_ubxa_50919_gr1" x1="30.029" x2="30.029" y1="5.625" y2="52.231" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#d65884Ly0V6ryLlG2_ubxa_50919_gr1)" d="M47.515,10.114C45.14,7.384,40.934,6,35.012,6H19.608c-1.59,0-2.92,1.147-3.164,2.724 L10.028,49.53c-0.099,0.631,0.063,1.23,0.453,1.687C10.907,51.714,11.578,52,12.322,52H22v-2h-9.678 c-0.212,0-0.309-0.067-0.317-0.161l6.416-40.808C18.514,8.434,19.013,8,19.608,8h15.403c5.317,0,9.017,1.153,10.994,3.426 c1.648,1.896,2.264,3.942,2.011,6.853c-0.173-0.069-0.348-0.144-0.519-0.201l-0.14-0.055c-0.114-0.047-0.23-0.093-0.347-0.128 l-0.008-0.002c-0.329-0.097-0.67-0.185-1.023-0.265c-0.117-0.026-0.235-0.06-0.354-0.093c-0.235-0.066-0.475-0.131-0.717-0.17 C43.384,17.116,42.066,17,40.764,17H28.69c-0.548,0-1.017,0.227-1.269,0.349c-0.853,0.414-1.475,1.268-1.623,2.228l-2.572,16.46 l-0.073,0.598l1.98,0.276C25.238,36.239,25.835,36,26.314,36h4.52c10.568,0,16.906-5.074,18.838-15.079 c0.051-0.259,0.095-0.549,0.135-0.814l0.138-0.892l-0.028-0.015C50.396,15.353,49.673,12.597,47.515,10.114z M47.709,20.541 C45.96,29.598,40.44,34,30.834,34h-4.52c-0.263,0-0.517,0.028-0.759,0.082l2.22-14.197c0.049-0.317,0.253-0.606,0.52-0.735 C28.379,19.108,28.601,19,28.69,19h12.073c1.192,0,2.407,0.107,3.823,0.338c0.169,0.028,0.335,0.076,0.499,0.123 c0.155,0.043,0.309,0.086,0.458,0.119c0.307,0.069,0.604,0.146,0.893,0.231c0.056,0.017,0.109,0.041,0.163,0.063 c0.087,0.036,0.174,0.07,0.262,0.1c0.286,0.096,0.576,0.212,0.886,0.355C47.734,20.401,47.722,20.472,47.709,20.541z"></path><linearGradient id="d65884Ly0V6ryLlG2_ubxb_50919_gr2" x1="37.078" x2="37.078" y1="16.375" y2="58.839" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#d65884Ly0V6ryLlG2_ubxb_50919_gr2)" d="M30.333,58h-8.016c-0.636,0-1.235-0.273-1.644-0.751c-0.405-0.473-0.582-1.1-0.485-1.722 l5.632-35.922c0.152-0.984,0.771-1.849,1.614-2.256C27.723,17.21,28.158,17,28.69,17h12.073c1.299,0,2.616,0.116,4.146,0.366 c0.257,0.042,0.511,0.102,0.76,0.161l0.31,0.073c0.315,0.071,0.617,0.16,0.91,0.246l0.115,0.034c0.113,0.034,0.22,0.07,0.325,0.105 l0.158,0.053c0.646,0.216,1.259,0.478,1.832,0.783l0.178,0.102c0.938,0.519,1.693,1.112,2.298,1.805 c2.06,2.368,2.676,5.776,1.835,10.133C51.947,39.58,46.36,44,37.026,44h-1.199c-0.439,0-0.842,0.376-0.916,0.855l-0.099,0.596 l-1.592,10.098C32.997,56.957,31.78,58,30.333,58z M25.25,36.099l-3.085,19.736c-0.008,0.046,0.001,0.082,0.027,0.113 C22.213,55.972,22.251,56,22.317,56h8.016c0.458,0,0.845-0.334,0.918-0.795l0.083-0.44l1.603-10.225 c0.225-1.444,1.468-2.54,2.891-2.54h1.199c8.354,0,13.144-3.768,14.641-11.518c0.729-3.775,0.277-6.536-1.38-8.44 c-0.448-0.514-1.028-0.964-1.773-1.377l-0.163-0.094c-0.446-0.237-0.956-0.455-1.487-0.632l-0.541-0.174 c-0.253-0.075-0.513-0.152-0.78-0.213l-0.341-0.08c-0.201-0.048-0.404-0.098-0.612-0.132C43.167,19.108,41.952,19,40.764,19H28.69 c-0.074,0-0.27,0.094-0.387,0.15c-0.251,0.122-0.455,0.428-0.507,0.763L25.25,36.099L25.25,36.099z"></path></svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="64" height="64"
                                    viewBox="0 0 64 64"
                                    style={{ fill:"#000000" }}><linearGradient id="8yOTYpnnizobuoMBWZ0Msa_50914_gr1" x1="32" x2="32" y1="7.167" y2="56.738" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#8yOTYpnnizobuoMBWZ0Msa_50914_gr1)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="8yOTYpnnizobuoMBWZ0Msb_50914_gr2" x1="32" x2="32" y1="7.167" y2="56.738" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#8yOTYpnnizobuoMBWZ0Msb_50914_gr2)" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path><linearGradient id="8yOTYpnnizobuoMBWZ0Msc_50914_gr3" x1="32" x2="32" y1="18" y2="46.838" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#8yOTYpnnizobuoMBWZ0Msc_50914_gr3)" d="M38.44,32.965c-0.662-0.729-1.489-1.275-2.397-1.605c1.068-0.968,1.788-2.292,1.929-3.773 c0.161-1.689-0.396-3.374-1.531-4.621c-0.672-0.739-1.516-1.286-2.44-1.614V19h-2v2h-2v-2h-2v2h-2c-1.103,0-2,0.897-2,2v18 c0,1.103,0.897,2,2,2h2v2h2v-2h2v2h2v-2.01c3.086-0.105,5.689-2.437,5.972-5.404C40.133,35.896,39.575,34.212,38.44,32.965z M26,23 h6c1.125,0,2.203,0.478,2.961,1.31c0.767,0.845,1.129,1.94,1.021,3.087C35.788,29.417,33.945,31,31.785,31H26V23z M33.785,41H26v-8 h5.785c0.072,0,0.144-0.001,0.215-0.004L34,33c1.125,0,2.203,0.478,2.961,1.31c0.767,0.845,1.129,1.94,1.021,3.087 C37.788,39.417,35.945,41,33.785,41z"></path></svg>
                            </li>
                        </ul>
                    </div>
                    <div className="cta-action">
                        <Input id="newsletter" type="text" label="Name" labelHidden hasIcon="right" placeholder="Your Name">
                            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                            </svg>
                        </Input>
                        <Input id="newsletter" type="email" label="Email Address" labelHidden hasIcon="right" placeholder="Email Address">
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