import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- data -------- //
const quickAccess = [
  { title: 'Font Options', url: 'snippet-1' },
  { title: 'Google Fonts', url: 'snippet-2' },
  { title: '@font-face', url: 'snippet-3' }
];

const Fonts: FC = () => {
  const fontFaceMarkup = `
  $path-to-fonts: '../fonts/myfont/myfont.css';
  $font-family-sans-serif: "My Font Name", sans-serif;`;

  const googleFontMarkup = `
  $path-to-fonts: 'GOOGLE FONT URL';
  $font-family-sans-serif: GOOGLE FONT NAME;`;

  return (
    <DocLayout
      pageTitle="Fonts"
      quickAccssLinks={quickAccess}
      description="Use one of the existing font options or a custom font of your choice to change the overall font in Sandbox."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Font Options</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled">
              <li className="mb-2">
                <h6 className="d-inline">Manrope</h6>
                <p className="d-inline">
                  {' '}
                  <a href="/demo-12" className="external" target="_blank">
                    Demo 12
                  </a>
                  ,{' '}
                  <a href="/demo-16" className="external" target="_blank">
                    Demo 16
                  </a>
                  ,{' '}
                  <a href="/demo-17" className="external" target="_blank">
                    Demo 17
                  </a>
                </p>
              </li>

              <li className="mb-2">
                <h6 className="d-inline">Thicccboi (thicccboi.css)</h6>
                <p className="d-inline">
                  {' '}
                  <a href="/demo-3" className="external" target="_blank">
                    Demo 3
                  </a>
                  ,{' '}
                  <a href="/demo-5" className="external" target="_blank">
                    Demo 5
                  </a>
                  ,{' '}
                  <a href="/demo-6" className="external" target="_blank">
                    Demo 6
                  </a>
                </p>
              </li>

              <li className="mb-2">
                <h6 className="d-inline">DM Serif + Manrope (dm.css)</h6>
                <p className="d-inline mb-0">
                  {' '}
                  <a href="/demo-2" className="external" target="_blank">
                    Demo 2
                  </a>
                  ,{' '}
                  <a href="/demo-4" className="external" target="_blank">
                    Demo 4
                  </a>
                  ,{' '}
                  <a href="/demo-8" className="external" target="_blank">
                    Demo 8
                  </a>
                </p>
              </li>

              <li>
                <h6 className="d-inline">Urbanist (urbanist.css)</h6>
                <p className="d-inline mb-0">
                  {' '}
                  <a href="/demo-19" className="external" target="_blank">
                    Demo 19
                  </a>
                  ,{' '}
                  <a href="/demo-20" className="external" target="_blank">
                    Demo 20
                  </a>
                  ,{' '}
                  <a href="/demo-21" className="external" target="_blank">
                    Demo 21
                  </a>
                </p>
              </li>
            </ul>

            {/* <p className="mb-0">
              Manrope is the default font in Sandbox. If you wish to use one of the other available font options, add
              the link of the font CSS file you wish to use inside the template. This{' '}
              <a
                href="https://www.youtube.com/watch?v=kQow-YDksXA"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                quick video
              </a>{' '}
              demonstrates how to add font.
            </p> */}
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Google Fonts</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              To use a custom Google Font, open <code className="file">src/assets/scss/user-variables.scss</code>, and
              use the example code below to add @import link and name of your font.
            </p>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="scss">{googleFontMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-5">@font-face</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              To use a custom font with @font-face, first add the font files inside folder{' '}
              <code className="folder">src/assets/fonts/</code> and <code className="folder">public/fonts/</code>. 
              Then open <code className="file">src/assets/scss/user-variables.scss</code>, and
              use the example code below to add @import custom font and name of your font.
            </p>

            {/* <p className="mb-0 mt-4">
              <strong>Note:</strong> This{' '}
              <a href="#" className="external" target="_blank" rel="noreferrer">
                quick video
              </a>{' '}
              demonstrates how to add new font in this template.
            </p> */}
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="scss">{fontFaceMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Fonts;
