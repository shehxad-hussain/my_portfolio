import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markup -------- //
import { fontSizeMarkup, lineHeightMarkup, letterSpacingMarkup } from 'markups/styleguide/misc';
// -------- data -------- //
const quickAccess = [
  { title: 'Spacing', url: 'snippet-1' },
  { title: 'Font Size', url: 'snippet-2' },
  { title: 'Line Height', url: 'snippet-3' },
  { title: 'Letter Spacing', url: 'snippet-4' },
  { title: 'Gutters', url: 'snippet-5' },
  { title: 'Retina Images', url: 'snippet-6' }
];

const Misc: FC = () => {
  return (
    <DocLayout
      pageTitle="Misc"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-12"
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Learn more about some miscellaneous styling features used in Sandbox."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Spacing</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              Sandbox adds additional spacing variables to existing{' '}
              <a
                href="https://getbootstrap.com/docs/5.2/utilities/spacing/"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                Bootstrap spacing
              </a>{' '}
              ranging between values <mark className="doc">0</mark> and <mark className="doc">25</mark>
            </p>
          </div>
        </div>
      </section>

      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Font Size</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              Quickly change the font-size of text using <code className="code">.fs-*</code> classes ranging between{' '}
              <mark className="doc">1</mark> and <mark className="doc">200</mark>, while <mark className="doc">sm</mark>
              , and <mark className="doc">lg</mark> also apply.
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
                <CodeHighlight language="html">{fontSizeMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Line Height</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              Change the line height with <code className="code">.lh-*</code> utilities.
            </p>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="html">{lineHeightMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-5">Letter Spacing</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              Change the letter spacing with <code className="code">.ls-*</code> utilities.
            </p>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="html">{letterSpacingMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-5">Gutters</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              Spacing variables mentioned above can also be used for column gutters. More information regarding
              Bootstrap gutters can be found on{' '}
              <a
                href="https://getbootstrap.com/docs/5.2/layout/gutters/"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                Bootstrap docs
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="snippet-6" className="wrapper py-16">
        <h2 className="mb-5">Retina Images</h2>
        <div className="card">
          <div className="card-body">
            <p className="mb-0">
              In order to display a high resolution image on devices with retina display, you need two versions of the
              image. One with regular size and another with twice its size. The high resolution one should have the
              exact same name with <mark className="doc">@2x</mark> at the end.
            </p>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="html">{`<img src="logo.png" srcSet="logo@2x.png 2x" alt="" />`}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Misc;
