import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { colorsMarkup, gradientsMarkup, shapesMarkup, sizesMarkup } from 'markups/elements/badges';
// -------- data -------- //
const quickAccess = [
  { title: 'Colors', url: 'snippet-1' },
  { title: 'Gradient', url: 'snippet-2' },
  { title: 'Shapes', url: 'snippet-3' },
  { title: 'Sizes', url: 'snippet-4' }
];

const Badges: FC = () => {
  return (
    <DocLayout
      pageTitle="Background"
      quickAccssLinks={quickAccess}
      description="Use our custom background styles to add image, color, pattern or video backgrounds to your sections."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Colors</h2>
        <div className="card">
          <div className="card-body">
            <span className="badge bg-yellow rounded-pill">Badge</span>
            <span className="badge bg-orange rounded-pill">Badge</span>
            <span className="badge bg-red rounded-pill">Badge</span>
            <span className="badge bg-pink rounded-pill">Badge</span>
            <span className="badge bg-violet rounded-pill">Badge</span>
            <span className="badge bg-purple rounded-pill">Badge</span>
            <span className="badge bg-blue rounded-pill">Badge</span>
            <span className="badge bg-aqua rounded-pill">Badge</span>
            <span className="badge bg-green rounded-pill">Badge</span>
            <span className="badge bg-leaf rounded-pill">Badge</span>
            <span className="badge bg-fuchsia rounded-pill">Badge</span>
            <span className="badge bg-sky rounded-pill">Badge</span>
            <span className="badge bg-grape rounded-pill">Badge</span>
            <span className="badge bg-dark rounded-pill">Badge</span>
            <span className="badge bg-ash text-white rounded-pill">Badge</span>
            <div className="mb-2" />
            <span className="badge bg-pale-yellow text-yellow rounded-pill">Badge</span>
            <span className="badge bg-pale-orange text-orange rounded-pill">Badge</span>
            <span className="badge bg-pale-red text-red rounded-pill">Badge</span>
            <span className="badge bg-pale-pink text-pink rounded-pill">Badge</span>
            <span className="badge bg-pale-violet text-violet rounded-pill">Badge</span>
            <span className="badge bg-pale-purple text-purple rounded-pill">Badge</span>
            <span className="badge bg-pale-blue text-blue rounded-pill">Badge</span>
            <span className="badge bg-pale-aqua text-aqua rounded-pill">Badge</span>
            <span className="badge bg-pale-green text-green rounded-pill">Badge</span>
            <span className="badge bg-pale-leaf text-leaf rounded-pill">Badge</span>
            <span className="badge bg-pale-fuchsia text-fuchsia rounded-pill">Badge</span>
            <span className="badge bg-pale-sky text-sky rounded-pill">Badge</span>
            <span className="badge bg-pale-grape text-grape rounded-pill">Badge</span>
            <span className="badge bg-pale-dark text-dark rounded-pill">Badge</span>
            <span className="badge bg-pale-ash text-dark rounded-pill">Badge</span>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{colorsMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Gradients</h2>
        <div className="card">
          <div className="card-body">
            <span className="badge gradient-1 rounded-pill">Badge</span>
            <span className="badge gradient-2 rounded-pill">Badge</span>
            <span className="badge gradient-3 rounded-pill">Badge</span>
            <span className="badge gradient-4 rounded-pill">Badge</span>
            <span className="badge gradient-5 rounded-pill">Badge</span>
            <span className="badge gradient-6 rounded-pill">Badge</span>
            <span className="badge gradient-7 rounded-pill">Badge</span>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{gradientsMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Shapes</h2>
        <div className="card">
          <div className="card-body">
            <span className="badge bg-primary rounded-0">Square</span>
            <span className="badge bg-primary rounded">Rounded</span>
            <span className="badge bg-primary rounded-pill">Pill</span>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{shapesMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Sizes</h2>
        <div className="card">
          <div className="card-body">
            <span className="badge bg-primary rounded-pill">Default</span>
            <span className="badge badge-lg bg-primary rounded-pill">Large</span>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{sizesMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Badges;
