import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { simpleMarkup, dismissalMarkup } from 'markups/elements/alerts';

// -------- data -------- //
const quickAccess = [
  { title: 'Simple', url: 'snippet-1' },
  { title: 'Dismissing', url: 'snippet-2' }
];

const Alerts: FC = () => {
  return (
    <DocLayout
      pageTitle="Alerts"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-6 mx-auto"
      description={
        <>
          Use our custom alert styles to provide contextual feedback messages for typical user actions.{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/alerts/"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Bootstrap docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Simple</h2>
        <div className="card">
          <div className="card-body">
            <div className="alert alert-primary alert-icon" role="alert">
              <i className="uil uil-star" /> A simple primary alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
            </div>
            <div className="alert alert-secondary alert-icon" role="alert">
              <i className="uil uil-clock" /> A simple secondary alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
            </div>
            <div className="alert alert-success alert-icon" role="alert">
              <i className="uil uil-check-circle" /> A simple success alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
            </div>
            <div className="alert alert-danger alert-icon" role="alert">
              <i className="uil uil-times-circle" /> A simple danger alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
            </div>
            <div className="alert alert-warning alert-icon" role="alert">
              <i className="uil uil-exclamation-triangle" /> A simple warning alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
            </div>
            <div className="alert alert-info alert-icon" role="alert">
              <i className="uil uil-exclamation-circle" /> A simple info alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
            </div>
            <div className="alert alert-light alert-icon" role="alert">
              <i className="uil uil-lock" /> A simple light alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
            </div>
            <div className="alert alert-dark alert-icon" role="alert">
              <i className="uil uil-map-marker-info" /> A simple dark alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .
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
                <CodeHighlight language="jsx">{simpleMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper py-16">
        <h2 className="mb-5">Dismissing</h2>

        <div className="card">
          <div className="card-body">
            <div className="alert alert-primary alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-star" /> A simple primary alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>

            <div className="alert alert-secondary alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-clock" /> A simple secondary alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>

            <div className="alert alert-success alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-check-circle" /> A simple success alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>

            <div className="alert alert-danger alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-times-circle" /> A simple danger alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>

            <div className="alert alert-warning alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-exclamation-triangle" /> A simple warning alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>

            <div className="alert alert-info alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-exclamation-circle" /> A simple info alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>

            <div className="alert alert-light alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-lock" /> A simple light alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            </div>

            <div className="alert alert-dark alert-icon alert-dismissible fade show" role="alert">
              <i className="uil uil-map-marker-info" /> A simple dark alert with{' '}
              <a href="#" className="alert-link hover">
                an example link
              </a>
              .<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
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
                <CodeHighlight language="jsx">{dismissalMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Alerts;
