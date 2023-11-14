import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markup -------- //
import { themeColorMarkup, themeProviderMarkup } from 'markups/styleguide/colors';
import Link from 'next/link';
// -------- data -------- //
const quickAccess = [
  { title: 'Core Styles', url: 'snippet-1' },
  { title: 'Build time theming', url: 'snippet-2' },
  { title: 'Runtime theming', url: 'snippet-3' }
];

const ThemeSetup: FC = () => {
  return (
    <DocLayout
      pageTitle="Theme"
      quickAccssLinks={quickAccess}
      description="Set defalut colors and fonts using build time or runtime theming"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <div className="card mb-5">
          <div className="card-body">
            <h2>Core Style</h2>
            <p>
              Core scss file <mark className="doc">'src/assets/scss/style.scss'</mark> is loaded in <mark className="doc">_app.tsx</mark>.
              This <mark className="doc">style.scss</mark> loads bootstrap css, defalut color and font.
            </p>

            <p>Theme (Color & font) can be changed by using two approaches</p>
            <ol>
              <li>Built time theming (Recommended)</li>
              <li>Runtime theming</li>
            </ol>

          </div>

        </div>
      </section>


      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-8">
        <div className="card mb-5">
          <div className="card-body">
            <h2 className="mb-4">Build time theming</h2>
            <h4>Step 2: Update color & fonts</h4>
            <p>Follow <Link href='/docs/styleguide/colors'>Colors</Link> and <Link href='/docs/styleguide/fonts'>Fonts</Link> documentation.</p>

            <h4>Step 1: Remove theme provider</h4>
            <p className="mb-2">
              Remove the <mark className="doc">ThemeProvider</mark> and <mark className='doc'> &lt;div className="page-loader" /&gt;</mark> component
              from <mark className="file">pages/_app.tsx</mark>, also delete the <mark className="file">src/theme</mark>{' '}
              folder. This is used for runtime theming.
            </p>
          </div>
          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="js">{themeProviderMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="snippet-3" className="wrapper pt-8 mb-12">
        <div className="card">
          <div className="card-body">
            <h2 className='mb-4'>Runtime theming</h2>
            <p><strong>Note:</strong> We do not recommend this approach. We used this only for demo purpose </p>

            <h4>Theme Provider</h4>
            <p>
              Few demos has different colors and fonts. We override the defalut color and font on runtime in the browser.
              <mark className='doc'>ThemeProvider</mark> injects necessary css files for overring the defaults.
            </p>

            <h4>How it works</h4>
            <p><mark className='doc'>ThemeProvider</mark> location is <mark className="folder">/src/theme</mark>.
              Please check <mark className="folder">/src/theme/themeOptions</mark>.
              <mark className="doc">changeTheme</mark> function of <mark className="folder">/src/theme/themeOptions</mark> injects css
              files based on current route loaded in browser. <mark className="doc">changeColor</mark> function
              injects 2 css files, one is the color CSS path and another is the font CSS path.
            </p>
            <h4>Available color options:</h4>

            <p>
              <mark className="doc">aqua.css</mark>, <mark className="doc">green.css</mark>,{' '}
              <mark className="doc">leaf.css</mark>, <mark className="doc">navy.css</mark>,{' '}
              <mark className="doc">orange.css</mark>, <mark className="doc">pink.css</mark>,{' '}
              <mark className="doc">purple.css</mark>, <mark className="doc">red.css</mark>,{' '}
              <mark className="doc">violet.css</mark>, <mark className="doc">yellow.css</mark>,{' '}
              <mark className="doc">fuchsia.css</mark>, <mark className="doc">sky.css</mark>,{' '}
              <mark className="doc">grape.css</mark>.
            </p>

            <p><strong className="text-dark">Pros:</strong> Multiple themes can be used besed on route </p>
            <p><strong className="text-dark">Cons:</strong> Theme loads after initializing the page. 
            So user may see default theme for very short time when page loads. You may need to use page loader to hide that.</p>

            <h4>Sass compilation</h4>
            <p>
              You need to run this command <kbd className="terminal">npm run sass</kbd>. When you successfully run this command then
              all scss converts to CSS inside the <mark className="folder">public/css</mark>
            </p>

            {/* <p className="mb-0 mt-4">
              <strong>Note:</strong> This{' '}
              <a href="#" className="external" target="_blank" rel="noreferrer">
                quick video
              </a>{' '}
              demonstrates how to added theme in template
            </p> */}
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="js">{themeColorMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default ThemeSetup;
