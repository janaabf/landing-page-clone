/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const howItWorks = css`
  display: flex;
  justify-content: center;
  row-gap: 48px;
  column-gap: 24px;
  margin: 60px 0;
  flex-wrap: wrap;
  }
`;
const howItWorksReverse = css`
  display: flex;
  justify-content: center;
  row-gap: 48px;
  column-gap: 24px;
  margin: 60px 0;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  }
`;
const roundNumber = css`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border-radius: 60px;
  background-color: var(--blue);
  color: var(--white);
  margin: auto;
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 600;
`;
const instruction = css`
  max-width: 541px;
  text-align: left;
  p {
    font-size: 20px;
  }
  h4 {
    font-size: 30px;
  }

  @media screen and (max-width: 1313px) {
    text-align: center;
    p {
      font-size: 15px;
    }
    h4 {
      font-size: 20px;
    }
  }
`;
const imgInstruction = css`
  border-radius: 12px;
  max-width: 700px;
  width: 90vw;
`;

export default function HowItWorks() {
  return (
    <>
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
            alt="Request data from external parties with Dropzone Data Requests by Dropbase"
            css={imgInstruction}
          />
        </div>
      </div>
      <div css={howItWorksReverse}>
        <div css={instruction} className="reverse">
          <h3 css={roundNumber}>2</h3>
          <h4>
            Clean and validate messy data just the way your systems need it
          </h4>
          <p>
            With Dropbase, you can clean and validate your data with just a few
            clicks - no engineering required. Use pre-built cleaning and
            validations, or create custom ones to suit your system requirements.
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
            src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/61301a3ef57f78444a6a0b09_CSV%20to%20Database.svg"
            alt="Turn CSVs to live databases instantly with Dropbase"
            css={imgInstruction}
          />
        </div>
      </div>
      <div css={howItWorks}>
        <div css={instruction}>
          <h3 css={roundNumber}>3</h3>
          <h4>
            Manage imported data in a secure, scalable, and analytics-ready
            database
          </h4>
          <p>
            Databases are powerful but complicated to set up, manage, and scale
            without help from engineering or IT. With Dropbase, setting up a
            database is as easy as creating an account. Manage, grow, and secure
            all your data in your database with the simplest interface in the
            market.
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
            src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/61301b76afa2c10877a95bdf_Never%20clean%20twice.svg"
            alt="Never clean the same data from CSV, Excel or online source twice. "
            css={imgInstruction}
          />
        </div>
      </div>
      <div css={howItWorksReverse}>
        <div css={instruction} className="reverse">
          <h3 css={roundNumber}>4</h3>
          <h4>Connect and integrate with your favorite tools</h4>
          <p>
            Get the data you need and funnel it where it needs to go. We
            instantly grant database credentials to approved users so you can
            quickly and safely connect your database to your favorite BI tools,
            app builders, customer data pipelines and more.
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
            src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/60ff3b0d58646de3ccc359e6_Dropbase%20integrations.svg"
            alt="Connect to your favorite analytics, BI tools, custom apps, and internal app builders"
            css={imgInstruction}
          />
        </div>
      </div>
      <div css={howItWorks}>
        <div css={instruction}>
          <h3 css={roundNumber}>5</h3>
          <h4>Query all of your data just the way you need it, in seconds</h4>
          <p>
            With Dropbase, you can build sophisticated data queries, with just a
            few clicks - no engineering required. Chain multiple steps, save
            them as views, and query a million rows in seconds.
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
            src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/61301b76afa2c10877a95bdf_Never%20clean%20twice.svg"
            alt="Never clean the same data from CSV, Excel or online source twice. "
            css={imgInstruction}
          />
        </div>
      </div>
    </>
  );
}
