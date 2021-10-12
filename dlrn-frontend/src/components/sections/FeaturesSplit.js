import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: 'About Decentralized Learning Blockchain',
        paragraph: `Through our platform developers can create cryptocurrency's and NFT's
        to fund the growth of their machine learning project.
        Users can distribute the computation processes to the network to speed up the time it take to process data, or train neural networks
        Our Miners are quite, Produce minimal heat, and power with 10w.Our network will consume 83% less then ethereum, with an average miner powered with about 1200W
        We strive to be a network that any developer can get started with machine learning inexpensively as well Provide many opportunities to profit from the blockchain.`
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={splitClasses}>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">

                                </div>
                                <h3 className="mt-0 mb-12">
                                    Our Blockchain Government
                                </h3>
                                <p className="m-0">
                                    Our blockchain will be governed by 2 Coins. The first coin is backed by all the tokens in the blockchain combined. These coin can only be obtained by loyal miners. Our second governing coin will be a stable coin pegged at the U.S. dollar's price. A machine learning algorithm watches over the entire blockchain. The algorithm will insure that mine-able blocks are distributed with optimal speed while making sure of miner equality. Miners do not get to choose what token they mine. instead miners will be payed with the token backing that project. Miners will be able to exchange those tokens into our stable coins, but are strongly encouraged to hold those tokens for when the project blows up.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require('./../../assets/images/features-split-image-01.png')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396} />
                            </div>
                        </div>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Lightning fast workflow
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Data-driven insights
                                </h3>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require('./../../assets/images/features-split-image-02.png')}
                                    alt="Features split 02"
                                    width={528}
                                    height={396} />
                            </div>
                        </div>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Lightning fast workflow
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Data-driven insights
                                </h3>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require('./../../assets/images/features-split-image-03.png')}
                                    alt="Features split 03"
                                    width={528}
                                    height={396} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;