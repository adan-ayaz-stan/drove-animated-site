import Head from "next/head";
import Script from "next/script";
import { ParallaxProvider } from "react-scroll-parallax";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          {`
            
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
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gridTemplateColumns: "1fr",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1000,
        }}
        id="splash-screen"
      >
        <div
          id="splash-screen-top"
          style={{
            position: "relative",
            top: "0%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            borderBottom: "solid 1px black",
            backgroundColor: "#111",
            transition: "all ease-in 1s",
            zIndex: 100,
          }}
        >
          <h1
            id="splash-screen-top-h1"
            style={{
              position: "relative",
              top: "0",
              margin: "0",
              color: "#fff",
              opacity: 1,
              textTransform: "uppercase",
              fontFamily: "'URW Geometric SemiBold'",
              fontSize: "4em",
              transition: "all ease-in 1s",
            }}
          >
            DROOV
          </h1>
        </div>
        <div
          id="splash-screen-bottom"
          style={{
            position: "relative",
            top: "0%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "#111",
            transition: "all ease-in 1s",
            zIndex: 100,
          }}
        >
          <h1
            id="splash-screen-bottom-h1"
            style={{
              position: "relative",
              top: "0",
              margin: "0",
              color: "#fff",
              opacity: 1,
              textTransform: "uppercase",
              fontFamily: "'URW Geometric SemiBold'",
              fontSize: "4em",
              transition: "all ease-in 1s",
            }}
          >
            Loading
          </h1>
        </div>
      </div>
      <ParallaxProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ParallaxProvider>
      <Script strategy="beforeInteractive">{`
        
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
                setTimeout(() => {
                  document.getElementById('splash-screen').style.zIndex = '-100';
                }, 1000);
              }, 1000);
            }, 1000);
          }
        }


        // Scroll Speed JS
        function init(){
          new SmoothScroll(document,120,12)
        }
        
        function SmoothScroll(target, speed, smooth) {
          if (target === document)
            target = (document.scrollingElement 
                      || document.documentElement 
                      || document.body.parentNode 
                      || document.body) // cross browser support for document scrolling
              
          var moving = false
          var pos = target.scrollTop
          var frame = target === document.body 
                      && document.documentElement 
                      ? document.documentElement 
                      : target // safari is the new IE
          
          target.addEventListener('mousewheel', scrolled, { passive: false })
          target.addEventListener('DOMMouseScroll', scrolled, { passive: false })
        
          function scrolled(e) {
            e.preventDefault(); // disable default scrolling
        
            var delta = normalizeWheelDelta(e)
        
            pos += -delta * speed
            pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
        
            if (!moving) update()
          }
        
          function normalizeWheelDelta(e){
            if(e.detail){
              if(e.wheelDelta)
                return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
              else
                return -e.detail/3 // Firefox
            }else
              return e.wheelDelta/120 // IE,Safari,Chrome
          }
        
          function update() {
            moving = true
            
            var delta = (pos - target.scrollTop) / smooth
            
            target.scrollTop += delta
            
            if (Math.abs(delta) > 0.5)
              requestFrame(update)
            else
              moving = false
          }
        
          var requestFrame = function() { // requestAnimationFrame cross browser
            return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function(func) {
                window.setTimeout(func, 1000 / 50);
              }
            );
          }()
        }

        new SmoothScroll(document,80,25)

        `}</Script>
    </>
  );
}

export default MyApp;
