import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import token from '../../assets/images/DLRN.png'
import Image from '../elements/Image';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {

    const outerClasses = classNames(
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner pt-0',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'DLRN Tokens & Token Standards',
        paragraph: `Developers will have the ability to create personal or public tokens with our blockchain
        There are currently 3 token standards, BLCKMNY-32, BLCKDP-1137, AND BLCKNFT-443.
        With these tokens users will be able deploy their project and create a source of income.
        When a user creates a new token, a new block added to the Main-Chain.
        Tokens then branch off creating their own Side-Chain.`
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>

                        {/* <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-01.svg')}
                                            alt="Features tile icon 01"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        
                                    </h4>
                                    <p className="m-0 text-sm">
                                        
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={token}
                                            alt="DLRN logo"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        BLCKMNY-32
                                    </h4>
                                    <p className="m-0 text-sm">
                                        The BLCKMNY-32 token will be for creating cryptocurrency as a way for aspiring developers to crowd source funding to scale their projects. The creator will be able to build value from the ground up. As well the ability to back the value of the token with cross-chain tokens, or pegged to follow a real-world assets price such as stocks, metals, gems, fiat currency’s, ext.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={token}
                                            alt=""
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        BLCKDP-1137
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Before creating a new BLCKDP-1137 token, users must create a BLCKMNY-32 to back their project. Users can create this token to start a new project on the blockchain. A new block is created for every calculation needed to be preformed. In order for the blocks to get mined, a user must contribute a small amount of their BLCKMNY-32 token to pay miners for their contribution. BLCKDP-1137 tokens are not tradable, but when a developer completes their project you're able sell or except offers to buy ownership to that project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={token}
                                            alt=""
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        BLCKNFT-443
                                    </h4>
                                    <p className="m-0 text-sm">
                                        The BLCKNFT-443 token standard gives all our users a simple way to create non-fungible tokens based around their project. After a user has created & signed their NFT it will get deployed into the network for a miner to validate the signature to the blockchain. Theirs no fee for creating, and deploying new NFTs, but the miner that validates the signature will get one copy of the NFT as their payment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-05.svg')}
                                            alt="Features tile icon 05"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require('./../../assets/images/feature-tile-icon-06.svg')}
                                            alt="Features tile icon 06"
                                            width={64}
                                            height={64} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;