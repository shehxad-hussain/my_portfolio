import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react';
import ThemeProvider from 'theme/ThemeProvider';

// Bootstrap and custom scss
import 'assets/scss/style.scss';
// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import 'plugins/scrollcue/scrollCue.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // load bootstrap functionality
      (() => {
        const bootstrap = require('bootstrap');

        // Enables multilevel dropdown
        (function (bs) {
          const CLASS_NAME = 'has-child-dropdown-show';

          bs.Dropdown.prototype.toggle = (function (_original) {
            return function () {
              document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
                e.classList.remove(CLASS_NAME);
              });
              // @ts-ignore
              let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
              for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                dd.classList.add(CLASS_NAME);
              }
              // @ts-ignore
              return _original.call(this);
            };
          })(bs.Dropdown.prototype.toggle);

          document.querySelectorAll('.dropdown').forEach(function (dd) {
            dd.addEventListener('hide.bs.dropdown', function (e) {
              // @ts-ignore
              if (this.classList.contains(CLASS_NAME)) {
                // @ts-ignore
                this.classList.remove(CLASS_NAME);
                e.preventDefault();
              }
              e.stopPropagation();
            });
          });
        })(bootstrap);
      })();
    }
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shehzad Hussain Portfolio</title>
      </Head>

      <ThemeProvider>
        <div className="page-loader" />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
