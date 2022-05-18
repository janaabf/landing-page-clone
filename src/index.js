import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        :root {
          --white: #ffffff;
          --gray: hsla(0, 0%, 100%, 0.7);
          --blue: #1775e1;
          --black: #161616;
        }
        body {
          margin: auto;
          min-height: 100%;
          max-width: 1400px;
          padding-bottom: 96px;
          background-color: #161616;
          font-family: Inter, sans-serif;
          color: hsla(0, 0%, 100%, 0.5);
          font-size: 15px;
          line-height: 24px;
          font-weight: 500;
        }
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
        button {
          border-radius: 6px;
          background-color: #1775e1;
          box-shadow: inset 0 0 20px 20px transparent;
          transition: box-shadow 0.2s;
          transition: box-shadow 0.2s;
          line-height: 130%;
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          padding: 18px 36px;
        }
        h1 {
          font-size: 45px;
          color: #ffffff;
          line-height: 100%;
          font-weight: 1000;
        }
        h2 {
          font-size: 25px;
          color: #ffffff;
          line-height: 110%;
          font-weight: 700;
          margin-top: 96px;
        }
        h4 {
          margin-bottom: 26px;
          line-height: 130%;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.1;
          color: #ffffff;
        }
        a {
          text-decoration: none;
          color: #ffffff;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
