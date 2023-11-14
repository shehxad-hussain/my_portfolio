import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { underlineMarkup, underlineThreeMarkup, underlineTwoMarkup } from 'markups/elements/text-highlight';
// -------- data -------- //
const quickAccess = [
  { title: 'Underline', url: 'snippet-1' },
  { title: 'Underline 2', url: 'snippet-2' },
  { title: 'Underline 3', url: 'snippet-3' },
  { title: 'Mark', url: 'snippet-4' }
];

const TextHighlight: FC = () => {
  return (
    <DocLayout
      pageTitle="Text Highlight"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-10"
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom text highlight styles to mark important text on your website."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Underline</h2>
        <div className="card">
          <div className="card-body">
            <p className="lead mb-0">
              Build and manage an <span className="underline">impressive</span> website with Sandbox in no time.
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
                <CodeHighlight language="jsx">{underlineMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Underline 2</h2>

        <div className="card">
          <div className="card-body">
            <h2 className="display-3 lh-xs mb-4">
              Build and manage an <span className="underline-2 yellow">impressive</span> website with Sandbox in no
              time.
            </h2>
            <h2 className="display-3 lh-xs mb-0">
              Build and manage an <span className="underline-2 underline-gradient-2">impressive</span> website with
              Sandbox in no time.
            </h2>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{underlineTwoMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Underline 3</h2>

        <div className="card">
          <div className="card-body">
            <h2 className="display-3 lh-xs mb-4">
              Build and manage an <span className="underline-3 style-1 red">impressive</span> website with Sandbox in no
              time.
            </h2>
            <h2 className="display-3 lh-xs mb-4">
              Build and manage an <span className="underline-3 style-2 yellow">impressive</span> website with Sandbox in
              no time.
            </h2>
            <h2 className="display-3 lh-xs mb-4">
              Build and manage an <span className="underline-3 style-3 green">impressive</span> website with Sandbox in
              no time.
            </h2>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{underlineThreeMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Mark</h2>

        <div className="card">
          <div className="card-body">
            <h2>
              We bring rapid <mark>solutions</mark> for your business.
            </h2>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">&lt;mark&gt;text&lt;/mark&gt;</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default TextHighlight;
