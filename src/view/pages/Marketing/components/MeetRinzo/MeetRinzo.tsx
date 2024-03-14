import { Container } from '@mui/material';

import logo from 'src/assets/images/rinzo-logo-legacy.svg';
// import bgImage from 'src/assets/images/marketingPage/meetRinzo.jpg';

import { InfoBlock } from '../InfoBlock';

import { data } from '../../data';
import './MeetRinzo.scss';
import { PartnersSlider } from '../PartnersSlider';
const Light = require('src/assets/videos/banner/light.mp4');
export const MeetRinzo = () => {
	return (
    <div className="hero-section">
      <div className="hero-section__left">
        <div className="hero-section__logo">
          <img src={logo} alt="rinzo-logo" />
        </div>
        <div className="hero-section__info">
          <h1 className="hero-section__info_title">Meet Rinzo!</h1>
          <p className="hero-section__info_description">
            NFT Aggregation with Unique Machine-Learning Enhanced Analytics
          </p>
        </div>
      </div>
      <div className="hero-section__right">
        <Container maxWidth="xl" sx={{ padding: 0 }}>
          <div className="hero-section__blocks">
            {data.map((el, idx) => {
              return (
                <div
                  className="hero-section__blocks_item"
                  key={`hero-info-${idx}`}
                >
                  <InfoBlock el={el} />
                </div>
              );
            })}
          </div>
          <div className="hero-section__slider">
            <PartnersSlider />
          </div>
        </Container>
      </div>
      <video autoPlay muted loop className="hero-section__bg">
        <source src={Light} type="video/mp4"></source>
      </video>
      {/* <div className="hero-section__bg" style={{ backgroundImage: `url(${bgImage})` }} /> */}
    </div>
  );
};
