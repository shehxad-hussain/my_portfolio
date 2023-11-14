import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { lettersMarkup, imagesMarkup } from 'markups/elements/avatars';
// -------- data -------- //
const quickAccess = [
  { title: 'Letters', url: 'snippet-1' },
  { title: 'Images', url: 'snippet-2' }
];

const Avatars: FC = () => {
  return (
    <DocLayout
      pageTitle="Avatars"
      quickAccssLinks={quickAccess}
      description="Use our custom avatar styles on your profile images or initials."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Letters</h2>
        <p className="lead mb-8">
          Use any size between <mark className="doc">.w-1 / .h-1</mark> and <mark className="doc">.w-25 / .h-25</mark>{' '}
          to change the avatar size.
        </p>
        <div className="card">
          <div className="card-body d-flex flex-row align-items-center">
            <span className="avatar bg-primary text-white w-15 h-15 me-4">
              <span className="fs-30">TC</span>
            </span>

            <span className="avatar bg-pale-primary text-primary w-12 h-12 me-4">
              <span className="fs-18">AH</span>
            </span>

            <span className="avatar bg-soft-primary text-primary w-10 h-10 me-4">
              <span className="fs-15">CH</span>
            </span>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{lettersMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper py-16">
        <h2 className="mb-3">Image</h2>
        <p className="lead mb-8">
          Use any size between <mark className="doc">.w-1</mark> and <mark className="doc">.w-25</mark> to change the
          image size. Image height will change automatically. Make sure to use images with 1:1 ratio to avoid
          stretching.
        </p>
        <div className="card">
          <div className="card-body d-flex flex-row align-items-center">
            <img className="avatar w-15 me-4" src="/img/avatars/te1.jpg" srcSet="/img/avatars/te1@2x.jpg 2x" alt="" />
            <img className="avatar w-12 me-4" src="/img/avatars/te2.jpg" srcSet="/img/avatars/te2@2x.jpg 2x" alt="" />
            <img className="avatar w-10 me-4" src="/img/avatars/t3.jpg" srcSet="/img/avatars/t3@2x.jpg 2x" alt="" />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{imagesMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Avatars;
