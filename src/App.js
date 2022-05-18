/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';
import HowItWorks from './HowItWorks';

// Styles Header

// Styles Body

const mainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 5vh;

  @media screen and (max-width: 1313px) {
    h1 {
      font-size: 30px;
    }
  }

  a {
    font-size: 16px;
    font-weight: 600;
  }
`;

const imgOne = css`
  width: 70vw;
  padding-top: 20px;
  border-radius: 12px;
`;

const mainParagraph = css`
  font-size: 25px;
  line-height: 110%;
  color: var(--gray);
  font-weight: 500;
  margin-bottom: 24;

  @media screen and (max-width: 1313px) {
    font-size: 20px;
  }
`;

const blackButton = css`
  background-color: var(--black);
  border: 2px solid hsla(0, 0%, 100%, 0.1);

  :hover {
    border-color: hsla(0, 0%, 100%, 0.5);
  }
`;

// Styles Footer

function App() {
  return (
    <div>
      <Header />
      <main css={mainStyle}>
        <div className="Title Section">
          <h1 c>Import CSV data into databases instantly</h1>
          <p css={mainParagraph}>
            Dropbase is an external data platform. Clean, validate, and import
            CSV files from customers and partners directly into databases that
            integrate with your favorite analytics tools and data apps.
          </p>
          <div css={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <button>Try Dropbase for Free</button>
            <button css={blackButton}>Request Demo</button>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/6261be41b014d129c24dd1a9_Dropbase%20Data%20Platform.svg"
            loading="lazy"
            width="1400"
            data-w-id="7a75fbeb-6a3b-8922-2460-19e26a51cf9c"
            alt="Dropbase Data Platform Overview"
            css={imgOne}
          />
        </div>
        <HowItWorks />
        <div css={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <button>Try Dropbase for Free</button>
          <button css={blackButton}>Request Demo</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
