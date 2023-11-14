import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markup -------- //
import { textColorMarkup, bgColorMarkup } from 'markups/styleguide/colors';
// -------- data -------- //
const quickAccess = [
  { title: 'Changing Primary', url: 'snippet-2' },
  { title: 'Background Colors', url: 'snippet-3' },
  { title: 'Text Colors', url: 'snippet-4' }
];

const Color: FC = () => {
  return (
    <DocLayout
      pageTitle="Color"
      quickAccssLinks={quickAccess}
      description="Use our custom color options to add color to your backgrounds, text or to change the color scheme."
    >
      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Changing Primary Color</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-2">
              To change the primary color to a custom color, open{' '}
              <code className="file">src/assets/scss/user-variables.scss</code> and assign your custom color value to{' '}
              <code className="code">$primary</code>.
            </p>

            {/* <p className="mb-0">
              This{' '}
              <a
                href="https://www.youtube.com/watch?v=kQow-YDksXA"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                quick video
              </a>{' '}
              demonstrates how to changing the primary color.
            </p> */}
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="scss">$primary: #36a6cf;</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Background Colors</h2>
        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-yellow text-white">.bg-yellow</div>
                  <div className="card-body p-4 bg-pale-yellow text-yellow">.bg-pale-yellow</div>
                  <div className="card-footer p-4 border-0 bg-soft-yellow text-yellow">.bg-soft-yellow</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-orange text-white">.bg-orange</div>
                  <div className="card-body p-4 bg-pale-orange text-orange">.bg-pale-orange</div>
                  <div className="card-footer p-4 border-0 bg-soft-orange text-orange">.bg-soft-orange</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-red text-white">.bg-red</div>
                  <div className="card-body p-4 bg-pale-red text-red">.bg-pale-red</div>
                  <div className="card-footer p-4 border-0 bg-soft-red text-red">.bg-soft-red</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-pink text-white">.bg-pink</div>
                  <div className="card-body p-4 bg-pale-pink text-pink">.bg-pale-pink</div>
                  <div className="card-footer p-4 border-0 bg-soft-pink text-pink">.bg-soft-pink</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-violet text-white">.bg-violet</div>
                  <div className="card-body p-4 bg-pale-violet text-violet">.bg-pale-violet</div>
                  <div className="card-footer p-4 border-0 bg-soft-violet text-violet">.bg-soft-violet</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-purple text-white">.bg-purple</div>
                  <div className="card-body p-4 bg-pale-purple text-purple">.bg-pale-purple</div>
                  <div className="card-footer p-4 border-0 bg-soft-purple text-purple">.bg-soft-purple</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-blue text-white">.bg-blue</div>
                  <div className="card-body p-4 bg-pale-blue text-blue">.bg-pale-blue</div>
                  <div className="card-footer p-4 border-0 bg-soft-blue text-blue">.bg-soft-blue</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-aqua text-white">.bg-aqua</div>
                  <div className="card-body p-4 bg-pale-aqua text-aqua">.bg-pale-aqua</div>
                  <div className="card-footer p-4 border-0 bg-soft-aqua text-aqua">.bg-soft-aqua</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-green text-white">.bg-green</div>
                  <div className="card-body p-4 bg-pale-green text-green">.bg-pale-green</div>
                  <div className="card-footer p-4 border-0 bg-soft-green text-green">.bg-soft-green</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-leaf text-white">.bg-leaf</div>
                  <div className="card-body p-4 bg-pale-leaf text-leaf">.bg-pale-leaf</div>
                  <div className="card-footer p-4 border-0 bg-soft-leaf text-leaf">.bg-soft-leaf</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-ash text-white">.bg-ash</div>
                  <div className="card-body p-4 bg-pale-ash text-ash">.bg-pale-ash</div>
                  <div className="card-footer p-4 border-0 bg-soft-ash text-ash">.bg-soft-ash</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-navy text-white">.bg-navy</div>
                  <div className="card-body p-4 bg-pale-navy text-navy">.bg-pale-navy</div>
                  <div className="card-footer p-4 border-0 bg-soft-navy text-navy">.bg-soft-navy</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-fuchsia text-white">.bg-fuchsia</div>
                  <div className="card-body p-4 bg-pale-fuchsia text-fuchsia">.bg-pale-fuchsia</div>
                  <div className="card-footer p-4 border-0 bg-soft-fuchsia text-fuchsia">.bg-soft-fuchsia</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-sky text-white">.bg-sky</div>
                  <div className="card-body p-4 bg-pale-sky text-sky">.bg-pale-sky</div>
                  <div className="card-footer p-4 border-0 bg-soft-sky text-sky">.bg-soft-sky</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-header p-4 border-0 bg-grape text-white">.bg-grape</div>
                  <div className="card-body p-4 bg-pale-grape text-grape">.bg-pale-grape</div>
                  <div className="card-footer p-4 border-0 bg-soft-grape text-grape">.bg-soft-grape</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-body rounded p-4 border-0 gradient-1 text-white">.gradient-1</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-body rounded p-4 border-0 gradient-2 text-white">.gradient-2</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-body rounded p-4 border-0 gradient-3 text-white">.gradient-3</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-body rounded p-4 border-0 gradient-4 text-white">.gradient-4</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-body rounded p-4 border-0 gradient-5 text-white">.gradient-5</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-body rounded p-4 border-0 gradient-6 text-white">.gradient-6</div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card shadow-none">
                  <div className="card-body rounded p-4 border-0 gradient-7 text-white">.gradient-7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="html">{bgColorMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Text Colors</h2>
        <div className="card">
          <div className="card-body">
            <div className="row gy-8">
              <div className="col-md-6 col-lg-4">
                <p className="text-yellow">.text-yellow</p>
                <p className="text-orange">.text-orange</p>
                <p className="text-red">.text-red</p>
                <p className="text-pink">.text-pink</p>
                <p className="text-fuchsia mb-0">.text-fuchsia</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-violet">.text-violet</p>
                <p className="text-purple">.text-purple</p>
                <p className="text-blue">.text-blue</p>
                <p className="text-aqua">.text-aqua</p>
                <p className="text-sky mb-0">.text-sky</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-green">.text-green</p>
                <p className="text-leaf">.text-leaf</p>
                <p className="text-ash">.text-ash</p>
                <p className="text-navy">.text-navy</p>
                <p className="text-grape mb-0">.text-grape</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-primary mb-0">.text-primary</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-muted mb-0">.text-muted</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-white bg-black d-inline-block py-1 px-2 mb-0">.text-white</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-gradient gradient-1">.gradient-1</p>
                <br />
                <p className="text-gradient gradient-2">.gradient-2</p>
                <br />
                <p className="text-gradient gradient-3">.gradient-3</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-gradient gradient-4">.gradient-4</p>
                <br />
                <p className="text-gradient gradient-5">.gradient-5</p>
              </div>

              <div className="col-md-6 col-lg-4">
                <p className="text-gradient gradient-6">.gradient-6</p>
                <br />
                <p className="text-gradient gradient-7">.gradient-7</p>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="html">{textColorMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Color;
