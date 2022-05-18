/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

// Styles Header

const headerStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  padding-top: 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const navBar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: auto;
  padding: 0 3vw;
  position: fixed;
  background-color: #161616;
  perspective: 500px;
  width: 100%;
`;

const navBlock1 = css`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  padding-top: 3px;
  padding-left: 0;
  gap: 20px;
`;

const navBlock2 = css`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  padding-top: 3px;
  padding-left: 0;
  gap: 20px;
`;

const dropdownIcon = css`
  margin-left: 4px;
  padding-top: 5px;
`;

const searchIcon = css`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  margin-top: 3px;
`;

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
  padding: 3vh;
`;

const imgOne = css`
  width: 70vw;
  padding-top: 20px;
  border-radius: 12px;
`;

const mainParagraph = css`
  font-size: 25px;
  line-height: 110%;
  color: hsla(0, 0%, 100%, 0.7);
  font-weight: 500;
  margin-bottom: 24;
`;

const blackButton = css`
  background-color: #161616;
  border: 2px solid hsla(0, 0%, 100%, 0.1);
`;

const howItWorks = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 48px;
  column-gap: 24px;
`;

const roundNumber = css`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border-radius: 60px;
  background-color: #1775e1;
  color: #ffffff;
  margin: auto;
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 600;
`;
const instruction = css`
  max-width: 541px;
  text-align: left;
  @media screen and (max-width: 1313px) {
    text-align: center;
  }
`;

const imgInstruction = css`
  border-radius: 12px;
`;

function App() {
  return (
    <div>
      <header css={headerStyle}>
        <nav css={navBar}>
          <ul css={navBlock1}>
            <li>
              <a href="/">
                <img
                  src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/6125a1fa1160592fd373d33b_Dropbase%20logo%20website.svg"
                  width="128"
                  alt=""
                  css={dropdownIcon}
                />
              </a>
            </li>
            <li>
              <a href="/">
                How it Works
                <img
                  src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48919bb25c7b_icon-caret-down.svg"
                  width="10"
                  alt=""
                  css={dropdownIcon}
                />
              </a>
            </li>
            <li>
              <a href="/">
                Solutions
                <img
                  src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48919bb25c7b_icon-caret-down.svg"
                  width="10"
                  alt=""
                  css={dropdownIcon}
                />
              </a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">
                About
                <img
                  src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48919bb25c7b_icon-caret-down.svg"
                  width="10"
                  alt=""
                  css={dropdownIcon}
                />
              </a>
            </li>
          </ul>
          <div>
            <ul css={navBlock2}>
              <li>
                <a href="/" css={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48f17ab25c94_icon-search.svg"
                    alt=""
                    css={searchIcon}
                  />
                  Search
                </a>
              </li>
              <li>
                <a href="/">Sign in</a>
              </li>
              <li>
                <button>Try for free</button>
              </li>
              {/* <li>
                <img
                  src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48567ab25c80_icon-menu.svg"
                  alt=""
                />
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
      <main css={mainStyle}>
        <div>
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
        <h2>How it Works</h2>
        <div css={howItWorks}>
          <div css={instruction}>
            <h3 css={roundNumber}>1</h3>
            <h4>Import and Request data seamlessly</h4>
            <p>
              Import and Request data from customers and partners faster than
              ever. Automatically ingest data from CSVs and Excel files, clean,
              and load them directly to your database - no manual work needed.
              Never clean the same data twice.
            </p>
            <a
              href="/import-and-request-data"
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Learn how
              <img
                src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a486e78b25cb2_icon-chevron-right.svg"
                alt="Arrow right"
              />
            </a>
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/613018032ac5e7172d7e1ec2_Request%20data.svg"
              width="700"
              alt="Request data from external parties with Dropzone Data Requests by Dropbase"
              css={imgInstruction}
            />
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
