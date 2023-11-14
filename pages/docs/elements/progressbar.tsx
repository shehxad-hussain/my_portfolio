import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- hook -------- //
import useProgressbar from 'hooks/useProgressbar';
// -------- markups -------- //
import { lineMarkup, circleMarkup } from 'markups/elements/progressbar';
// -------- data -------- //
const quickAccess = [
  { title: 'Line', url: 'snippet-1' },
  { title: 'Circle', url: 'snippet-2' }
];

const Progressbar: FC = () => {
  // used progress bar effect
  useProgressbar();

  return (
    <DocLayout
      pageTitle="Progressbar"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-11"
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Examples and instructions on how to add colorful progressbars on your website."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Line</h2>

        <p>
          Call the <code className="code">useProgressbar()</code> hook on the top of component to enable progress
          functionality.
        </p>
        <p className="lead">Available color options:</p>
        <p className="lead mb-8">
          <code className="code">primary</code>, <code className="code">aqua</code>, <code className="code">green</code>
          , <code className="code">leaf</code>, <code className="code">navy</code>, <code className="code">orange</code>
          , <code className="code">pink</code>, <code className="code">purple</code>, <code className="code">red</code>,{' '}
          <code className="code">violet</code>, <code className="code">yellow</code>,{' '}
          <code className="code">fuchsia</code>, <code className="code">sky</code>, <code className="code">grape</code>,{' '}
          <code className="code">soft-primary</code>, <code className="code">soft-aqua</code>,{' '}
          <code className="code">soft-green</code>, <code className="code">soft-leaf</code>,{' '}
          <code className="code">soft-navy</code>, <code className="code">soft-orange</code>,{' '}
          <code className="code">soft-pink</code>, <code className="code">soft-purple</code>,{' '}
          <code className="code">soft-red</code>, <code className="code">soft-violet</code>,{' '}
          <code className="code">soft-yellow</code>, <code className="code">soft-fuchsia</code>,{' '}
          <code className="code">soft-sky</code>, <code className="code">soft-grape</code>
        </p>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-7">
                <ul className="progress-list mb-10">
                  <li>
                    <p>Marketing</p>
                    <div className="progressbar line blue" data-value="100" />
                  </li>
                  <li>
                    <p>Strategy</p>
                    <div className="progressbar line green" data-value="80" />
                  </li>
                  <li>
                    <p>Development</p>
                    <div className="progressbar line red" data-value="85" />
                  </li>
                  <li>
                    <p>Stabilization</p>
                    <div className="progressbar line yellow" data-value="75" />
                  </li>
                </ul>

                <ul className="progress-list">
                  <li>
                    <p>Marketing</p>
                    <div className="progressbar line soft-blue" data-value="100" />
                  </li>
                  <li>
                    <p>Strategy</p>
                    <div className="progressbar line soft-green" data-value="80" />
                  </li>
                  <li>
                    <p>Development</p>
                    <div className="progressbar line soft-red" data-value="85" />
                  </li>
                  <li>
                    <p>Stabilization</p>
                    <div className="progressbar line soft-yellow" data-value="75" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{lineMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-3">Semi Circle</h2>
        <p className="lead">Available color options:</p>
        <p className="lead mb-8">
          <code className="code">primary</code>, <code className="code">aqua</code>, <code className="code">green</code>
          , <code className="code">leaf</code>, <code className="code">navy</code>, <code className="code">orange</code>
          , <code className="code">pink</code>, <code className="code">purple</code>, <code className="code">red</code>,{' '}
          <code className="code">violet</code>, <code className="code">yellow</code>,{' '}
          <code className="code">fuchsia</code>, <code className="code">sky</code>, <code className="code">grape</code>,{' '}
          <code className="code">soft-primary</code>, <code className="code">soft-aqua</code>,{' '}
          <code className="code">soft-green</code>, <code className="code">soft-leaf</code>,{' '}
          <code className="code">soft-navy</code>, <code className="code">soft-orange</code>,{' '}
          <code className="code">soft-pink</code>, <code className="code">soft-purple</code>,{' '}
          <code className="code">soft-red</code>, <code className="code">soft-violet</code>,{' '}
          <code className="code">soft-yellow</code>, <code className="code">soft-fuchsia</code>,{' '}
          <code className="code">soft-sky</code>, <code className="code">soft-grape</code>
        </p>

        <div className="card">
          <div className="card-body">
            <div className="row gy-6 text-center">
              <div className="col-md-6 col-lg-3">
                <div className="progressbar semi-circle blue" data-value="40" />
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="progressbar semi-circle green" data-value="80" />
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="progressbar semi-circle soft-red" data-value="65" />
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="progressbar semi-circle soft-yellow" data-value="45" />
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{circleMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Progressbar;
