/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const footerStyle = css`
  background-color: var(--dark-gray);
  border-radius: 12px;
  margin: 8vw;
  padding: 48px;
  display: grid;
  row-gap: 96px;
  column-gap: 20px;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  grid-template-areas:
    'logos product resources company'
    'copyrights copyrights copyrights copyrights';

  .logos {
    grid-area: logos;
  }

  .product {
    grid-area: product;
  }

  .resources {
    grid-area: resources;
  }

  .company {
    grid-area: company;
  }

  .copyrights {
    grid-area: copyrights;
  }
`;

const footerLogos = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
`;

const footerList = css`
  text-decoration: none;
  list-style-type: none;
  text-align: left;
  padding: 0;
  color: var(--gray);
  opacity: 0.5;
`;

const footerCopyrights = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 14px;
`;

const footerIcons = css`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={footerLogos} className="logos">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/6125a1fa1160592fd373d33b_Dropbase%20logo%20website.svg"
            width="128"
            alt="logo"
          />
          <div>
            Unleashing data <br />
            for everyone
          </div>
        </div>
        <div>
          <div>Backed by</div>
          <img
            src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f3420533107291249ef8a61_Y%20Combinator%20logo%20transparent.png"
            width="150"
            alt=""
          />
        </div>
      </div>
      <div className="products">
        <h2>Product</h2>
        <ul css={footerList}>
          <li>
            <a href="/">How It Works</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Request Demo</a>
          </li>
        </ul>
      </div>
      <div className="resources">
        <h2>Resources</h2>
        <ul css={footerList}>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Docs</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
      <div className="company">
        <h2>Company</h2>
        <ul css={footerList}>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
      </div>
      <div css={footerCopyrights} className="copyrights">
        <span>© Copyright 2022 - Dropbase • All rights reserved.</span>
        <span>San Francisco | Toronto</span>
        <span css={footerIcons}>
          <a href="/">
            <img
              src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a4853bdb25c8e_twitter.svg"
              width="20px"
              alt="twitter"
            />
          </a>
          <a href="/">
            <img
              src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48fdf7b25ce2_linkedin.svg"
              width="20px"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48c016b25c88_producthunt.svg"
              width="20px"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a48307eb25c7e_slack.svg"
              width="20px"
              alt=""
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
