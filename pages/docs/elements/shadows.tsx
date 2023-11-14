import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

const Shadows: FC = () => {
  const markup = `<div className="shadow-none p-3 bg-gray rounded mb-6">No shadow</div>
<div className="shadow-sm p-3 bg-white rounded mb-6">Small shadow</div>
<div className="shadow p-3 bg-white rounded mb-6">Regular shadow</div>
<div className="shadow-lg p-3 bg-white rounded">Larger shadow</div>
`;

  return (
    <DocLayout
      pageTitle="Shadows"
      descriptionClass="lead px-xxl-12"
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description={
        <>
          Add or remove shadows to elements with box-shadow utilities.{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/utilities/shadows/"
            target="_blank"
            rel="noreferrer"
            className="hover more"
          >
            Bootstrap docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Examples</h2>
        <div className="card">
          <div className="card-body bg-light rounded-top">
            <div className="shadow-none p-3 bg-gray rounded mb-6">No shadow</div>
            <div className="shadow-sm p-3 bg-white rounded mb-6">Small shadow</div>
            <div className="shadow p-3 bg-white rounded mb-6">Regular shadow</div>
            <div className="shadow-lg p-3 bg-white rounded">Larger shadow</div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Shadows;
