import Head from "next/head";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <style>
          {`
            .splash-screen {
              display: grid;
              grid-template-rows: 1fr 1fr;
              grid-template-columns: 1fr;

              position: fixed;
              top: 0;
              left: 0;

              width: 100%;
              height: 100%;
              
              overflow: hidden;
            }
            .splash-screen div {
              position: relative;
              top: 0%;
              display: flex;
              justify-content: center;
              background-color: #111;
              transition: all ease-in 1s;
              z-index: 100;
            }
            .splash-screen div:first-child {
              align-items: flex-end;
              z-index: 100;
            }
            .splash-screen div:last-child {
              align-items: flex-start;
              border-top: solid 1px black;
            }
            .splash-screen div h1 {
              position: relative;
              top: 0;
              margin: 0;
              color: #fff;
              opacity: 1;
              text-transform: uppercase;
              font-family: 'URW Geometric SemiBold';
              font-size: 4em;
              transition: all ease-in 1s;
            }
          `}
        </style>
      </Head>
      <div className="splash-screen" id="splash-screen">
        <div id="splash-screen-top">
          <h1 id="splash-screen-top-h1">DROOV</h1>
        </div>
        <div id="splash-screen-bottom">
          <h1 id="splash-screen-bottom-h1">Loading</h1>
        </div>
      </div> */}
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      {/* <Script strategy="beforeInteractive">{`
        document.onreadystatechange = function() {
          if (document.readyState == 'complete') {
            setTimeout(() => {
              document.getElementById('splash-screen-top-h1').style.top = '-20%';
              document.getElementById('splash-screen-bottom-h1').style.top = '20%';
              document.getElementById('splash-screen-top-h1').style.opacity = '0';
              document.getElementById('splash-screen-bottom-h1').style.opacity = '0';
              
              setTimeout(() => {
                document.getElementById('splash-screen-top').style.top = '-100%';
                document.getElementById('splash-screen-bottom').style.top = '100%';

              }, 1000)
            }, 1000);
          }
        }
        `}</Script> */}
    </>
  );
}

export default MyApp;
