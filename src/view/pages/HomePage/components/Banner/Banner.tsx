import { BaseSelect, TabMenu } from 'src/view/components';
import './Banner.scss';
import { useAppSelector } from 'src/hooks';
import { items } from '../utils';

import nft1 from 'src/assets/images/home/nft-1.jpg';
import nft2 from 'src/assets/images/home/nft-2.jpg';
import nft3 from 'src/assets/images/home/nft-3.jpg';
import nft4 from 'src/assets/images/home/nft-4.jpg';

import nft5 from 'src/assets/images/home/nft-5.jpg';
import nft6 from 'src/assets/images/home/nft-6.jpg';
import nft7 from 'src/assets/images/home/nft-7.jpg';
import nft8 from 'src/assets/images/home/nft-8.jpg';

import nft9 from 'src/assets/images/home/nft-9.jpg';
import nft10 from 'src/assets/images/home/nft-10.jpg';
import nft11 from 'src/assets/images/home/nft-11.jpg';
import nft12 from 'src/assets/images/home/nft-12.jpg';

const Light = require('src/assets/videos/banner/light.mp4');
const Dark = require('src/assets/videos/banner/dark.mp4');
export const Banner = () => {
	const { themeMode } = useAppSelector(state => state.themeReducer);
	return (
    <div className={`banner banner--${themeMode}`}>
      {/*
      <video key={themeMode === 'light' ? Light : Dark} autoPlay muted loop className="myVideo">
        <source src={ themeMode === 'light' ? Light: Dark} type="video/mp4"></source>
      </video>
      */}
      <div className="banner__content container container-mobile-padding-empty">
        <div>
          <h1>NFT Aggregator with an unique Machine-learning analytics</h1>
          <h5>
            Find their next NFT investment across multiple marketplaces. Analyze
            and Sell NFTs with profit.
          </h5>
        </div>
        <TabMenu items={items} isHome />
        <div className="tab-menu-mobile">
          <BaseSelect items={items} isTopMenu />
        </div>
      </div>
      <div className="banner__pic">
        <div className="banner__pic_line banner__pic_line--reverse">
          <span>
            <img src={nft1} alt="nft" />
            <img src={nft2} alt="nft" />
            <img src={nft3} alt="nft" />
            <img src={nft4} alt="nft" />
          </span>
          <span>
            <img src={nft1} alt="nft" />
            <img src={nft2} alt="nft" />
            <img src={nft3} alt="nft" />
            <img src={nft4} alt="nft" />
          </span>
        </div>
        <div className="banner__pic_line banner__pic_line--row">
          <span>
            <img src={nft5} alt="nft" />
            <img src={nft6} alt="nft" />
            <img src={nft7} alt="nft" />
            <img src={nft8} alt="nft" />
          </span>
          <span>
            <img src={nft5} alt="nft" />
            <img src={nft6} alt="nft" />
            <img src={nft7} alt="nft" />
            <img src={nft8} alt="nft" />
          </span>
        </div>
        <div className="banner__pic_line banner__pic_line--reverse">
          <span>
            <img src={nft9} alt="nft" />
            <img src={nft10} alt="nft" />
            <img src={nft11} alt="nft" />
            <img src={nft12} alt="nft" />
          </span>
          <span>
            <img src={nft9} alt="nft" />
            <img src={nft10} alt="nft" />
            <img src={nft11} alt="nft" />
            <img src={nft12} alt="nft" />
          </span>
        </div>
      </div>
    </div>
  );
};
