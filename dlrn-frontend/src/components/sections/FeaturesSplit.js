import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import dev from '../../assets/images/developer.webp';
import comp from '../../assets/images/computer-science.webp';
import eco from '../../assets/images/eco-friendly.webp';
import productivity from '../../assets/images/productivity.webp'
import cpu from '../../assets/images/cpu.webp';
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
        title: 'Decentralized Learning',
        paragraph: `The Decentralized Learning Network for Nueral Networks`
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
                                    Introduction
                                </h3>
                                <p className="m-0">
                                    The current technology in use for efficient data processing today is very expensive and utilizes a lot of power. With that playing a huge factor in the advancement of this industry, our blockchain plans to fix that. We plan to deploy a decentralized network of certified miners built out of optimized Single-board computers, made specifically for data processing and low power consumption. These miners will come in a range of affordable prices for all developers. Miners will come preprogrammed with 2 built in environments. The first is a cross-chain exchange, wallet, and charting application, to preform all your trades. The second environment will give developers all the tools needed to create anything from neural networks to Data Visualization. Our blockchain will not only push advancements for many indusries, our blockchain will give aspiring developers the ability to create their own cryptocurrency and NFT's to provide developers income while working on their projects.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={cpu}
                                    alt="Features split 01"
                                    width={450}
                                    height={396} />
                            </div>
                        </div>
                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    For Developers
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Developer Funding
                                </h3>
                                <p className="m-0">
                                    Through our platform developers can create cryptocurrency's and NFT's
                                    to fund the growth of their machine learning project.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={dev}
                                    alt=""
                                    width={528}
                                    height={396} />
                            </div>
                        </div>
                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Productivity
                                </div>
                                <h3 className="mt-0 mb-12">
                                    User Productivity Boost
                                </h3>
                                <p className="m-0">
                                    Users can distribute the computation processes to the network to speed up the time it take to process data or train neural networks.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={productivity}
                                    alt="Features split 02"
                                    width={528}
                                    height={396} />
                            </div>
                        </div>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Efficiency
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Eco-Friendly
                                </h3>
                                <p className="m-0">
                                    Our Miners are quiet, produce minimal heat, and can be powered with about 10w. Our network will consume 83% less then ethereum, with an average miner powered with about 1200W.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={eco}
                                    alt="Features split 03"
                                    width={528}
                                    height={396} />
                            </div>
                        </div>
                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Oppurtunity
                                </div>
                                <h3 className="mt-0 mb-12">
                                    User Equality
                                </h3>
                                <p className="m-0">
                                    We strive to be a network that any developer can get started with machine learning inexpensively as well as provide opportunities to profit from the blockchain.
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={comp}
                                    alt="Multpiple users"
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