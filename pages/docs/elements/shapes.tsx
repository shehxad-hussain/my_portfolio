import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import NextLink from 'components/reuseable/links/NextLink';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { dotMarkup, lineMarkup, solidMarkup } from 'markups/elements/shapes';
// -------- data -------- //
const quickAccess = [
  { title: 'Dot', url: 'snippet-1' },
  { title: 'Line', url: 'snippet-2' },
  { title: 'Solid', url: 'snippet-3' }
];

const Shapes: FC = () => {
  return (
    <DocLayout
      pageTitle="Shapes"
      quickAccssLinks={quickAccess}
      description="Use our custom shapes to add on your pages."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Dot</h2>
        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-3">
                <div className="shape bg-dot yellow w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-dot blue w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-dot red w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-dot green w-18 h-18" />
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
                <CodeHighlight language="jsx">{dotMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Line</h2>
        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-3">
                <div className="shape bg-line yellow w-19 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-line blue w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-line rounded-circle red w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-line rounded-circle green w-18 h-18" />
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
                <CodeHighlight language="jsx">{lineMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-3">Solid</h2>
        <p className="lead mb-8">
          All background color options (
          <NextLink title="solid" href="/background" className="internal" />,{' '}
          <NextLink title="soft" href="/background" className="internal" />,{' '}
          <NextLink title="pale" href="/background" className="internal" />) are available to use.
        </p>

        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-3">
                <div className="shape bg-soft-yellow rounded w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-soft-blue rounded w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-soft-red rounded-circle w-18 h-18" />
              </div>

              <div className="col-lg-3">
                <div className="shape bg-soft-green rounded-circle w-18 h-18" />
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
                <CodeHighlight language="jsx">{solidMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Shapes;
